import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      company: body.company?.trim().slice(0, 100) || '',
      subject: subject.trim().slice(0, 100),
      message: message.trim().slice(0, 2000),
      timestamp: new Date().toISOString(),
    }

    // Log the contact submission (in production, you would send this to a database or email service)
    console.log('Contact form submission:', sanitizedData)

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // Example with a database:
    // await db.contacts.create({ data: sanitizedData })

    // Example with email service (e.g., SendGrid, Resend):
    // await sendEmail({
    //   to: 'contact@inbho.com',
    //   subject: `New Contact: ${sanitizedData.subject}`,
    //   body: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n...`
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is running. Use POST to submit a contact form.' },
    { status: 200 }
  )
}
