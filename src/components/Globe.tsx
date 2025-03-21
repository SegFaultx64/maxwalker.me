'use client';

import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import GeoJsonGeometry from 'three-geojson-geometry';

// We'll dynamically import OrbitControls for Next.js compatibility
let OrbitControls: any;

interface Props {
  width?: number;
  height?: number;
  backgroundColor?: string;
  visitedCountries?: string[]; // ISO-2 letter country codes
  focusCountry?: string | null; // Country to focus on
  className?: string;
}

const Globe: React.FC<Props> = ({
  width = 500,
  height = 500,
  backgroundColor = 'transparent',
  visitedCountries = [],
  focusCountry = null,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const [loading, setLoading] = useState(true);
  const [countriesData, setCountriesData] = useState<any>(null);
  const [controlsLoaded, setControlsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Scene references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<any>(null);
  const globeRef = useRef<THREE.Group | null>(null);
  
  // Store country mesh references
  const countryLinesRef = useRef<Record<string, THREE.LineSegments>>({});
  const countryFillsRef = useRef<Record<string, THREE.Mesh>>({});
  const nonVisitedCountryLinesRef = useRef<Record<string, THREE.LineSegments>>({});
  const focusCountryRef = useRef<string | null>(null);
  
  // Directly track current prop value without re-renders
  const currentFocusCountryRef = useRef<string | null>(focusCountry);
  
  // Update ref when prop changes (without causing re-render)
  useEffect(() => {
    // Only update the ref, which won't cause re-renders
    if (focusCountry !== currentFocusCountryRef.current) {
      currentFocusCountryRef.current = focusCountry;
      // IMPORTANT: Call applyFocusOpacity directly - the initial prop change should trigger it
      if (!loading && countriesData) {
        applyFocusOpacity(focusCountry);
      }
    }
  }, [focusCountry, loading, countriesData]);

  // Add direct DOM event listener for focus changes from React.memo
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleFocusChange = (event: any) => {
      const newFocusCountry = event.detail.country;
      if (newFocusCountry !== currentFocusCountryRef.current) {
        currentFocusCountryRef.current = newFocusCountry;
        applyFocusOpacity(newFocusCountry);
      }
    };
    
    containerRef.current.addEventListener('focus-country-changed', handleFocusChange);
    
    return () => {
      containerRef.current?.removeEventListener('focus-country-changed', handleFocusChange);
    };
  }, []);

  // Dynamically import OrbitControls
  useEffect(() => {
    import('three/addons/controls/OrbitControls.js').then(module => {
      OrbitControls = module.OrbitControls;
      setControlsLoaded(true);
    }).catch(error => {
      console.error('Failed to load OrbitControls:', error);
      // Still allow rendering even if controls fail to load
      setControlsLoaded(true);
    });
  }, []);

  // Load GeoJSON data
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
      .then(response => response.json())
      .then(data => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading GeoJSON:', error);
        setError('Failed to load country data');
        setLoading(false);
      });
  }, []);

  // Helper function to apply focus opacity - purely imperative function
  const applyFocusOpacity = (focusCode: string | null) => {
    // Skip if it's the same country
    if (focusCode === focusCountryRef.current) return;
    
    // Store new focus country
    focusCountryRef.current = focusCode;

    // Constants for opacities
    const FOCUSED_LINE_OPACITY = 1.0;
    const UNFOCUSED_LINE_OPACITY = 0.35;
    const FOCUSED_FILL_OPACITY = 0.25;
    const UNFOCUSED_FILL_OPACITY = 0.1;
    const NONVISITED_FOCUSED_OPACITY = 1.0;
    const NONVISITED_DIMMED_OPACITY = 0.3;  
    const NONVISITED_DEFAULT_OPACITY = 0.7;
    
    // Track all Line objects that have been processed
    const processedObjects = new Set<THREE.Object3D>();
    
    // Handle visited countries
    const visitedCountryCodes = Object.keys(countryLinesRef.current);
    visitedCountryCodes.forEach(code => {
      const lines = countryLinesRef.current[code];
      if (lines) {
        processedObjects.add(lines);
        const material = lines.material as THREE.LineBasicMaterial;
        
        if (focusCode === null) {
          // No focus, show all at default opacity
          material.opacity = FOCUSED_LINE_OPACITY;
        } else {
          // If this is the focused country, make it fully opaque
          material.opacity = (code === focusCode) ? 
            FOCUSED_LINE_OPACITY : UNFOCUSED_LINE_OPACITY;
        }
        
        // Tell Three.js that the material needs updating
        material.needsUpdate = true;
      }
      
      const fill = countryFillsRef.current[code];
      if (fill) {
        processedObjects.add(fill);
        const fillMaterial = fill.material as THREE.MeshBasicMaterial;
        
        if (focusCode === null) {
          // No focus, show all at default fill opacity
          fillMaterial.opacity = UNFOCUSED_FILL_OPACITY * 1.5;
        } else {
          // Adjust fill opacity too
          fillMaterial.opacity = (code === focusCode) ? 
            FOCUSED_FILL_OPACITY : UNFOCUSED_FILL_OPACITY;
        }
        
        // Tell Three.js that the material needs updating
        fillMaterial.needsUpdate = true;
      }
    });

    // Handle non-visited countries with ISO codes
    const nonVisitedCountryCodes = Object.keys(nonVisitedCountryLinesRef.current);
    nonVisitedCountryCodes.forEach(code => {
      const lines = nonVisitedCountryLinesRef.current[code];
      if (lines) {
        processedObjects.add(lines);
        const material = lines.material as THREE.LineBasicMaterial;
        
        if (focusCode === null) {
          // No focus, normal opacity for non-visited
          material.opacity = NONVISITED_DEFAULT_OPACITY;
        } else {
          // Focus mode
          material.opacity = (code === focusCode) ? 
            NONVISITED_FOCUSED_OPACITY : NONVISITED_DIMMED_OPACITY;
        }
        
        // Tell Three.js that the material needs updating
        material.needsUpdate = true;
      }
    });
    
    // Handle any remaining territories or disputed areas that weren't processed above
    // These might be in the GeoJSON but not have standard ISO codes
    if (globeRef.current) {
      globeRef.current.traverse((object) => {
        if (processedObjects.has(object)) {
          return; // Skip already processed objects
        }
        
        // Check if it's a LineSegments with a material (country border)
        if (object instanceof THREE.LineSegments && object.material) {
          const material = object.material as THREE.LineBasicMaterial;
          if (material.transparent) {
            // Apply different opacity based on focus state
            material.opacity = focusCode === null ? 
              NONVISITED_DEFAULT_OPACITY : NONVISITED_DIMMED_OPACITY;
            material.needsUpdate = true;
          }
        }
        
        // Check if it's a Mesh with a material (country fill)
        if (object instanceof THREE.Mesh && object.material) {
          const material = object.material as THREE.MeshBasicMaterial;
          if (material.transparent) {
            // Apply different opacity based on focus state
            material.opacity = focusCode === null ? 
              UNFOCUSED_FILL_OPACITY * 1.2 : UNFOCUSED_FILL_OPACITY;
            material.needsUpdate = true;
          }
        }
      });
    }
  };

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current || loading || !countriesData) return;

    try {
      // Set up scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Add ambient light so objects are visible
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);

      // Set up camera
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.z = 2;
      cameraRef.current = camera;

      // Set up renderer
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: backgroundColor === 'transparent'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      if (backgroundColor !== 'transparent') {
        renderer.setClearColor(backgroundColor);
      } else {
        renderer.setClearColor(0x000000, 0); // Clear with transparent background
      }
      
      // Clear the container
      if (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Set up controls if available
      if (controlsLoaded && OrbitControls) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.rotateSpeed = 0.5;
        controls.minDistance = 1.5;
        controls.maxDistance = 4;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.enableRotate = true;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controlsRef.current = controls;
      }

      // Create globe group
      const globe = new THREE.Group();
      globeRef.current = globe;
      scene.add(globe);

      // Add a basic sphere as fallback/reference
      const sphereGeometry = new THREE.SphereGeometry(0.98, 32, 32);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x111111,
        transparent: true,
        opacity: 0.3,
        wireframe: true
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      globe.add(sphere);

      // Create globe mesh with countries
      const primaryColor = new THREE.Color('#00f5d4'); // Cyan color from theme
      const secondaryColor = new THREE.Color('#f765a3'); // Pink color from theme
      
      // Clear country references
      countryLinesRef.current = {};
      countryFillsRef.current = {};
      nonVisitedCountryLinesRef.current = {};
      
      // Process each GeoJSON feature (country)
      let featuresProcessed = 0;
      try {
        countriesData.features.forEach((feature: any) => {
          try {
            const countryCode = feature.properties.ISO_A2;
            const isVisited = visitedCountries.includes(countryCode);
            
            // Create country borders - safely create geometry
            const geometry = new GeoJsonGeometry(feature.geometry || feature, 1, 5);
            
            // Create borders with solid lines
            const borderMaterial = new THREE.LineBasicMaterial({
              color: isVisited ? secondaryColor : primaryColor,
              linewidth: 1,
              transparent: true,
              opacity: 1.0,
            });
            
            const countryLines = new THREE.LineSegments(geometry, borderMaterial);
            globe.add(countryLines);
            
            // Store reference to country lines
            if (isVisited) {
              countryLinesRef.current[countryCode] = countryLines;
            } else {
              nonVisitedCountryLinesRef.current[countryCode] = countryLines;
            }
            
            // Only add fill for visited countries
            if (isVisited) {
              const fillGeometry = new GeoJsonGeometry(feature.geometry || feature, 0.99, 5);
              const fillMaterial = new THREE.MeshBasicMaterial({
                color: secondaryColor,
                transparent: true,
                opacity: 0.15,
                side: THREE.DoubleSide,
                depthWrite: false
              });
              
              const countryFill = new THREE.Mesh(fillGeometry, fillMaterial);
              globe.add(countryFill);
              
              // Store reference to country fill
              countryFillsRef.current[countryCode] = countryFill;
            }
            
            featuresProcessed++;
          } catch (err) {
            console.error('Error processing country feature:', err);
          }
        });
        
        console.log(`Processed ${featuresProcessed} countries out of ${countriesData.features.length}`);
      } catch (err) {
        console.error('Error processing countries:', err);
        setError('Error rendering country borders');
      }

      // Animation loop
      const animate = () => {
        if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
        
        // Update controls if available
        if (controlsRef.current) {
          controlsRef.current.update();
        }
        
        // Check for focus country changes during animation
        if (currentFocusCountryRef.current !== focusCountryRef.current) {
          applyFocusOpacity(currentFocusCountryRef.current);
        }
        
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        requestRef.current = requestAnimationFrame(animate);
      };
      
      // Make sure to call animate() before applying initial focus
      animate();
      
      // Apply initial focus with a slight delay to ensure scene is ready
      setTimeout(() => {
        if (currentFocusCountryRef.current !== null) {
          applyFocusOpacity(currentFocusCountryRef.current);
        }
      }, 100);
      
      // Cleanup
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
        
        if (rendererRef.current && rendererRef.current.domElement && containerRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        
        if (controlsRef.current) {
          controlsRef.current.dispose();
        }
        
        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
        
        if (globeRef.current) {
          globeRef.current.clear();
        }
      };
    } catch (err) {
      console.error('Error setting up 3D scene:', err);
      setError('Error setting up 3D scene');
    }
  }, [loading, countriesData, width, height, backgroundColor, visitedCountries, controlsLoaded]);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && containerRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, height]);

  return (
    <div 
      ref={containerRef} 
      className={`relative globe-container ${className}`} 
      style={{ width, height }}
    >
      {(loading) && (
        <div className="absolute inset-0 flex items-center justify-center text-radical-primary">
          Loading Globe...
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-radical-primary bg-radical-darker bg-opacity-70">
          {error}
        </div>
      )}
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders when props change
export default React.memo(Globe, (prevProps, nextProps) => {
  // FIXED: We need to explicitly check if focusCountry changed to actually pass it to the component
  // While avoiding full re-renders that reset rotation
  const focusCountryChanged = prevProps.focusCountry !== nextProps.focusCountry;
  
  if (focusCountryChanged) {
    // Hack: directly update the focusCountry ref from here
    // This avoids the need for a full re-render
    if (typeof window !== 'undefined') {
      // Use setTimeout to ensure this runs after the current execution
      setTimeout(() => {
        // Find the active Globe component instance and force update its refs
        const activeGlobe = document.querySelector('.globe-container');
        if (activeGlobe) {
          // This is a custom event to signal the imperative update
          const event = new CustomEvent('focus-country-changed', { 
            detail: { country: nextProps.focusCountry }
          });
          activeGlobe.dispatchEvent(event);
        }
      }, 0);
    }
  }
  
  // NOTE: We still don't re-render on focusCountry changes
  // because we're handling them imperatively
  return (
    prevProps.width === nextProps.width &&
    prevProps.height === nextProps.height &&
    prevProps.backgroundColor === nextProps.backgroundColor &&
    prevProps.className === nextProps.className &&
    // IMPORTANT: Don't re-render for focusCountry changes!
    // We handle those imperatively in the animation loop and event system
    JSON.stringify(prevProps.visitedCountries) === JSON.stringify(nextProps.visitedCountries)
  );
}); 