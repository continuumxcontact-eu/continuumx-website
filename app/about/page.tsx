import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { getTranslations } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'About Us — Continuum X OÜ',
  description:
    'Continuum X OÜ is an EU-registered company based in Tallinn, Estonia, delivering AI-driven solutions, data analytics, business intelligence, and professional education.',
}

export default function AboutPage() {
  const t = getTranslations('en')

  return (
    <Container className="py-16 sm:py-18">
      {/* ✅ IMPORTANT:
          - Removed mx-auto + max-w-* so it aligns with the same width as navbar (logo → enroll)
          - Reduced vertical spacing
      */}
      <div className="space-y-10">
        {/* Title & Intro */}
        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl dark:text-textOnDark">
            {t.about.title}
          </h1>

          <p className="text-lg leading-relaxed text-gray-800 text-justify dark:text-gray-200">
            Continuum X OÜ is an EU-registered company headquartered in Tallinn,
            Estonia, delivering advanced artificial intelligence, data analytics,
            and business intelligence solutions alongside high-quality
            professional education.
          </p>
        </header>

        {/* Main Content */}
        <section className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="text-justify">
            We support organizations and individuals in transforming data into
            actionable insight that improves decision-making, operational
            efficiency, and long-term performance. Our work is guided by a strong
            focus on practical impact, measurable results, and real-world
            applicability.
          </p>

          <p className="text-justify">
            Our expertise spans artificial intelligence solutions, data
            analytics, business intelligence, and strategic advisory services,
            supporting data-driven transformation across diverse industries and
            sectors.
          </p>

          <p className="text-justify">
            Alongside our consulting and technology services, Continuum X is
            deeply committed to education and capacity building. We design and
            deliver structured learning programs in AI, data analytics, and
            digital transformation for learners, professionals, and
            organizations seeking future-ready skills.
          </p>

          <p className="text-justify">
            Our approach bridges theory and practice—ensuring that both our
            solutions and our learning programs remain practical, relevant, and
            aligned with evolving industry needs.
          </p>
        </section>

        {/* Who We Work With */}
        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-semibold text-textPrimary dark:text-textOnDark">
            Who We Work With
          </h2>

          <ul className="grid gap-3 text-base text-gray-700 dark:text-gray-300 sm:grid-cols-2">
            <li>• Individuals and early-career learners</li>
            <li>• Professionals seeking advanced analytical and AI capabilities</li>
            <li>• Organizations adopting data-driven practices</li>
            <li>• Teams requiring customized training or advisory support</li>
          </ul>
        </section>

        {/* Mission */}
        <section className="space-y-4 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold text-textPrimary dark:text-textOnDark">
            Our Mission
          </h2>

          <p className="text-base leading-relaxed text-gray-700 text-justify dark:text-gray-300">
            Our mission is to bridge technology, education, and business by
            delivering intelligent solutions and high-quality learning programs
            that empower individuals and organizations to succeed in a
            data-driven world.
          </p>
        </section>
      </div>
    </Container>
  )
}
