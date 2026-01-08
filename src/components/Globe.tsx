'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import GeoJsonGeometry from 'three-geojson-geometry';

let OrbitControls: any;

interface Props {
  width?: number;
  height?: number;
  backgroundColor?: string;
  visitedCountries?: string[]; // ISO-2 codes
  focusCountry?: string | null;
  className?: string;
}

type Code = string;

const BRUTAL_RED = new THREE.Color('#ff2200');
const BRUTAL_BONE = new THREE.Color('#e8e4dc');

function normalizeName(s: string): string {
  return s.toLowerCase().replace(/[^a-z]+/g, ' ').trim();
}

function codeFromAdminName(adminOrName?: string): Code | null {
  if (!adminOrName) return null;
  const n = normalizeName(adminOrName);
  const map: Record<string, Code> = {
    'united states of america': 'US',
    'united states': 'US',
    'canada': 'CA',
    'mexico': 'MX',
    'turks and caicos islands': 'TC',
    'colombia': 'CO',
    'argentina': 'AR',
    'peru': 'PE',
    'uruguay': 'UY',
    'chile': 'CL',
    'united kingdom': 'GB',
    'ireland': 'IE',
    'iceland': 'IS',
    'faroe islands': 'FO',
    'norway': 'NO',
    'denmark': 'DK',
    'portugal': 'PT',
    'spain': 'ES',
    'france': 'FR',
    'italy': 'IT',
    'switzerland': 'CH',
    'germany': 'DE',
    'austria': 'AT',
    'czechia': 'CZ',
    'czech republic': 'CZ',
    'slovenia': 'SI',
    'croatia': 'HR',
    'bosnia and herzegovina': 'BA',
    'serbia': 'RS',
    'montenegro': 'ME',
    'albania': 'AL',
    'north macedonia': 'MK',
    'macedonia': 'MK',
    'greece': 'GR',
    'poland': 'PL',
    'latvia': 'LV',
    'hungary': 'HU',
    'georgia': 'GE',
    'turkiye': 'TR',
    'turkey': 'TR',
    'united arab emirates': 'AE',
    'morocco': 'MA',
    'kenya': 'KE',
    'indonesia': 'ID',
    'vietnam': 'VN',
    'laos': 'LA',
    'cambodia': 'KH',
    'singapore': 'SG',
    'taiwan': 'TW',
    'japan': 'JP',
    'south korea': 'KR',
    'republic of korea': 'KR',
    'new zealand': 'NZ',
    'liechtenstein': 'LI',
  };
  return map[n] || null;
}

function iso2FromProps(props: any): Code | null {
  if (!props) return null;
  // Primary: dataset uses ISO3166 keys
  const a2 = props['ISO3166-1-Alpha-2'];
  if (a2 && typeof a2 === 'string' && String(a2).toUpperCase() !== '-99') {
    return String(a2).toUpperCase();
  }

  const candidates = [props.ISO_A2, props.ISO2, props.iso_a2, props.WB_A2, props.wb_a2];
  for (const c of candidates) {
    if (c && typeof c === 'string' && c !== '-99') return String(c).toUpperCase();
  }
  const a3 = props['ISO3166-1-Alpha-3'] || props.ISO_A3 || props.iso_a3 || props.ADM0_A3;
  if (a3 && String(a3).toUpperCase() !== '-99') {
    const m: Record<string, string> = {
      USA: 'US', CAN: 'CA', MEX: 'MX', COL: 'CO', ARG: 'AR', PER: 'PE', URY: 'UY', CHL: 'CL',
      GBR: 'GB', IRL: 'IE', ISL: 'IS', FRO: 'FO', NOR: 'NO', DNK: 'DK', PRT: 'PT', ESP: 'ES',
      FRA: 'FR', ITA: 'IT', CHE: 'CH', DEU: 'DE', AUT: 'AT', CZE: 'CZ', SVN: 'SI', HRV: 'HR',
      BIH: 'BA', SRB: 'RS', MNE: 'ME', ALB: 'AL', MKD: 'MK', GRC: 'GR', POL: 'PL', LVA: 'LV',
      HUN: 'HU', GEO: 'GE', TUR: 'TR', ARE: 'AE', MAR: 'MA', KEN: 'KE', IDN: 'ID', VNM: 'VN',
      LAO: 'LA', KHM: 'KH', SGP: 'SG', TWN: 'TW', JPN: 'JP', KOR: 'KR', NZL: 'NZ', LIE: 'LI',
      TCA: 'TC', CZEH: 'CZ'
    };
    const k = String(a3).toUpperCase();
    if (m[k]) return m[k];
  }
  const byAdmin = codeFromAdminName(props.ADMIN || props.name);
  if (byAdmin) return byAdmin;
  return null;
}

export default function Globe({
  width = 500,
  height = 500,
  backgroundColor = 'transparent',
  visitedCountries = [],
  focusCountry = null,
  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const controlsRef = useRef<any>(null);
  const worldRef = useRef<THREE.Group | null>(null);
  // Canvas-based fills
  // No texture-based overlays; rely on mesh fills + borders

  // maps allow multiple meshes per ISO (multi-polygons)
  const lineByCode = useRef<Map<Code, THREE.LineSegments[]>>(new Map());
  const fillByCode = useRef<Map<Code, THREE.Mesh[]>>(new Map());

  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  // --- Helpers to build solid fill meshes from GeoJSON on a sphere ---
  // Match three-geojson-geometry orientation so fills align with borders
  const toXYZ = (lonDeg: number, latDeg: number, r: number) => {
    const lat = (latDeg * Math.PI) / 180;
    const lon = (lonDeg * Math.PI) / 180;
    // Equivalent to: x=r*cos(lat)*sin(lon); y=r*sin(lat); z=r*cos(lat)*cos(lon)
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const sinLon = Math.sin(lon);
    const cosLon = Math.cos(lon);
    const x = r * cosLat * sinLon;
    const y = r * sinLat;
    const z = r * cosLat * cosLon;
    return new THREE.Vector3(x, y, z);
  };

  // Build one geometry for a single Polygon (with holes), mapped onto sphere radius r
  const ringArea = (ring: number[][]) => {
    let area = 0;
    for (let i = 0, n = ring.length; i < n; i++) {
      const [x1, y1] = ring[i];
      const [x2, y2] = ring[(i + 1) % n];
      area += (x1 * y2 - x2 * y1);
    }
    return area / 2;
  };

  const ensureOrientation = (outer: THREE.Vector2[], holes: THREE.Vector2[][]) => {
    // THREE expects outer CCW and holes CW
    const outerArea = ringArea(outer.map(v => [v.x, v.y]));
    if (outerArea < 0) outer.reverse();
    for (const h of holes) {
      const a = ringArea(h.map(v => [v.x, v.y]));
      if (a > 0) h.reverse();
    }
  };

  const buildPolygonGeometry = (coords: number[][][], r: number) => {
    // coords: [ outerRing[[lon,lat],...], hole1[], hole2[] ]
    const unwrapRing = (ring: number[][]) => {
      // unwrap longitudes to keep continuity across the antimeridian
      if (!ring.length) return ring;
      const out: number[][] = [];
      let [prevLon, prevLat] = ring[0];
      let lonUnwrapped = prevLon;
      out.push([lonUnwrapped, prevLat]);
      for (let i = 1; i < ring.length; i++) {
        let [lon, lat] = ring[i];
        // normalize delta to [-180, 180]
        let d = lon - prevLon;
        while (d > 180) { lon -= 360; d -= 360; }
        while (d < -180) { lon += 360; d += 360; }
        lonUnwrapped = (out[out.length - 1][0] + d);
        out.push([lonUnwrapped, lat]);
        prevLon = ring[i][0];
        prevLat = lat;
      }
      return out;
    };
    const sanitize = (ring: number[][]) => {
      const unwrapped = unwrapRing(ring);
      const res: THREE.Vector2[] = [];
      for (let i = 0; i < unwrapped.length; i++) {
        const [lon, lat] = unwrapped[i];
        if (i > 0) {
          const [plon, plat] = unwrapped[i - 1];
          if (Math.abs(lon - plon) < 1e-8 && Math.abs(lat - plat) < 1e-8) continue;
        }
        res.push(new THREE.Vector2(lon, lat));
      }
      // drop closing duplicate if present
      if (res.length > 1) {
        const a = res[0], b = res[res.length - 1];
        if (Math.abs(a.x - b.x) < 1e-8 && Math.abs(a.y - b.y) < 1e-8) res.pop();
      }
      return res;
    };

    if (!coords || !coords.length) return null;
    const outer = sanitize(coords[0]);
    const holes = coords.slice(1).map(sanitize);
    if (outer.length < 3) return null;

    // Use Shape to triangulate with holes
    // Enforce consistent winding to avoid triangulation artifacts
    ensureOrientation(outer, holes);
    const shape = new THREE.Shape(outer.map(v => new THREE.Vector2(v.x, v.y)));
    for (const h of holes) {
      if (h.length >= 3) {
        const path = new THREE.Path(h.map(v => new THREE.Vector2(v.x, v.y)));
        shape.holes.push(path);
      }
    }
    const geom2D = new THREE.ShapeGeometry(shape, 1);

    // Project 2D lon/lat vertices to sphere
    const pos = geom2D.getAttribute('position') as THREE.BufferAttribute;
    const arr = pos.array as Float32Array;
    for (let i = 0; i < arr.length; i += 3) {
      const lon = arr[i + 0];
      const lat = arr[i + 1];
      const v = toXYZ(lon, lat, r);
      arr[i + 0] = v.x;
      arr[i + 1] = v.y;
      arr[i + 2] = v.z;
    }
    pos.needsUpdate = true;
    geom2D.computeVertexNormals();
    return geom2D;
  };

  // Build meshes for both Polygon and MultiPolygon
  const buildFillMeshes = (g: any, r: number, material: THREE.Material) => {
    const meshes: THREE.Mesh[] = [];
    if (!g) return meshes;
    if (g.type === 'Polygon') {
      const geom = buildPolygonGeometry(g.coordinates, r);
      if (geom) meshes.push(new THREE.Mesh(geom, material));
    } else if (g.type === 'MultiPolygon') {
      for (const poly of g.coordinates) {
        const geom = buildPolygonGeometry(poly, r);
        if (geom) meshes.push(new THREE.Mesh(geom, material));
      }
    }
    return meshes;
  };

  const createHatchMaterial = (color: THREE.Color | string) => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(color as any) },
        uAlpha: { value: 0.9 },
        uFreq: { value: 288.0 }, // 40% less dense than 480
        uThickness: { value: 0.035 },
        uSlant: { value: 1.0 },
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uAlpha;
        uniform float uFreq;
        uniform float uThickness;
        uniform float uSlant;
        varying vec3 vWorldPos;
        float stripeAA(float s, float thickness) {
          float d = abs(fract(s) - 0.5);
          float w = fwidth(s);
          return 1.0 - smoothstep(thickness*0.5, thickness*0.5 + w, d);
        }
        void main() {
          vec3 n = normalize(vWorldPos);
          float lon = atan(n.x, n.z);
          float lat = asin(n.y);
          float u = lon / (2.0 * 3.14159265);
          float v = lat / 3.14159265;
          float s1 = (u + v) * uFreq;
          float s2 = (u - v) * uFreq;
          float band1 = stripeAA(s1, uThickness);
          float band2 = stripeAA(s2, uThickness);
          float mask = max(band1, band2);
          // Ensure tiny features still visible: add small base alpha under stripes
          float base = 0.12;
          float alpha = clamp(base + (1.0 - base) * mask, 0.0, 1.0) * uAlpha;
          if (alpha < 0.02) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1,
      side: THREE.DoubleSide,
      alphaTest: 0.01,
    });
    return mat;
  };

  // Controls
  useEffect(() => {
    import('three/addons/controls/OrbitControls.js')
      .then(m => (OrbitControls = m.OrbitControls))
      .catch(() => {})
      .finally(() => {});
  }, []);

  // Load GeoJSON (client fetch)
  useEffect(() => {
    let mounted = true;
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(r => r.json())
      .then(json => { if (mounted) setData(json); })
      .catch(() => { if (mounted) setError('Failed to load country data'); });
    return () => { mounted = false; };
  }, []);

  // Build scene
  useEffect(() => {
    if (!containerRef.current || !data) return;

    // Cleanup prior
    while (containerRef.current.firstChild) containerRef.current.removeChild(containerRef.current.firstChild);
    lineByCode.current.clear();
    fillByCode.current.clear();

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    // Start 20% farther than before for a wider view
    camera.position.set(0, 0, 2.4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: backgroundColor === 'transparent' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    if (backgroundColor !== 'transparent') renderer.setClearColor(new THREE.Color(backgroundColor));
    else renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = OrbitControls ? new OrbitControls(camera, renderer.domElement) : null;
    if (controls) {
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.minDistance = 1.5;
      controls.maxDistance = 4;
      controls.enablePan = false;
      controlsRef.current = controls;
    }

    const world = new THREE.Group();
    worldRef.current = world;
    scene.add(world);

    // Removed base wireframe sphere overlay

    // Helpers to draw equirectangular fills on canvas
    const CANVAS_W = 2048;
    const CANVAS_H = 1024;
    const project = (lon: number, lat: number) => {
      const x = ((lon + 180) / 360) * CANVAS_W;
      const y = ((90 - lat) / 180) * CANVAS_H;
      return [x, y] as const;
    };
    const drawPolygonPath = (ctx: CanvasRenderingContext2D, coords: any) => {
      // coords: [ [ [lon,lat], ... ] , [hole], ...]
      ctx.beginPath();
      for (const ring of coords) {
        let first = true;
        for (const pt of ring) {
          const [x, y] = project(pt[0], pt[1]);
          if (first) { ctx.moveTo(x, y); first = false; }
          else { ctx.lineTo(x, y); }
        }
        ctx.closePath();
      }
    };

    const features: any[] = data.features || [];
    // Normalize visited list once for reliable membership checks
    const visitedSet = new Set((visitedCountries || []).map(c => String(c).trim().toUpperCase()));
    // Build a runtime region name → ISO2 map using Intl.DisplayNames (avoids hardcoding)
    const regionNameToCode = new Map<string, string>();
    try {
      const DN: any = (Intl as any).DisplayNames ? new (Intl as any).DisplayNames(['en'], { type: 'region' }) : null;
      if (DN && typeof DN.of === 'function') {
        for (let i = 65; i <= 90; i++) {
          for (let j = 65; j <= 90; j++) {
            const code = String.fromCharCode(i) + String.fromCharCode(j);
            const name = DN.of(code);
            if (name && name !== code) {
              regionNameToCode.set(normalizeName(String(name)), code);
            }
          }
        }
      }
    } catch {}

    features.forEach((f, idx) => {
      const codeRaw = iso2FromProps(f.properties);
      const nameGuess = regionNameToCode.get(normalizeName(f.properties?.name));
      const code = (codeRaw ? String(codeRaw).toUpperCase() : null) || nameGuess || null;
      const geom = new GeoJsonGeometry(f.geometry || f, 1, 5);

      // Borders
      const borderMat = new THREE.LineBasicMaterial({ color: BRUTAL_RED, transparent: true, opacity: 0.6 });
      const lines = new THREE.LineSegments(geom, borderMat);
      lines.renderOrder = 2;
      world.add(lines);
      const key = code || `UNK_${idx}`;
      const existingLines = lineByCode.current.get(key) || [];
      existingLines.push(lines);
      lineByCode.current.set(key, existingLines);

      // Explicit fill meshes with Atari-style hatch shader (per-country material)
      if (code && visitedSet.has(code)) {
        const g = f.geometry || f;
        const mat = createHatchMaterial(BRUTAL_RED);
        const meshes = buildFillMeshes(g, 0.999, mat);
        const arr: THREE.Mesh[] = fillByCode.current.get(code) || [];
        for (const mesh of meshes) {
          mesh.renderOrder = 1; // draw under borders
          world.add(mesh);
          arr.push(mesh);
        }
        fillByCode.current.set(code, arr);
      }

      // Accumulate visited fills on a canvas texture (robust across geometry types)
    });

    // No visited overlay sphere; fills are real meshes using a hatch shader

    // No highlight overlay sphere; selection indicated by border color only

    // Apply initial focus
    applyFocus(scene, focusCountry, lineByCode.current, fillByCode.current);

    // Expose simple debug info for quick validation in DevTools
    try {
      (window as any).__globeDebug = {
        features: features.length,
        visitedInput: Array.from(visitedSet),
        lineCodes: Array.from(lineByCode.current.keys()),
        fillCodes: Array.from(fillByCode.current.keys()),
      };
    } catch {}

    const tick = () => {
      controlsRef.current?.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    return () => {
      controlsRef.current?.dispose?.();
      renderer.dispose();
      world.clear();
      scene.clear();
    };
  }, [data, width, height, backgroundColor, visitedCountries.join('|')]);

  // Re-apply focus when it changes without rebuilding scene
  useEffect(() => {
    if (!sceneRef.current) return;
    applyFocus(sceneRef.current, focusCountry, lineByCode.current, fillByCode.current);
    // No overlay to update
  }, [focusCountry, data]);

  // Keep renderer size in sync
  useEffect(() => {
    if (!rendererRef.current || !cameraRef.current) return;
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  }, [width, height]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ width, height }}>
      {error && (
        <div className="absolute inset-0 grid place-items-center text-[var(--brutal-red)] bg-black/60">
          {error}
        </div>
      )}
    </div>
  );
}

function applyFocus(
  scene: THREE.Scene,
  focus: string | null,
  lineByCode: Map<Code, THREE.LineSegments[]>,
  fillByCode: Map<Code, THREE.Mesh[]>
) {
  let focusCode = focus ? String(focus).trim().toUpperCase() : null;
  if (focusCode && !lineByCode.has(focusCode)) {
    // If the focus code doesn't exist in lines, treat as no focus
    focusCode = null;
  }
  const BASE_LINE = 0.6;
  const FOCUS_LINE = 1.0; // brighter selected line

  // Lines
  for (const [code, arr] of lineByCode.entries()) {
    arr.forEach(l => {
      const m = l.material as THREE.LineBasicMaterial;
      const isFocus = !!focusCode && code === focusCode;
      m.color = new THREE.Color(isFocus ? '#e8e4dc' : BRUTAL_RED);
      // Do not dim others; keep base opacity
      m.opacity = isFocus ? FOCUS_LINE : BASE_LINE;
      m.transparent = true;
      m.needsUpdate = true;
    });
  }

  // Update fill color on focus to teal
  for (const [code, arr] of fillByCode.entries()) {
    const isFocus = !!focusCode && code === focusCode;
    arr.forEach(mesh => {
      const mat: any = mesh.material;
      if (mat && mat.isShaderMaterial && mat.uniforms && mat.uniforms.uColor) {
        const target = isFocus ? BRUTAL_BONE : BRUTAL_RED;
        mat.uniforms.uColor.value.copy(target);
        mat.needsUpdate = false; // uniforms update without rebuild
      }
    });
  }
}
