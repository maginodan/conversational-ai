import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      width="220"
      height="30"
      viewBox="0 0 220 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Sound wave lines */}
      <rect x="5" y="6" width="3" height="13" fill="#0cc0df" rx="1.5" />
      <rect x="11" y="2" width="3" height="21" fill="#5ce1e6" rx="1.5" />
      <rect x="17" y="8" width="3" height="9" fill="#0cc0df" rx="1.5" />
      <rect x="23" y="4" width="3" height="17" fill="#5ce1e6" rx="1.5" />

      {/* Brand text */}
      <text
        x="32"
        y="17"
        fill="currentColor"
        fontSize="14"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        KENT
      </text>
    </svg>
  );
};

export default HumeLogo;
