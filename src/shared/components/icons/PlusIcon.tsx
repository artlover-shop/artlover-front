interface PlusIconProps {
  className?: string;
}

export default function PlusIcon({ className }: PlusIconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon plus"
      className={className}
    >
      <path d="M1 6.68457H13" stroke="currentColor" strokeLinecap="round" />
      <path
        d="M7.31543 13L7.31543 1"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
