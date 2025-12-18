import { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Our Services',
  description: 'Explore INBHO\'s comprehensive web development services including full-stack development, SEO optimization, mobile apps, cloud solutions, and more.',
})

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks like Next.js, React, and Node.js. We create fast, scalable, and maintainable solutions.',
    features: [
      'Single Page Applications (SPA)',
      'Server-Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native. Build once, deploy everywhere - iOS and Android from a single codebase.',
    features: [
      'Cross-Platform Development',
      'Native Performance',
      'Offline Functionality',
      'Push Notifications',
      'App Store Deployment',
      'Continuous Updates',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your website\'s visibility on search engines and drive organic traffic.',
    features: [
      'Technical SEO Audit',
      'On-Page Optimization',
      'Meta Tags & Schema Markup',
      'Site Speed Optimization',
      'Mobile-First Indexing',
      'Analytics & Reporting',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions using AWS, Vercel, and other leading cloud platforms.',
    features: [
      'Cloud Architecture Design',
      'AWS / GCP / Azure Deployment',
      'Serverless Functions',
      'Database Management',
      'CI/CD Pipelines',
      'Auto-Scaling Setup',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    id: 'api-development',
    title: 'API Development',
    description: 'RESTful and GraphQL API development with proper documentation, authentication, and security best practices.',
    features: [
      'REST API Design',
      'GraphQL Implementation',
      'API Documentation',
      'Authentication & Authorization',
      'Rate Limiting',
      'API Versioning',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and support to keep your applications running smoothly and securely.',
    features: [
      'Bug Fixes & Updates',
      'Security Patches',
      'Performance Monitoring',
      'Backup Solutions',
      '24/7 Support',
      'SLA Guarantees',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'We create a detailed project plan with milestones, timelines, and technical specifications.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our team builds your solution using agile methodology with regular updates and feedback.',
  },
  {
    step: '04',
    title: 'Testing',
    description: 'Rigorous testing ensures your application is bug-free, secure, and performs optimally.',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'We deploy your application and provide training and documentation for your team.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing maintenance and support to ensure your application continues to perform.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-10"></div>
        <div className="container-width section-padding relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive web development solutions tailored to your business needs.
              From concept to deployment, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="card group">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven approach to delivering successful projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="card h-full">
                  <div className="text-5xl font-bold gradient-text opacity-50 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="section-padding">
        <div className="container-width">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We believe in honest, upfront pricing. Contact us for a custom quote
              tailored to your project requirements. No hidden fees, no surprises.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg section-padding">
        <div className="container-width text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and find the perfect solution for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-primary-600 transition-all duration-200"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  )
}
