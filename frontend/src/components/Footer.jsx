import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-dark-green">
      {/* Placeholder anchors for sections not yet built — keeps navbar links functional */}
      <div id="our-impact" className="h-0" aria-hidden="true" />
      <div id="get-involved" className="h-0" aria-hidden="true" />
      <div id="contact" className="h-0" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-10">
        <Logo light />
        <p className="font-sans text-sm text-white/60">
          © {new Date().getFullYear()} One Impact. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
