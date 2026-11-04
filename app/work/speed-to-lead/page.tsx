import type { Metadata } from 'next'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { SITE_URL } from '@/lib/site'

const TITLE = 'AI Speed-to-Lead Agent — Case Study'
const DESCRIPTION =
  'A working demo of an AI assistant that calls or WhatsApps new leads within about 60 seconds, qualifies them, books the appointment and logs it to the CRM. Problem, build and what the demo does end to end.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/work/speed-to-lead' },
  openGraph: {
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    type: 'article',
    url: `${SITE_URL}/work/speed-to-lead`,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AI speed-to-lead agent case study' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | Muhammad Adnan`,
    description: DESCRIPTION,
    images: ['/og.png']
  }
}

const facts = [
  { value: '~60s', label: 'Target first contact' },
  { value: '2', label: 'Channels: voice + WhatsApp' },
  { value: '10', label: 'Industry templates' },
  { value: '0', label: 'Clients so far (demo / pilot)' }
]

export default function Page() {
  return (
    <CaseStudyLayout
      kind="AI lead response · Future Frame · Working demo"
      title="AI Speed-to-Lead Agent"
      deck="When a lead fills in a web form, an AI assistant calls or WhatsApps them within about a minute, qualifies them, books the appointment and logs it to the CRM. This is a working demo and internal pilot, not a client deployment."
      stack={['Next.js', 'n8n', 'Vapi', 'Twilio / Meta WhatsApp', 'Groq', 'Cal.com', 'HubSpot']}
      liveUrl="https://console-adnan-projects.vercel.app"
      liveLabel="Try the live demo console"
    >
      <div className="metric-grid">
        {facts.map((m, i) => (
          <div
            key={m.label}
            className={`px-5 py-6 ${i < facts.length - 1 ? 'border-b border-ink sm:border-b-0 sm:border-r' : ''} ${i % 2 === 0 ? 'border-r border-ink sm:border-r' : ''}`}
          >
            <div className="font-display text-4xl font-extrabold leading-none tracking-mega text-accent">
              {m.value}
            </div>
            <div className="eyebrow mt-2 leading-snug text-ink-soft">{m.label}</div>
          </div>
        ))}
      </div>

      <h2>The problem</h2>
      <p>
        Most leads go unanswered for hours. A 2026 Pied Piper study of 2,198 inquiries sent to 21
        large real-estate brands found that only <strong>10% heard from an agent within an hour</strong>
        {' '}(
        <a
          href="https://www.floridarealtors.org/news-media/news-articles/2026/10/real-estate-inquiries-often-fail-reach-agents"
          target="_blank"
          rel="noopener noreferrer"
        >
          Florida Realtors summary
        </a>
        ). By the time someone replies, the lead has often moved on to whoever answered first.
      </p>
      <p>
        Small real-estate and mortgage teams feel this most. Agents and loan officers are with
        clients, on a showing or off the clock, and a form submission sits in an inbox until someone
        gets to it.
      </p>

      <h2>What I built</h2>
      <p>
        A configurable speed-to-lead system for service businesses. A lead submits a form, and within
        seconds the assistant reaches out, qualifies them with industry-specific questions, books a
        meeting and saves the lead to a CRM. Humans stay in the loop for handoff.
      </p>
      <ul>
        <li>
          <strong>Demo console (Next.js)</strong> — pick the channel, provider, calendar, CRM and
          industry, submit a lead and watch a live timeline of every step as it happens.
        </li>
        <li>
          <strong>Orchestration (n8n)</strong> — a lead router dispatches to voice or WhatsApp, with
          one workflow per provider and webhook handling for calendar and CRM actions.
        </li>
        <li>
          <strong>Voice (Vapi)</strong> — a voice agent that talks to the lead, runs the
          qualification script, then books and saves through tool calls. The demo runs in the browser
          over WebRTC; real phone-number telephony is on the roadmap.
        </li>
        <li>
          <strong>WhatsApp (Twilio / Meta)</strong> — the same qualify, book and save flow over chat,
          with the session kept per phone number.
        </li>
        <li>
          <strong>LLM (Groq)</strong> — a fast tool-calling model drives the conversation, with
          prompts rendered from 10 industry templates, including real estate.
        </li>
        <li>
          <strong>Booking and CRM</strong> — Cal.com for appointments and HubSpot for the lead
          record. Google Calendar, Google Sheets and GoHighLevel are planned options.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        <strong>This is a working demo and internal pilot. It has no client results yet</strong>, and
        I am not claiming any. What exists today is the full flow, end to end: a form submission
        triggers a voice or WhatsApp conversation, the assistant qualifies the lead, a real
        appointment is booked, the lead lands in the CRM, and every step shows up in the live
        timeline.
      </p>
      <p>
        You can run it yourself in the{' '}
        <a href="https://console-adnan-projects.vercel.app" target="_blank" rel="noopener noreferrer">
          live demo console
        </a>
        . The first paying clients will be founding clients on a 14-day pilot: every lead contacted
        in under 60 seconds, or a full refund. Details are on{' '}
        <a href="https://www.futureframesolution.com/pricing" target="_blank" rel="noopener noreferrer">
          Future Frame pricing
        </a>
        .
      </p>
      <p>
        This is built and sold through{' '}
        <a href="https://www.futureframesolution.com" target="_blank" rel="noopener noreferrer">
          Future Frame
        </a>
        , my studio, for real estate and mortgage teams in the US, Canada and Australia.
      </p>
    </CaseStudyLayout>
  )
}
