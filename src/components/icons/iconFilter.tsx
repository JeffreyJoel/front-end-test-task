
interface IconFilterProps {
  color?: string;
}

export default function IconFilter({ color }: IconFilterProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12.5H18M3 6.5H21M9 18.5H15"
        stroke={color || "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
