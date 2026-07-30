const icons = {
  pickleball: (
    <>
      <rect x="8" y="5" width="20" height="24" rx="10" />
      <rect x="15" y="27" width="6" height="14" rx="3" />
      <circle cx="35" cy="33" r="8" />
      <circle cx="32" cy="30" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="38" cy="30" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="35" cy="37" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  vision: (
    <>
      <path d="M4 22 C 12 8, 36 8, 44 22 C 36 36, 12 36, 4 22 Z" />
      <circle cx="24" cy="22" r="6" />
      <rect x="8" y="38" width="5" height="6" />
      <rect x="17" y="34" width="5" height="10" />
      <rect x="26" y="36" width="5" height="8" />
      <rect x="35" y="30" width="5" height="14" />
    </>
  ),
};

export default function ProjectIcon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
