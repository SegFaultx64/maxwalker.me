// SVG filters for CRT effects

"use client";

import { filterImage } from "./util";

export default function CrtFilters() {
  return (
    <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
      <defs>
        <filter id="fisheye" x="-50%" y="-50%" width="200%" height="200%">
          <feImage
            id="mapa"
            result="Map"
            xlinkHref={filterImage}
          ></feImage>
          <feDisplacementMap
            id="despMap"
            in="SourceGraphic"
            in2="Map"
            scale="45"
            xChannelSelector="R"
            yChannelSelector="G"
          ></feDisplacementMap>
        </filter>
      </defs>
    </svg>
  );
}
