interface YoutubeIconProps {
  className?: string;
}

export default function YoutubeIcon({ className = '' }: YoutubeIconProps) {
  return (
    <svg
      width="92"
      height="92"
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="youtube icon"
      className={className}
    >
      <path
        d="M53.6657 46.0007L40.249 53.6673V38.334L53.6657 46.0007Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.69318"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.66635 48.7139V43.2859C7.66635 32.1884 7.66635 26.6377 11.1355 23.0689C14.6085 19.4962 20.0749 19.3429 31.0037 19.0324C36.1787 18.8867 41.4687 18.7832 45.9997 18.7832C50.5307 18.7832 55.8168 18.8867 60.9957 19.0324C71.9245 19.3429 77.3908 19.4962 80.86 23.0689C84.3292 26.6415 84.333 32.1922 84.333 43.2859V48.71C84.333 59.8114 84.333 65.3582 80.8638 68.9309C77.3908 72.4997 71.9283 72.6569 60.9957 72.9635C55.8207 73.113 50.5307 73.2165 45.9997 73.2165C41.4687 73.2165 36.1825 73.113 31.0037 72.9635C20.0749 72.6569 14.6085 72.5035 11.1355 68.9309C7.66252 65.3582 7.66635 59.8075 7.66635 48.7139Z"
        stroke="currentColor"
        strokeWidth="6"
      />
    </svg>
  );
}
