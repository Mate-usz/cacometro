import { v4 as uuidv4 } from "uuid";
import jwt from "jsonwebtoken";
import { db } from "./db";
import { sendMagicLinkEmail } from "./mailer";
import { createSession } from "./session";
import { createUserWithEmail, getUserFromEmail } from "./user";

export const generateMagicLinkToken = (email) => {
  const token = jwt.sign(
    { email, id: uuidv4() },
    process.env.JWT_SECRET,
    { expiresIn: "15m" } // Magic link expires in 15 minutes
  );
  return token;
};

export const createMagicLink = async (email) => {
  const token = generateMagicLinkToken(email);
  const magicLink = `${process.env.APP_URL}/auth/magic-link?token=${token}`;
  await sendMagicLinkEmail(email, magicLink);
};

export async function verifyMagicLinkToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);
    const { email } = decoded;

    // Find or create the user in your database
    let user = await getUserFromEmail(email);
    if (user == null || user.length === 0) {
      // If the user doesn't exist, create a new one
      const newUser = await createUserWithEmail(email);
      user = newUser;
    }
    // Create a session or issue a JWT
    const session = await createSession("magic", user.id);

    return { user, session };
  } catch (err) {
    console.error("Invalid or expired token", err);
    return null;
  }
}
