import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 800 130"  // Wider and taller to fit everything well
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave bars: tall and spaced */}
      <rect x="20" y="20" width="14" height="90" fill="#0cc0df" rx="7" />
      <rect x="50" y="10" width="14" height="110" fill="#5ce1e6" rx="7" />
      <rect x="80" y="35" width="14" height="65" fill="#0cc0df" rx="7" />
      <rect x="110" y="18" width="14" height="85" fill="#5ce1e6" rx="7" />

      {/* Brand text: positioned to align baseline with bars */}
      <text
        x="150"
        y="95"  // Y is baseline position; set for visual vertical alignment
        fill="currentColor"
        fontSize="80px"  // fixed font size for consistent appearance
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Kent-Danielz
      </text>
    </svg>
  );
};

export default HumeLogo;
