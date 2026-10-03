import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  CheckCircle2,
  Shield,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { InquiryFormData } from '../types';
import { OFFICIAL_CONTACT, SERVICE_OPTIONS, BUDGET_OPTIONS } from '../data/content';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPackage?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultPackage
}) => {
  const getInitialBudget = (pkg?: string) => {
    if (!pkg) return BUDGET_OPTIONS[0];
    if (BUDGET_OPTIONS.includes(pkg as any)) return pkg;
    if (pkg.includes('3D') || pkg.includes('15') || pkg.includes('BUSINESS')) {
      return '3D Website — ₹15,000–₹20,000';
    }
    if (pkg.includes('Custom') || pkg.includes('PREMIUM') || pkg.includes('COMMERCE') || pkg.includes('Discuss')) {
      return "Custom / Larger Project — Let's Discuss";
    }
    return BUDGET_OPTIONS[0];
  };

  const initialService = SERVICE_OPTIONS.includes(defaultService as any)
    ? defaultService!
    : 'Website Development';

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: getInitialBudget(defaultPackage),
    description: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmittingRef = useRef(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<{
    message: string;
    details?: string;
    requiredEnvVars?: string[];
  } | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: SERVICE_OPTIONS.includes(defaultService as any) ? defaultService! : 'Website Development',
        budget: getInitialBudget(defaultPackage)
      }));
      setSubmitError(null);
      setValidationError(null);
      isSubmittingRef.current = false;
    }
  }, [isOpen, defaultService, defaultPackage]);

  if (!isOpen) return null;

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
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setValidationError('Please enter a valid email address.');
      return;
    }
    if (!formData.service) {
      setValidationError('Please select a service.');
      return;
    }
    if (!formData.budget) {
      setValidationError('Please select an estimated budget.');
      return;
    }
    if (!formData.description.trim() || formData.description.trim().length < 8) {
      setValidationError('Please provide a project description (minimum 8 characters).');
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
        setIsSuccess(true);
        setSubmitError(null);
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
        details: 'Network connection failed. Please check your connection or contact us directly on WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
      isSubmittingRef.current = false;
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setSubmitError(null);
    setValidationError(null);
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0d0d12] border border-white/15 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Project Request Sent
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-md mx-auto">
              Thank you. Your project request has been sent successfully. We&apos;ll review your requirements and get back to you.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setIsSuccess(false);
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
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-semibold bg-[#d4af37] text-black hover:bg-[#e5c07b] transition-colors cursor-pointer uppercase tracking-wider font-mono font-bold"
              >
                Send Another Request
              </button>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
              >
                Close Window
              </button>
              <a
                href={OFFICIAL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-white transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs font-mono text-[#d4af37] mb-1 font-semibold">
                PRIRAJ GROUP &middot; PROJECT INQUIRY
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Start a Project
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Tell us about your digital goals. We review all inquiries with confidentiality.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field for spam prevention */}
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
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
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white outline-none transition-colors"
                >
                  {SERVICE_OPTIONS.map((srv) => (
                    <option key={srv} value={srv} className="bg-[#14141c] text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Estimated Budget Selector */}
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
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors"
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
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#14141c] border border-white/10 focus:border-[#d4af37] text-sm text-white placeholder-neutral-500 outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Protected by mutual confidentiality and direct engineering review.</span>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    if (isSubmitting || isSubmittingRef.current) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  className="w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-md active:scale-[0.99]"
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

                {/* Secondary WhatsApp prompt */}
                <div className="text-center pt-1">
                  <div className="text-xs text-neutral-400 mb-1.5 font-medium">
                    Prefer a quick conversation?
                  </div>
                  <a
                    href={OFFICIAL_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat with us on WhatsApp &rarr;</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
