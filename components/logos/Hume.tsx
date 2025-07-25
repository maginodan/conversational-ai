import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 900 160"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave bars */}
      <rect x="20" y="30" width="14" height="100" fill="#0cc0df" rx="7" />
      <rect x="50" y="10" width="14" height="130" fill="#5ce1e6" rx="7" />
      <rect x="80" y="50" width="14" height="70" fill="#0cc0df" rx="7" />
      <rect x="110" y="25" width="14" height="95" fill="#5ce1e6" rx="7" />

      {/* Brand text */}
      <text
        x="150"
        y="120"              // baseline position; set so text is fully visible
        fill="currentColor"
        fontSize="100px"      // big font size for visibility
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Kent-Danielz
      </text>
    </svg>
  );
};

export default HumeLogo;
