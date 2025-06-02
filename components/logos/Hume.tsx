import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type MaginoLogoProps = SVGAttributes<SVGSVGElement>;

const MaginoLogo: FC<MaginoLogoProps> = (props) => {
  const id = useId();
  const gradientId = `magino-logo-gradient-${id}`;

  return (
    <svg
      width="220"
      height="60"
      viewBox="0 0 220 60"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Colored dots from Hume-style logo */}
      <circle cx="10" cy="30" r="6" fill="#FFB5D6" />
      <circle cx="30" cy="15" r="6" fill="#D2A7E9" />
      <circle cx="30" cy="45" r="6" fill="#FFDCDC" />
      <circle cx="50" cy="45" r="6" fill="#FFD1A4" />
      <circle cx="70" cy="30" r="6" fill={`url(#${gradientId})`} />
      <circle cx="90" cy="15" r="6" fill="#A0B0F6" />
      <circle cx="110" cy="10" r="6" fill="#BBABED" />

      {/* Gradient definition */}
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0.3" stopColor="#FFB7B2" />
          <stop offset="0.7" stopColor="#AB9EFC" />
        </linearGradient>
      </defs>

      {/* Brand Name */}
      <text
        x="130"
        y="38"
        fontSize="26"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        fill="#333"
      >
        Magino
      </text>
    </svg>
  );
};

export default MaginoLogo;
