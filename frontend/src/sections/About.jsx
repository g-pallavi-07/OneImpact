
import WaveDivider from '../components/WaveDivider.jsx'
import ValueCard from '../components/ValueCard.jsx'
import {
  CommunityIcon,
  CollaborationIcon,
  ImpactIcon,
  TransparencyIcon,
} from '../components/ValueIcons.jsx'
import useReveal from '../hooks/useReveal.js'

const VALUES = [
  {
    icon: <CommunityIcon />,
    title: 'Community',
    description: 'Uniting individuals who care and want to make a difference.',
  },
  {
    icon: <CollaborationIcon />,
    title: 'Collaboration',
    description: 'Working together to turn ideas into meaningful action.',
  },
  {
    icon: <ImpactIcon />,
    title: 'Impact',
    description: 'Solving real issues and creating lasting positive change.',
  },
  {
    icon: <TransparencyIcon />,
    title: 'Transparency',
    description: 'Building trust through openness, honesty, and accountability.',
  },
]

export default function About() {
  const [textRef, textVisible] = useReveal(0.15)

  return (
    <section id="about" className="relative bg-deep-green">
      <WaveDivider />

      <div className="min-h-[calc(100vh-70px)] bg-cream sm:min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-140px)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-4 md:grid-cols-2 md:gap-8 md:px-10 md:pt-8 lg:gap-16">
          {/* Text column */}
          <div
            ref={textRef}
            className={`reveal ${textVisible ? 'is-visible' : ''} max-w-xl`}
          >
            <span className="font-sans text-sm font-semibold tracking-[0.15em] text-accent-green">
              ABOUT US
            </span>

            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-dark-green sm:text-5xl">
              We are
              <br />
              One Impact.
            </h2>

            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-dark-text/80">
              One Impact is a community-driven platform dedicated to creating
              positive change. We connect people, ideas, and resources to
              solve real-world problems together.
            </p>


            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 sm:gap-x-6">
              {VALUES.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
