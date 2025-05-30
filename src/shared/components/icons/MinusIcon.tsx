interface MinusIconProps {
  className?: string;
}

export default function MinusIcon({ className }: MinusIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="2"
      viewBox="0 0 14 2"
      fill="none"
      aria-label="icon minus"
      className={className}
    >
      <path d="M1 1H13" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}
