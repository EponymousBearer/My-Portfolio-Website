'use client'

import { useState } from 'react'
import { Loader2, Check, AlertTriangle } from 'lucide-react'
import { contactData } from '@/lib/data'

// Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local to enable real submissions.
// Get a free key at https://web3forms.com. Without it, the form falls back to mailto.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

type Status = 'idle' | 'submitting' | 'success' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverMsg, setServerMsg] = useState('')

  const validateField = (name: keyof typeof values, value: string): string | undefined => {
    if (name === 'name' && value.trim().length < 2) return 'Please enter your name.'
    if (name === 'email' && !isEmail(value.trim())) return 'Please enter a valid email address.'
    if (name === 'message' && value.trim().length < 10)
      return 'A little more detail, please (10+ characters).'
    return undefined
  }

  const validateAll = (): boolean => {
    const next: Errors = {}
    ;(Object.keys(values) as (keyof typeof values)[]).forEach((k) => {
      const err = validateField(k, values[k])
      if (err) next[k] = err
    })
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onBlur = (name: keyof typeof values) =>
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values[name]) }))

  const mailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    window.location.href = `mailto:${contactData.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setServerMsg('Your email client is opening — hit send and it lands in my inbox.')
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateAll()) {
      // Focus the first invalid field for keyboard/SR users
      const first = (['name', 'email', 'message'] as const).find((k) => validateField(k, values[k]))
      if (first) document.getElementById(`cf-${first}`)?.focus()
      return
    }

    if (!ACCESS_KEY) {
      mailtoFallback()
      return
    }

    setStatus('submitting')
    setServerMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio enquiry from ${values.name}`,
          from_name: 'Portfolio Website',
          name: values.name,
          email: values.email,
          message: values.message
        })
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setServerMsg("Message sent — thanks. I'll be in touch shortly.")
        setValues({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setServerMsg(data.message || 'Something went wrong. Please email me directly.')
      }
    } catch {
      setStatus('error')
      setServerMsg('Network error. Please email me directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-paper/30 bg-paper/5 p-8 text-paper" role="status" aria-live="polite">
        <div className="flex h-12 w-12 items-center justify-center border border-accent text-accent">
          <Check size={26} />
        </div>
        <p className="mt-5 font-display text-2xl font-bold tracking-mega">Dispatch received.</p>
        <p className="mt-2 text-paper/70">{serverMsg}</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-paper/25 p-6 md:p-8">
      <p className="eyebrow mb-6 text-accent">Send a dispatch</p>

      <Field
        id="cf-name"
        label="Name"
        error={errors.name}
        input={
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            onBlur={() => onBlur('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'cf-name-err' : undefined}
            className="w-full border border-paper/30 bg-transparent px-4 py-3 text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-accent"
            placeholder="Jane Doe"
          />
        }
      />

      <Field
        id="cf-email"
        label="Email"
        error={errors.email}
        input={
          <input
            id="cf-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            onBlur={() => onBlur('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'cf-email-err' : undefined}
            className="w-full border border-paper/30 bg-transparent px-4 py-3 text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-accent"
            placeholder="jane@company.com"
          />
        }
      />

      <Field
        id="cf-message"
        label="Message"
        error={errors.message}
        input={
          <textarea
            id="cf-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            onBlur={() => onBlur('message')}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'cf-message-err' : undefined}
            className="w-full resize-y border border-paper/30 bg-transparent px-4 py-3 text-paper outline-none transition-colors placeholder:text-paper/30 focus:border-accent"
            placeholder="Tell me about the role or project…"
          />
        }
      />

      {/* Honeypot (spam trap) — hidden from users */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0"
        aria-hidden
      />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group mt-2 inline-flex w-full items-center justify-center gap-2 border border-accent bg-accent px-6 py-3.5 font-display text-base font-bold text-paper transition-colors hover:bg-transparent hover:text-accent disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>Send message</>
        )}
      </button>

      {status === 'error' && (
        <p
          id="cf-server-err"
          role="alert"
          aria-live="assertive"
          className="mt-4 flex items-center gap-2 text-sm text-accent"
        >
          <AlertTriangle size={16} /> {serverMsg}
        </p>
      )}
    </form>
  )
}

function Field({
  id,
  label,
  error,
  input
}: {
  id: string
  label: string
  error?: string
  input: React.ReactNode
}) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="eyebrow mb-2 block text-paper/60">
        {label}
      </label>
      {input}
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-accent">
          {error}
        </p>
      )}
    </div>
  )
}
