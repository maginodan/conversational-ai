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
{/* Reduced height sound wave bars */}
<rect x="20" y="60" width="20" height="60" fill="#0cc0df" rx="8" />
<rect x="60" y="50" width="20" height="80" fill="#5ce1e6" rx="8" />
<rect x="100" y="80" width="20" height="40" fill="#0cc0df" rx="8" />
<rect x="140" y="65" width="20" height="55" fill="#5ce1e6" rx="8" />

    </svg>
  );
};

export default HumeLogo;
