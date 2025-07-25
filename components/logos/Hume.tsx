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
      <rect x="20" y="50" width="16" height="80" fill="#0cc0df" rx="8" />
      <rect x="48" y="20" width="16" height="140" fill="#5ce1e6" rx="8" />
      <rect x="76" y="60" width="16" height="60" fill="#0cc0df" rx="8" />
      <rect x="104" y="40" width="16" height="100" fill="#5ce1e6" rx="8" />

      {/* Brand text - larger font and centered */}
      <text
        x="65"
        y="52"
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
