import { type NextRequest, NextResponse } from "next/server"
import { CMSService } from "@/lib/cms"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address." }, { status: 400 })
    }

    const result = await CMSService.subscribeToNewsletter(email)

    return NextResponse.json(result)
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ success: false, message: "An error occurred. Please try again later." }, { status: 500 })
  }
}
