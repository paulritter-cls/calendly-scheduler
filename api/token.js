export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { code, code_verifier, redirect_uri } = req.body;
  const params = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.VITE_CALENDLY_CLIENT_ID,
    client_secret: process.env.CALENDLY_CLIENT_SECRET,
    code,
    redirect_uri,
    code_verifier,
  });
  const r = await fetch("https://auth.calendly.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  const data = await r.json();
  if (!r.ok) return res.status(r.status).json(data);
  return res.status(200).json({ access_token: data.access_token });
}
