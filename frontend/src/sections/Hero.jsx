import heroIllustration from '../assets/hero-illustration.png'
import Button from '../components/Button.jsx'
import useReveal from '../hooks/useReveal.js'

export default function Hero() {
  const [ref, visible] = useReveal(0.1)

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden bg-deep-green"
    >
      {/* Illustration frames the bottom/sides of the hero, kept behind the text */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 select-none">
        <img
          src={heroIllustration}
          alt=""
          aria-hidden="true"
          className="w-full"
          style={{ height: 'auto', maxHeight: '52vh', objectFit: 'cover', objectPosition: 'bottom' }}
        />
        {/* Soft fade so the artwork blends into the green rather than cutting sharply */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-deep-green to-transparent" />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`reveal ${visible ? 'is-visible' : ''} relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 pt-32 pb-24 text-center md:pt-28 md:pb-32`}
      >
        <h1 className="font-display text-[2.75rem] leading-[1.08] text-white sm:text-6xl md:text-7xl">
          Together,
          <br />
          We Create
          <br />
          <span className="text-accent-green">One Impact</span>
        </h1>

        <p className="mt-7 font-sans text-base text-white/90 sm:text-lg md:mt-8 md:text-xl">
          Empowering communities.
          <br />
          Building a better tomorrow.
        </p>

        <div className="mt-8 md:mt-9">
          <Button href="#get-involved">Join the Movement</Button>
        </div>
      </div>
    </section>
  )
}
