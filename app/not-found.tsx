import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found | INBHO',
  description: 'The page you are looking for does not exist. Return to INBHO homepage.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="container-width text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-[150px] sm:text-[200px] font-bold text-gray-100 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full gradient-bg opacity-20 animate-pulse-slow"></div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Or try one of these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="text-primary-600 hover:text-primary-700 font-medium">
              About Us
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/services" className="text-primary-600 hover:text-primary-700 font-medium">
              Our Services
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
