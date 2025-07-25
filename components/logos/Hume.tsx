import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 600 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave lines - scaled up and vertically centered */}
      <rect x="10" y="20" width="10" height="60" fill="#0cc0df" rx="5" />
      <rect x="28" y="10" width="10" height="80" fill="#5ce1e6" rx="5" />
      <rect x="46" y="30" width="10" height="40" fill="#0cc0df" rx="5" />
      <rect x="64" y="18" width="10" height="64" fill="#5ce1e6" rx="5" />

      {/* Brand text - large and aligned */}
      <text
        x="90"
        y="75"
        fill="currentColor"
        fontSize="80px"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Kent-Danielz
      </text>
    </svg>
  );
};

export default HumeLogo;
