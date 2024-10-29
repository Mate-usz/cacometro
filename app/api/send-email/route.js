import nodemailer from "nodemailer";
import { createMagicLink } from "@/lib/server/magiclink";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const body = await req.json();
  const { email } = body;
  console.log("Email:", body);

  try {
    // Create magic link and send email
    await createMagicLink(email);

    return new Response(
      JSON.stringify({
        message: "Email sent",
      }),
      {
        status: 200,
      }
    );

    // res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Failed to send email", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
      }),
      {
        status: 500,
      }
    );
    // res.status(500).json({ message: "Failed to send email" });
  }
}
