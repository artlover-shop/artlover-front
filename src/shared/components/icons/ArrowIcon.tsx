interface ArrowIconProps {
  className?: string;
  strokeWidth?: string;
}

export default function ArrowIcon({ className = '' }: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      aria-label="arrow icon"
      className={className}
    >
      <path
        d="M8.94983 13.5396L11.8832 10.5979L8.94983 7.65625"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
