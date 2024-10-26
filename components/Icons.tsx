export const VectorIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = "#78350F",
}) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM14.126 11.746L10.071 14.644C9.166 15.29 7.941 15.033 7.334 14.068C7.11494 13.7171 6.99918 13.3116 7 12.898V7.102C7 5.942 7.883 5 8.972 5C9.363 5 9.746 5.124 10.071 5.356L14.126 8.254C15.031 8.901 15.272 10.206 14.666 11.171C14.5251 11.3959 14.3417 11.5913 14.126 11.746ZM8.972 7.102V12.898L13.027 10L8.972 7.102Z"
        fill={fill}
      />
    </svg>
  );
};

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <path
        d="M17.9875 10.6665H46.1685C46.1685 10.6665 43.8202 46.0188 32.0781 46.0188C26.342 46.0188 22.8476 37.5825 20.7736 28.9521C18.6019 19.9157 17.9875 10.6665 17.9875 10.6665Z"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.1685 10.6664C46.1685 10.6664 48.6251 8.04598 50.6667 7.99974C54.6667 7.90918 55.4061 10.6664 55.4061 10.6664C56.1891 12.2918 56.8152 16.5179 53.0579 20.4188C49.3003 24.3198 45.0941 27.7331 43.3824 28.952"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9874 10.6669C17.9874 10.6669 15.4279 8.01662 13.3332 8.00027C9.33321 7.96904 8.59371 10.6669 8.59371 10.6669C7.81089 12.2923 7.18465 16.5183 10.9421 20.4193C14.6996 24.3203 19.062 27.7336 20.7734 28.9528"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6843 53.3334C22.6843 48.4572 32.0779 46.019 32.0779 46.019C32.0779 46.019 41.4717 48.4572 41.4717 53.3334H22.6843Z"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RectangleTrophyIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="39"
      viewBox="0 0 57 39"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z"
        fill="#0369A1"
      />
    </svg>
  );
};

export const TunnelIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
    >
      <path
        d="M53.6667 53.3332L11 39.9998M53.6667 53.3332H11V39.9998L53.6667 53.3332ZM53.6667 53.3332V31.9998C53.6667 20.2178 44.1155 10.6665 32.3333 10.6665C30.2152 10.6665 28.1693 10.9752 26.2381 11.5499C17.4259 14.1726 11 22.3358 11 31.9998V39.9998L53.6667 53.3332Z"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 24V26.6667"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32.3333 21.3335V24.0002"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21.6667 18.6665V21.3332"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const RectangleTunnelIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5229 34.5222 39 28.9994 39L10.1415 39C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z"
        fill="#15803D"
      />
    </svg>
  );
};

export const TvIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="64"
      viewBox="0 0 65 64"
      fill="none"
    >
      <path
        d="M6.00002 53.3332V23.9998C6.00002 21.0543 8.38783 18.6665 11.3334 18.6665H54C56.9456 18.6665 59.3334 21.0543 59.3334 23.9998V53.3332C59.3334 56.2788 56.9456 58.6665 54 58.6665H11.3334C8.38783 58.6665 6.00002 56.2788 6.00002 53.3332Z"
        stroke="#78350F"
        strokeWidth="1.5"
      />
      <path
        d="M23.3334 6.6665L32.6667 15.9998L42 6.6665"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RectangleTvIcon: React.FC<
  React.SVGProps<SVGSVGElement>
> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
    >
      <rect
        opacity="0.5"
        x="0.000671387"
        width="45"
        height="45"
        rx="20"
        fill="#A21CAF"
      />
    </svg>
  );
};

export const BuyIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = "white",
}) => {
  return (
    <svg
      className={className}
      width="19"
      height="16"
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33331 16C6.80288 16 6.29417 15.7893 5.9191 15.4142C5.54403 15.0391 5.33331 14.5304 5.33331 14C5.33331 13.4696 5.54403 12.9609 5.9191 12.5858C6.29417 12.2107 6.80288 12 7.33331 12C7.86375 12 8.37245 12.2107 8.74753 12.5858C9.1226 12.9609 9.33331 13.4696 9.33331 14C9.33331 14.5304 9.1226 15.0391 8.74753 15.4142C8.37245 15.7893 7.86375 16 7.33331 16ZM14.3333 16C13.8029 16 13.2942 15.7893 12.9191 15.4142C12.544 15.0391 12.3333 14.5304 12.3333 14C12.3333 13.4696 12.544 12.9609 12.9191 12.5858C13.2942 12.2107 13.8029 12 14.3333 12C14.8637 12 15.3725 12.2107 15.7475 12.5858C16.1226 12.9609 16.3333 13.4696 16.3333 14C16.3333 14.5304 16.1226 15.0391 15.7475 15.4142C15.3725 15.7893 14.8637 16 14.3333 16ZM1.29531 1.923C1.04567 1.91495 0.808953 1.81012 0.63521 1.63068C0.461468 1.45125 0.364325 1.21127 0.364325 0.9615C0.364325 0.711732 0.461468 0.471755 0.63521 0.292318C0.808953 0.11288 1.04567 0.00805181 1.29531 0L2.44631 0C3.34831 0 4.12831 0.626 4.32431 1.506L5.57731 7.148C5.77331 8.028 6.55331 8.654 7.45531 8.654H14.9673L16.4093 2.884H7.06431C6.81702 2.87272 6.5836 2.76654 6.4126 2.58755C6.24159 2.40857 6.14616 2.17055 6.14616 1.923C6.14616 1.67545 6.24159 1.43743 6.4126 1.25845C6.5836 1.07946 6.81702 0.973284 7.06431 0.962H16.4093C16.7016 0.961914 16.9902 1.02848 17.2529 1.15663C17.5156 1.28479 17.7457 1.47116 17.9256 1.70158C18.1055 1.93201 18.2305 2.20041 18.2911 2.4864C18.3517 2.77238 18.3463 3.06842 18.2753 3.352L16.8333 9.12C16.7294 9.5362 16.4892 9.90568 16.1511 10.1697C15.813 10.4337 15.3963 10.5771 14.9673 10.577H7.45531C6.58011 10.5771 5.73104 10.2787 5.04833 9.7311C4.36561 9.18348 3.8901 8.41938 3.70031 7.565L2.44631 1.923H1.29531Z"
        fill={fill}
      />
    </svg>
  );
};

export const DoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = "#15803D",
}) => {
  return (
    <svg
      className={className}
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.48599 9.72989C5.35472 9.73016 5.2247 9.7045 5.10337 9.6544C4.98204 9.60429 4.87181 9.53071 4.77899 9.43789L0.536988 5.19489C0.441415 5.10271 0.365157 4.99242 0.312663 4.87046C0.26017 4.74849 0.232492 4.61729 0.231245 4.48451C0.229999 4.35174 0.255208 4.22004 0.305401 4.09711C0.355595 3.97418 0.429769 3.86248 0.523594 3.76852C0.61742 3.67456 0.729018 3.60023 0.851878 3.54986C0.974737 3.49949 1.1064 3.4741 1.23918 3.47516C1.37196 3.47622 1.50319 3.50371 1.62523 3.55603C1.74727 3.60835 1.85767 3.68445 1.94999 3.77989L5.48499 7.31489L11.85 0.951894C12.0375 0.764253 12.2919 0.658785 12.5571 0.658691C12.8224 0.658598 13.0768 0.763886 13.2645 0.951394C13.4521 1.1389 13.5576 1.39327 13.5577 1.65854C13.5578 1.92381 13.4525 2.17825 13.265 2.36589L6.19299 9.43789C6.10017 9.53071 5.98993 9.60429 5.86861 9.6544C5.74728 9.7045 5.61725 9.73016 5.48599 9.72989Z"
        fill={fill}
      />
    </svg>
  );
};

export const RedIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = "#E11D48",
}) => {
  return (
    <svg
      className={className}
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8.69369C2.69875 8.69369 0.833328 6.82827 0.833328 4.52702C0.833328 2.22577 2.69875 0.360352 5 0.360352C7.30125 0.360352 9.16666 2.22577 9.16666 4.52702C9.16666 6.82827 7.30125 8.69369 5 8.69369Z"
        fill={fill}
      />
    </svg>
  );
};

export const YellowIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = "#FBBF24",
}) => {
  return (
    <svg
      className={className}
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8.69369C2.69875 8.69369 0.833328 6.82827 0.833328 4.52702C0.833328 2.22577 2.69875 0.360352 5 0.360352C7.30125 0.360352 9.16666 2.22577 9.16666 4.52702C9.16666 6.82827 7.30125 8.69369 5 8.69369Z"
        fill={fill}
      />
    </svg>
  );
};

export const GreenIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  fill = "#22C55E",
}) => {
  return (
    <svg
      className={className}
      width="10"
      height="9"
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 8.69369C2.69875 8.69369 0.833328 6.82827 0.833328 4.52702C0.833328 2.22577 2.69875 0.360352 5 0.360352C7.30125 0.360352 9.16666 2.22577 9.16666 4.52702C9.16666 6.82827 7.30125 8.69369 5 8.69369Z"
        fill={fill}
      />
    </svg>
  );
};

export const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="144"
      height="145"
      viewBox="0 0 144 145"
      fill="none"
    >
      <rect
        y="0.5"
        width="144"
        height="144"
        rx="72"
        fill="#121619"
        fillOpacity="0.75"
      />
      <path
        d="M99.28 74.592C99.5608 74.1512 99.7502 73.6585 99.837 73.1432C99.9238 72.6278 99.9062 72.1003 99.7854 71.5918C99.6645 71.0834 99.4428 70.6044 99.1334 70.1832C98.8239 69.7621 98.4331 69.4073 97.984 69.14L58.296 45.012C57.6506 44.6213 56.9104 44.4152 56.156 44.416C53.916 44.416 52.104 46.188 52.104 48.376V96.62C52.104 97.36 52.316 98.084 52.716 98.712C53.9 100.568 56.396 101.136 58.296 99.98L97.984 75.856C98.508 75.536 98.956 75.1 99.284 74.588L99.28 74.592ZM102.264 82.58L62.58 106.704C56.88 110.172 49.38 108.464 45.836 102.9C44.6378 101.025 44.0008 98.8456 44 96.62V48.38C44 41.816 49.44 36.5 56.16 36.5C58.428 36.5 60.652 37.12 62.58 38.292L102.264 62.42C107.964 65.884 109.712 73.204 106.164 78.772C105.18 80.316 103.844 81.62 102.264 82.58Z"
        fill="white"
      />
    </svg>
  );
};

export const DecoVideoSvg: React.FC<React.SVGProps<SVGSVGElement>> = ({}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="713"
      height="627"
      viewBox="0 0 713 627"
      fill="none"
    >
      <rect
        y="471.948"
        width="666.284"
        height="217.934"
        transform="rotate(-45 0 471.948)"
        fill="#FDE68A"
      />
      <rect
        opacity="0.75"
        x="458"
        y="454"
        width="74"
        height="74"
        rx="30"
        fill="#A21CAF"
      />
      <rect
        opacity="0.75"
        x="55"
        y="159"
        width="90"
        height="90"
        rx="30"
        fill="#B45309"
      />
      <rect
        opacity="0.75"
        x="513"
        y="46"
        width="59"
        height="60"
        rx="29.5"
        fill="#0369A1"
      />
      <rect
        opacity="0.75"
        x="495"
        y="375"
        width="218"
        height="218"
        rx="50"
        fill="#BE185D"
      />
    </svg>
  );
};
