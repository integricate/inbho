import { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'INBHO Privacy Policy - Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-width max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: December 2024</p>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                INBHO (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting
                your personal data. This privacy policy explains how we collect, use, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you contact us.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited and time spent.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and operating system.</li>
                <li><strong>Cookies:</strong> Data collected through cookies and similar tracking technologies.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver the services you request</li>
                <li>Improve our website and services</li>
                <li>Send you relevant updates and marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-600">
                We may use third-party services for analytics, hosting, and other purposes. These services
                have their own privacy policies, and we encourage you to review them. We do not sell your
                personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-600">
                Our website uses cookies to enhance your experience. You can control cookies through your
                browser settings. Disabling cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this privacy policy from time to time. We will notify you of any changes by
                posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this privacy policy, please contact us at{' '}
                <a href="mailto:contact@inbho.com" className="text-primary-600 hover:underline">
                  contact@inbho.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-primary-600 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
