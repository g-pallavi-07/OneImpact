export default function ValueCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-deep-green/10">
        {icon}
      </span>
      <h3 className="font-sans text-base font-semibold text-dark-text">{title}</h3>
      <p className="font-sans text-sm leading-relaxed text-dark-text/70">{description}</p>
    </div>
  )
}
