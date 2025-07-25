import type { FC, SVGAttributes } from "react";

export type HumeLogoProps = SVGAttributes<SVGSVGElement>;

const HumeLogo: FC<HumeLogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      {/* Big sound wave bars only */}
      <rect x="20" y="30" width="20" height="100" fill="#0cc0df" rx="8" />
      <rect x="60" y="10" width="20" height="130" fill="#5ce1e6" rx="8" />
      <rect x="100" y="50" width="20" height="70" fill="#0cc0df" rx="8" />
      <rect x="140" y="25" width="20" height="95" fill="#5ce1e6" rx="8" />
    </svg>
  );
};

export default HumeLogo;
