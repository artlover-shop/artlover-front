interface BurgerIconProps {
  className?: string;
}

export default function BurgerIcon({ className }: BurgerIconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-label="burger icon"
        className={`xl:hidden ${className}`}
      >
        <path
          d="M3.33325 15H16.6666M3.33325 5H16.6666H3.33325ZM3.33325 10H16.6666H3.33325Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className={`hidden xl:block ${className}`}
      >
        <path
          d="M6.66669 30H33.3334M6.66669 10H33.3334H6.66669ZM6.66669 20H33.3334H6.66669Z"
          aria-label="burger icon"
          stroke="currentColor"
          strokeWidth="3.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
