# Calendly Team Booking

Internal tool for booking client meetings via Calendly. Supports event type selection, pre-filling client info, answering custom questions, conflict detection, and generating shareable single-use links.

## Setup

### 1. Create a Calendly OAuth app

1. Go to [Calendly Integrations](https://calendly.com/integrations/api_webhooks)
2. Click **Create new app**
3. Set the redirect URI to your deployed URL (e.g. `https://your-app.vercel.app`)
4. Copy the **Client ID**

### 2. Configure environment

```bash
cp .env.example .env
# Add your Client ID to .env
```

### 3. Install and run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variable: `VITE_CALENDLY_CLIENT_ID` = your client ID
4. Deploy — Vercel will give you a `*.vercel.app` URL
5. Update your Calendly OAuth app's redirect URI to that URL

## Features

- **OAuth login** — each team member logs in with their own Calendly account
- **Event type selection** — pulls live event types from their account
- **Client pre-fill** — name and email carried through the booking flow
- **Custom questions** — answers event-specific questions on the client's behalf
- **Conflict detection** — flags scheduling overlaps, lets the user decide
- **Direct booking** — generates a single-use Calendly link for the selected slot
- **Link generation** — produces both a pre-filled URL and a single-use link to share with the client

## Notes

Calendly's v2 API does not support creating bookings directly on behalf of an invitee without their OAuth consent. Booking via this tool generates a single-use scheduling link for the chosen slot. For server-side booking without client interaction, you would need Calendly for Teams with admin API access and `POST /one_off_event_types`.
