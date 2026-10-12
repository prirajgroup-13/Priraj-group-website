import React, { useEffect } from 'react';
import { ShieldCheck, Mail, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_CONTACT, FOUNDER_INFO } from '../data/content';
import { useRouter } from '../router/Router';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Privacy Policy | PRIRAJ GROUP';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#d4af37] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-white/10 pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-mono text-[#f7edcd] mb-4">
            <Lock className="w-3 h-3 text-[#d4af37]" />
            <span>TRANSPARENCY & DATA PRIVACY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            How PRIRAJ GROUP collects, handles, and protects personal information submitted through our official website and project inquiries.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-6 pt-6 border-t border-white/5">
            <span>Website: <strong className="text-neutral-200">https://www.prirajgroup.com/</strong></span>
            <span>&middot;</span>
            <span>Effective Date: <strong className="text-neutral-200">October 2026</strong></span>
            <span>&middot;</span>
            <span>Official Email: <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] hover:underline">{OFFICIAL_CONTACT.email}</a></span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-neutral-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">01</span>
              <span>Introduction and Purpose</span>
            </h2>
            <p className="mb-3">
              PRIRAJ GROUP (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Studio&rdquo;) operates the digital engineering website located at <a href="https://www.prirajgroup.com/" className="text-[#d4af37] hover:underline">https://www.prirajgroup.com/</a>. We design and engineer bespoke web applications, interactive 3D digital experiences, and tailored software solutions for businesses and individuals.
            </p>
            <p>
              This Privacy Policy explains our practices regarding the collection, processing, storage, and protection of information when you browse our website, submit a project consultation request, or communicate with our leadership and engineering team.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">02</span>
              <span>Information Collected From Inquiries & Communications</span>
            </h2>
            <p className="mb-4">
              When you submit a contact form or project request through our website, we collect information you voluntarily provide, which may include:
            </p>
            <ul className="space-y-2 mb-4 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Contact Details:</strong> Your full name, work/personal email address, telephone/WhatsApp number.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Business Context:</strong> Company name, brand name, existing website link, or industry vertical.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Project Specifications:</strong> Selected service tier, estimated budget range, target delivery timeline, functional requirements, and project description notes.</span>
              </li>
            </ul>
            <p className="text-xs text-neutral-400">
              We do not ask for or collect sensitive personal data such as financial account numbers, credit card CVVs, or government identity proofs through our public website contact form.
            </p>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">03</span>
              <span>Technical Information Processed by Hosting & Service Providers</span>
            </h2>
            <p className="mb-3">
              When you access our website, standard web server logs and network hosting infrastructure (such as Vercel, Node.js cloud runtime, and DNS routing networks) automatically process technical request parameters necessary for delivering web assets securely:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-300">
              <li>Internet Protocol (IP) address</li>
              <li>Browser type, engine version, and operating system</li>
              <li>Date, timestamp, and HTTP request headers</li>
              <li>Network latency, device screen resolution, and asset load metrics</li>
            </ul>
            <p className="mt-3 text-xs text-neutral-400">
              This technical information is utilized strictly to ensure uptime, detect malicious automated bots, mitigate Denial of Service (DoS) attacks, and maintain web infrastructure integrity.
            </p>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">04</span>
              <span>How Personal Information Is Used</span>
            </h2>
            <p className="mb-3">
              PRIRAJ GROUP uses information provided by prospective and existing clients solely for legitimate commercial and engineering purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-white block mb-1">Responding to Inquiries</strong>
                <span>Reviewing your submitted brief and responding with technical advice, feasibility, and scheduling.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-white block mb-1">Preparing Formal Quotations</strong>
                <span>Evaluating architectural requirements and issuing detailed milestone estimates and scope documentation.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-white block mb-1">Client Communications</strong>
                <span>Sharing preview links, design review staging environments, sprint updates, and milestone deliveries.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <strong className="text-white block mb-1">Security & Abuse Prevention</strong>
                <span>Protecting our submission endpoints against spam, duplicate automated submissions, and malicious payloads.</span>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">05</span>
              <span>Information Sharing & Third-Party Service Providers</span>
            </h2>
            <p className="mb-3">
              PRIRAJ GROUP does <strong>not sell, rent, lease, or monetize</strong> your personal information to third-party data brokers or marketing lists.
            </p>
            <p className="mb-3">
              We share data only with trusted infrastructure providers required to operate our communications and website:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-300">
              <li><strong>Transactional Email Delivery:</strong> We use transactional email dispatch services (Resend / SMTP infrastructure) to transmit your project inquiries to our inbox and to deliver your automated confirmation receipt.</li>
              <li><strong>Hosting & Edge Delivery:</strong> Cloud infrastructure providers that host our static web assets and serverless functions.</li>
              <li><strong>Legal Compliance:</strong> We may disclose information if strictly required by valid subpoena, court order, or applicable legal obligation under Indian law.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">06</span>
              <span>Cookies & Tracking Technologies</span>
            </h2>
            <p className="mb-3">
              Our website is engineered with performance and user privacy in mind. We do not use third-party behavioral advertising cookies or cross-site commercial profiling beacons.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              Transient browser storage (such as session storage or memory state) may be used locally on your device to maintain UI preferences (such as 3D canvas rendering quality settings or modal state) during your active browser visit. These do not transmit personally identifiable tracking records.
            </p>
          </section>

          {/* Section 7 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">07</span>
              <span>Data Retention and Deletion Practices</span>
            </h2>
            <p className="mb-3">
              We retain inquiry communications for the duration necessary to evaluate the project, complete business correspondence, fulfill agreed project contracts, or maintain standard business tax and accounting records.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              Inquiries that do not progress into a formal engagement are periodically pruned from active review channels. Clients may request expedited deletion of their correspondence at any time (see Section 09).
            </p>
          </section>

          {/* Section 8 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">08</span>
              <span>Data Security Measures</span>
            </h2>
            <p className="mb-3">
              We employ reasonable and industry-standard physical, managerial, and technological safeguards to protect personal information against unauthorized access, loss, or alteration. These include TLS/HTTPS encrypted transport for all web traffic, restricted API credential storage, and isolated administrative mailboxes.
            </p>
            <p className="text-xs text-neutral-400">
              However, no electronic transmission over the Internet or digital storage infrastructure can be guaranteed to be 100% impenetrable. While we take diligent measures to protect your information, we cannot guarantee absolute security against all unforeseen vulnerabilities.
            </p>
          </section>

          {/* Section 9 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">09</span>
              <span>Your Privacy Requests & Rights</span>
            </h2>
            <p className="mb-4">
              Depending on your jurisdiction, you may have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your inquiry records.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-[#d4af37]/30 text-xs sm:text-sm">
              <strong className="text-white block mb-1">How to Submit a Privacy Request:</strong>
              <p className="text-neutral-300">
                To submit an access, correction, or deletion request, email us at <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] underline">{OFFICIAL_CONTACT.email}</a> with the subject line:
              </p>
              <div className="mt-2 font-mono text-xs px-3 py-1.5 rounded bg-black/40 border border-white/10 text-[#d4af37] inline-block">
                Privacy Request &mdash; [Your Name / Company]
              </div>
              <p className="text-neutral-400 text-xs mt-2">
                We review and respond to legitimate requests promptly within standard business operating timeframes.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">10</span>
              <span>Children&rsquo;s Privacy</span>
            </h2>
            <p>
              Our website and commercial engineering services are intended exclusively for commercial enterprises, business owners, and individuals of legal age capable of entering binding contracts. We do not knowingly solicit or collect personal information from individuals under the age of 18. If you believe a minor has submitted personal information to us, please notify us immediately for prompt deletion.
            </p>
          </section>

          {/* Section 11 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">11</span>
              <span>Third-Party Websites and External Links</span>
            </h2>
            <p>
              Our website may contain links to external third-party platforms (such as WhatsApp, Instagram, or client demonstration domains). We have no control over the privacy policies, content, or practices of external third-party sites. We encourage you to review the privacy notices of any external site you visit.
            </p>
          </section>

          {/* Section 12 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">12</span>
              <span>Policy Updates</span>
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect operational modifications, technical improvements, or updated regulatory requirements. Any revisions will be published directly on this page with an updated effective date.
            </p>
          </section>

          {/* Section 13 */}
          <section className="rounded-2xl bg-gradient-to-b from-[#111119] to-[#0a0a0f] border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">13</span>
              <span>Contact Details & Leadership</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Company</span>
                <strong className="text-white text-base">PRIRAJ GROUP</strong>
              </div>
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Founder &amp; CEO</span>
                <strong className="text-white text-base">{FOUNDER_INFO.name}</strong>
              </div>
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Official Email</span>
                <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] font-semibold hover:underline">
                  {OFFICIAL_CONTACT.email}
                </a>
              </div>
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Official Website</span>
                <a href="https://www.prirajgroup.com/" className="text-neutral-200 hover:text-white">
                  https://www.prirajgroup.com/
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-neutral-400">
              For privacy-related matters, please email with subject line <span className="text-white font-mono">&quot;Privacy Request&quot;</span>.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
