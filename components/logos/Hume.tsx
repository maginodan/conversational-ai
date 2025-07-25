import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 450 80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave lines - centered vertically */}
      <rect x="10" y="25" width="6" height="30" fill="#0cc0df" rx="3" />
      <rect x="22" y="15" width="6" height="50" fill="#5ce1e6" rx="3" />
      <rect x="34" y="28" width="6" height="25" fill="#0cc0df" rx="3" />
      <rect x="46" y="20" width="6" height="40" fill="#5ce1e6" rx="3" />

      {/* Brand text - larger font and centered */}
      <text
        x="65"
        y="52"
        fill="currentColor"
        fontSize="3.5em"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Kent-Danielz
      </text>
    </svg>
  );
};

export default HumeLogo;
