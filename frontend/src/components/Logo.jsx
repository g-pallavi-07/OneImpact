export default function Logo({ light = true }) {
  const ringColor = light ? '#FFFFFF' : '#005A3C'
  const textColor = light ? 'text-white' : 'text-dark-green'

  return (
    <a href="#top" className="flex items-center gap-3 group">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17" cy="17" r="15.5" stroke={ringColor} strokeWidth="1.6" />
        <path
          d="M17 24V15.5C17 12.5 19 10.5 22.5 10.5C22.5 14 20.5 16 17 16.5"
          stroke="#7ED63F"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 19C17 16.5 15.3 15 12.5 15C12.5 17.5 14 19 17 19.3"
          stroke="#7ED63F"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-sans font-bold text-xl lowercase tracking-tight ${textColor}`}>
        one impact
      </span>
    </a>
  )
}
