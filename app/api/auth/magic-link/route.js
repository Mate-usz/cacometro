import { setSessionTokenCookie } from "@/lib/server/cookies";
import { verifyMagicLinkToken } from "@/lib/server/magiclink";

export async function GET(request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");
  console.log("Token:", token);
  const result = await verifyMagicLinkToken(token);

  if (result) {
    // If token is valid, set the session cookie and redirect to a protected page
    setSessionTokenCookie(result.session.token, result.session.expiresAt);
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/dashboard",
      },
    });

    // res.redirect("/dashboard"); // Or another protected page
  } else {
    return new Response(null, {
      status: 401,
    });

    // res.status(401).send("Invalid or expired link");
  }
}
