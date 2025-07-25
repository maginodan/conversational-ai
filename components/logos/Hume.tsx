import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 750 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave bars - scaled to match 80px height */}
      <rect x="10" y="10" width="10" height="80" fill="#0cc0df" rx="5" />
      <rect x="28" y="5" width="10" height="90" fill="#5ce1e6" rx="5" />
      <rect x="46" y="20" width="10" height="60" fill="#0cc0df" rx="5" />
      <rect x="64" y="12" width="10" height="78" fill="#5ce1e6" rx="5" />

      {/* Brand text - 80px tall */}
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
