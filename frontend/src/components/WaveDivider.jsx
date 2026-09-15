/**
 * Organic wave that transitions the deep-green hero background
 * into the cream About Us background. Sits at the very top of the
 * About section; the shape itself is filled cream so it "cuts up"
 * into the green above it.
 */
export default function WaveDivider() {
  return (
    <svg
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className="block h-[70px] w-full sm:h-[100px] md:h-[140px]"
      aria-hidden="true"
    >
      <path
        d="M0,140 L0,90 C 240,10 420,120 720,70 C 1020,20 1200,110 1440,50 L1440,140 Z"
        fill="#F8F1DE"
      />
    </svg>
  )
}
