import { Metadata } from 'next'
import { constructMetadata } from '@/lib/metadata'

export const metadata: Metadata = constructMetadata({
  title: 'Contact Us',
  description: 'Get in touch with INBHO for your web development needs. We\'re here to help you build your next digital project. Contact us for a free consultation.',
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
