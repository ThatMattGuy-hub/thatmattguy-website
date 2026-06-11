'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import Magnetic from '@/components/Magnetic'

const initialState = { name: '', email: '', phone: '', service: '', message: '' }

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '6bebede4-5e91-4b28-b520-2b73e99dd6bf',
          ...formData,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })
      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData(initialState)
      } else {
        setError('Something went wrong. Please try again or email us directly.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="card-soft border-accent/40 text-center">
        <CheckCircle2 size={48} className="mx-auto text-accent" />
        <h3 className="mt-4 font-display text-2xl font-bold text-char">Thank you!</h3>
        <p className="mt-2 text-muted">
          We&apos;ve received your message and will get back to you within 1 business day.
        </p>
        <button type="button" onClick={() => setIsSubmitted(false)} className="btn-ghost mt-8 text-sm">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
            Your name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-soft"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
            Email address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-soft"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input-soft"
            placeholder="+44 7000 000000"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
            Service interested in
          </label>
          <select id="service" name="service" value={formData.service} onChange={handleChange} className="input-soft">
            <option value="">Select a service</option>
            <option value="starter">Starter Website</option>
            <option value="business">Business Website</option>
            <option value="ecommerce">E-Commerce Site</option>
            <option value="webapp">Web Application</option>
            <option value="automation">AI & Automation</option>
            <option value="other">Other / Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="input-soft resize-none"
          placeholder="Tell us about your business and what you're looking for. The more detail, the better we can help."
        />
      </div>

      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" required className="mt-1 accent-accent" />
        <label htmlFor="consent" className="text-sm text-muted">
          I agree to be contacted about my enquiry and understand my data will be stored securely. *
        </label>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Magnetic>
        <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
          {isSubmitting ? 'Sending…' : 'Send message'} <Send size={16} />
        </button>
      </Magnetic>
      <p className="text-xs text-faint">* Required fields</p>
    </form>
  )
}
