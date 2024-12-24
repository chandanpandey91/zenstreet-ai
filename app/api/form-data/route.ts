import { NextResponse } from 'next/server'

let formData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  addressDetails: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  preferences: {
    marketing: false,
    newsletter: false,
    terms: false,
  },
}

export async function GET() {
  return NextResponse.json(formData)
}

export async function POST(request: Request) {
  const data = await request.json()
  formData = { ...formData, ...data }
  return NextResponse.json({ success: true })
}

