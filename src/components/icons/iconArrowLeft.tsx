interface IconArrowLeftProps {
  color?: string;
}

export default function IconArrowLeft({ color }: IconArrowLeftProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3V4.05C15 6.57023 15 7.83037 14.5095 8.79292C14.0781 9.63967 13.3897 10.3281 12.5429 10.7595C11.5804 11.25 10.3202 11.25 7.8 11.25H3M3 11.25L6.75 7.5M3 11.25L6.75 15"
        stroke={color || "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
