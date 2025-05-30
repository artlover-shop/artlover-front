interface CartIconProps {
  className?: string;
  strokeWidth?: string;
}

export default function CartIcon({
  className = '',
  strokeWidth = '1.5',
}: CartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      aria-label="cart icon"
      className={`${className}`}
    >
      <path
        d="M3 3.5H5L5.4 5.5M5.4 5.5H21L17 13.5H7M5.4 5.5L7 13.5M7 13.5L4.707 15.793C4.077 16.423 4.523 17.5 5.414 17.5H17M17 17.5C16.4696 17.5 15.9609 17.7107 15.5858 18.0858C15.2107 18.4609 15 18.9696 15 19.5C15 20.0304 15.2107 20.5391 15.5858 20.9142C15.9609 21.2893 16.4696 21.5 17 21.5C17.5304 21.5 18.0391 21.2893 18.4142 20.9142C18.7893 20.5391 19 20.0304 19 19.5C19 18.9696 18.7893 18.4609 18.4142 18.0858C18.0391 17.7107 17.5304 17.5 17 17.5ZM9 19.5C9 20.0304 8.78929 20.5391 8.41421 20.9142C8.03914 21.2893 7.53043 21.5 7 21.5C6.46957 21.5 5.96086 21.2893 5.58579 20.9142C5.21071 20.5391 5 20.0304 5 19.5C5 18.9696 5.21071 18.4609 5.58579 18.0858C5.96086 17.7107 6.46957 17.5 7 17.5C7.53043 17.5 8.03914 17.7107 8.41421 18.0858C8.78929 18.4609 9 18.9696 9 19.5Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
