import React, { useState, useRef } from 'react';
import {
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Shield,
  MessageSquare,
  Phone,
  Instagram,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { InquiryFormData } from '../types';
import { OFFICIAL_CONTACT, SERVICE_OPTIONS, BUDGET_OPTIONS } from '../data/content';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const initialService = SERVICE_OPTIONS.includes(preselectedService as any)
    ? preselectedService!
    : 'Website Development';

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: BUDGET_OPTIONS[0],
    description: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<{
    message: string;
    details?: string;
    requiredEnvVars?: string[];
  } | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Instant synchronous check to prevent double clicks and rapid duplicate triggers
    if (isSubmittingRef.current || isSubmitting) return;
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    setValidationError(null);
    setSubmitError(null);

    // Validate required fields
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setValidationError('Please enter your full name (minimum 2 characters).');
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    const emailTrimmed = formData.email.trim().toLowerCase();
    const domain = emailTrimmed.split('@')[1] || '';
    const blockedDomains = ['example.com', 'example.org', 'example.net', 'test.com', 'test.org', 'test.net', 'localhost'];

    if (
      !emailTrimmed ||
      !emailRegex.test(emailTrimmed) ||
      blockedDomains.includes(domain) ||
      domain.endsWith('.test') ||
      domain.endsWith('.localhost') ||
      domain.endsWith('.example')
    ) {
      setValidationError('Please enter a valid email address.');
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      return;
    }

    if (!formData.service) {
      setValidationError('Please select a service.');
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      return;
    }
    if (!formData.budget) {
      setValidationError('Please select an estimated budget.');
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      return;
    }
    if (!formData.description.trim() || formData.description.trim().length < 8) {
      setValidationError('Please provide a project description (minimum 8 characters).');
      isSubmittingRef.current = false;
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/project-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || '',
          company: formData.company?.trim() || '',
          service: formData.service,
          budget: formData.budget,
          timeline: formData.timeline?.trim() || '',
          description: formData.description.trim(),
          _hp_company_url: honeypot
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setIsSubmitted(true);
        setSubmitError(null);
        // Clear form fields upon successful sending
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Website Development',
          budget: BUDGET_OPTIONS[0],
          description: '',
          timeline: ''
        });
      } else {
        setSubmitError({
          message: result?.error || 'Something went wrong while sending your request.',
          details: result?.details || result?.message,
          requiredEnvVars: result?.requiredEnvVars
        });
      }
    } catch {
      setSubmitError({
        message: 'Something went wrong while sending your request.',
        details: 'Network connection failed. Please try again or contact us directly on WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Large Call to Action */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#d4af37] mb-3">
            Start Your Project
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Let&apos;s build something that{' '}
            <span className="gold-gradient-text">moves your business forward.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-normal max-w-2xl mx-auto leading-relaxed text-balance">
            Whether you need a new website, web application, e-commerce store, or custom digital product, we are ready to engineer it.
          </p>
        </div>

        {/* Two-Column Inquiry Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & WhatsApp Prompt */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-[#0c0c10]/90 border border-white/10 backdrop-blur-xl space-y-6 shadow-xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Direct Communication
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Connect directly with PRIRAJ GROUP for technical scoping, project estimates, or architectural advice.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* Email */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-medium">Email</div>
                    <a
                      href={`mailto:${OFFICIAL_CONTACT.email}`}
                      className="text-sm font-semibold text-neutral-200 hover:text-[#d4af37] transition-colors"
                    >
                      {OFFICIAL_CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-medium">Phone</div>
                    <a
                      href={OFFICIAL_CONTACT.phoneTel}
                      className="text-sm font-semibold text-neutral-200 hover:text-[#d4af37] transition-colors"
                    >
                      {OFFICIAL_CONTACT.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37]/40 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-medium">Instagram</div>
                    <a
                      href={OFFICIAL_CONTACT.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-neutral-200 hover:text-[#d4af37] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{OFFICIAL_CONTACT.instagramHandle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary WhatsApp Prompt */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs text-neutral-400 mb-2 font-medium">
                  Prefer a quick conversation?
                </div>
                <a
                  href={OFFICIAL_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white font-semibold text-xs transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Chat with us on WhatsApp &rarr;</span>
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    {OFFICIAL_CONTACT.whatsappDisplay}
                  </span>
                </a>
              </div>
            </div>

            {/* Factual Guarantees */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300">
                <Shield className="w-4 h-4 text-[#d4af37]" />
                <span>Our Development Standards</span>
              </div>
              <ul className="text-xs text-neutral-400 space-y-1.5 list-disc list-inside">
                <li>Direct technical review with clear milestone delivery</li>
                <li>Clean, modern, responsive JavaScript / React code architecture</li>
                <li>Transparent scope agreements with zero hidden costs</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0e0e14]/90 border border-white/15 backdrop-blur-xl shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Project Request Sent
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you. Your project request has been sent successfully. We&apos;ll review your requirements and get back to you.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: 'Website Development',
                        budget: BUDGET_OPTIONS[0],
                        description: '',
                        timeline: ''
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-black hover:bg-[#e5c07b] transition-colors cursor-pointer uppercase tracking-wider font-mono font-bold"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Invisible Honeypot Field for Spam Protection */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="_hp_company_url"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Validation Error Banner */}
                  {validationError && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2.5 text-xs text-amber-200">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Server Error State Banner */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 space-y-3">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-white">
                            Something went wrong while sending your request.
                          </div>
                          <div className="text-xs text-neutral-300 leading-relaxed">
                            Your request couldn&apos;t be sent. Please try again or contact us directly on WhatsApp.
                          </div>
                        </div>
                      </div>

                      {submitError.requiredEnvVars && (
                        <div className="mt-2 p-3 rounded-lg bg-black/60 border border-amber-500/30 text-[11px] text-neutral-300 space-y-1.5 font-mono">
                          <div className="text-[#d4af37] font-semibold flex items-center gap-1.5">
                            <span>⚙ Resend Configuration Required:</span>
                          </div>
                          <div className="text-neutral-400">
                            To send project requests directly to <span className="text-white">prirajgroup@gmail.com</span>, add your <code className="text-amber-300">RESEND_API_KEY</code> to server environment variables.
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap items-center gap-3 pt-1">
                        <button
                          type="button"
                          onClick={() => setSubmitError(null)}
                          className="px-4 py-2 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                        >
                          Try Again
                        </button>
                        <a
                          href={OFFICIAL_CONTACT.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg text-xs font-semibold bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-white transition-colors inline-flex items-center gap-1.5"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                          <span>Contact us directly on WhatsApp &rarr;</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Company / Brand
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company or Brand Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white outline-none transition-colors"
                    >
                      {SERVICE_OPTIONS.map((srv) => (
                        <option key={srv} value={srv} className="bg-[#14141c] text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Budget Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-medium text-neutral-300">
                        Estimated Budget *
                      </label>
                      <span className="text-[11px] text-neutral-400">
                        Select an investment tier
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`py-2.5 px-3 text-xs rounded-xl font-medium transition-all text-center cursor-pointer ${
                            formData.budget === opt
                              ? 'bg-[#d4af37] text-black font-semibold shadow-md border border-[#d4af37]'
                              : 'bg-[#14141c] text-neutral-300 hover:text-white border border-white/10 hover:border-white/25'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-2 font-normal leading-relaxed">
                      Select the tier that best matches your project scope, or choose &quot;Not Sure&quot; to discuss with our engineers.
                    </div>
                  </div>

                  {/* Row 5: Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Timeline
                    </label>
                    <input
                      type="text"
                      value={formData.timeline || ''}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="e.g. 2–4 Weeks, ASAP, or Flexible"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Row 6: Project Description */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell us about your project, goals, and requirements."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={(e) => {
                      if (isSubmitting || isSubmittingRef.current) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                    }}
                    className="w-full py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-[0_0_25px_-5px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      <>
                        <span>SEND PROJECT REQUEST</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2 space-y-1">
                    <p className="text-[11px] text-neutral-400">
                      Dispatched securely to PRIRAJ GROUP engineering &middot; prirajgroup@gmail.com
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      By submitting, you agree to our{' '}
                      <a href="/privacy-policy" className="text-neutral-400 hover:text-[#d4af37] underline">
                        Privacy Policy
                      </a>{' '}
                      and{' '}
                      <a href="/terms-of-service" className="text-neutral-400 hover:text-[#d4af37] underline">
                        Terms of Service
                      </a>. 50% advance is refundable upon preview inspection under our{' '}
                      <a href="/payment-refund-policy" className="text-[#d4af37] hover:underline">
                        Refund Policy
                      </a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
