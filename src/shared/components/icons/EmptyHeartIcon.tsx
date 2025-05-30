interface EmptyHeartIconProps {
  className?: string;
}

export default function EmptyHeartIcon({
  className = '',
}: EmptyHeartIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="34"
      viewBox="0 0 35 34"
      fill="none"
      aria-label="heart icon"
      className={className}
    >
      <path
        d="M5.23528 11.0288C5.55565 10.2554 6.02524 9.55258 6.61722 8.96061C7.2092 8.36862 7.91197 7.89904 8.68543 7.57866C9.45889 7.25828 10.2879 7.09338 11.1251 7.09338C11.9622 7.09338 12.7912 7.25828 13.5647 7.57866C14.3381 7.89904 15.0409 8.36862 15.6329 8.96061L17.5001 10.8278L19.3672 8.96061C20.5628 7.76505 22.1843 7.0934 23.8751 7.0934C25.5658 7.0934 27.1873 7.76505 28.3829 8.96061C29.5784 10.1562 30.2501 11.7777 30.2501 13.4684C30.2501 15.1592 29.5784 16.7807 28.3829 17.9763L17.5001 28.8591L6.61722 17.9763C6.02524 17.3843 5.55565 16.6815 5.23528 15.9081C4.9149 15.1346 4.75 14.3056 4.75 13.4684C4.75 12.6313 4.9149 11.8023 5.23528 11.0288Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
