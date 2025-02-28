// export async function GET() {
//     return new Response(JSON.stringify({ message: "API is working!" }), {
//       headers: { "Content-Type": "application/json" },
//       status: 200,
//     });
//   }
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email } = await req.json(); // Get request body

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required" },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,  // Your Gmail ID
        pass: process.env.EMAIL_PASS,  // Your App Password
      },
    });

    // Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,  // Send details to yourself
      subject: "New Course Registration",
      text: `New registration:\n\nName: ${name}\nEmail: ${email}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
