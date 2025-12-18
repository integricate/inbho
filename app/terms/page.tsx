import { Metadata } from 'next'
import Link from 'next/link'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service',
  description: 'INBHO Terms of Service - Read our terms and conditions for using our website and services.',
})

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-width max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: December 2024</p>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using INBHO&apos;s website and services, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600">
                INBHO provides web development, mobile app development, SEO optimization, and related digital
                services. The specific scope, deliverables, and terms for each project will be outlined in a
                separate service agreement or proposal.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                Upon full payment for our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>You will own the custom code and designs created specifically for your project</li>
                <li>We retain the right to use non-confidential elements in our portfolio</li>
                <li>Third-party libraries and frameworks remain subject to their respective licenses</li>
                <li>Our proprietary tools and methodologies remain our intellectual property</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>A deposit may be required before work begins</li>
                <li>Milestone payments may apply for larger projects</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Client Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a client, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Ensure you have rights to any content you provide</li>
                <li>Make payments according to agreed terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Warranties and Disclaimers</h2>
              <p className="text-gray-600">
                We provide our services &quot;as is&quot; and make no warranties, express or implied, regarding the
                suitability of our services for any particular purpose. While we strive for high quality,
                we cannot guarantee that our services will be error-free or uninterrupted.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, INBHO shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of our services. Our total
                liability shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Confidentiality</h2>
              <p className="text-gray-600">
                Both parties agree to maintain the confidentiality of any proprietary or sensitive information
                shared during the course of our engagement. This obligation survives the termination of our
                business relationship.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-600">
                Either party may terminate the service relationship with written notice. Upon termination,
                you are responsible for payment of all work completed up to the termination date. We will
                provide all deliverables for which payment has been received.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes
                shall be resolved through good-faith negotiation, and if necessary, binding arbitration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately
                upon posting on our website. Your continued use of our services constitutes acceptance of
                the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact</h2>
              <p className="text-gray-600">
                For questions about these terms, please contact us at{' '}
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
