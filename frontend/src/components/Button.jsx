export default function Button({ children, onClick, href, className = '' }) {
  const classes = `inline-flex items-center justify-center rounded-full bg-accent-green
    px-8 py-4 font-sans font-semibold text-dark-green text-base md:text-lg
    shadow-[0_6px_20px_rgba(126,214,63,0.35)]
    transition-all duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(126,214,63,0.45)] hover:brightness-105
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream
    active:translate-y-0 ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
