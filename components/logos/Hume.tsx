import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 800 160"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave bars - scaled to match large text */}
      <rect x="20" y="30" width="14" height="90" fill="#0cc0df" rx="7" />
      <rect x="44" y="10" width="14" height="130" fill="#5ce1e6" rx="7" />
      <rect x="68" y="40" width="14" height="70" fill="#0cc0df" rx="7" />
      <rect x="92" y="24" width="14" height="102" fill="#5ce1e6" rx="7" />

      {/* Brand text - large and scalable */}
      <text
        x="130"
        y="110"
        fill="currentColor"
        fontSize="6em"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Kent-Danielz
      </text>
    </svg>
  );
};

export default HumeLogo;
