import React, { useEffect } from 'react';
import { ArrowLeft, Scale, CheckCircle2, ShieldCheck, Code2, AlertTriangle, FileCheck } from 'lucide-react';
import { OFFICIAL_CONTACT, FOUNDER_INFO } from '../data/content';
import { useRouter } from '../router/Router';

export const TermsOfServicePage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Terms of Service | PRIRAJ GROUP';
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
            <Scale className="w-3 h-3 text-[#d4af37]" />
            <span>COMMERCIAL AGREEMENT &amp; CLIENT RIGHTS</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Clear, transparent terms governing our professional web development, UI/UX design, software engineering engagements, and intellectual property transfers.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-6 pt-6 border-t border-white/5">
            <span>Website: <strong className="text-neutral-200">https://www.prirajgroup.com/</strong></span>
            <span>&middot;</span>
            <span>Effective Date: <strong className="text-neutral-200">October 2026</strong></span>
            <span>&middot;</span>
            <span>Founder &amp; CEO: <strong className="text-neutral-200">{FOUNDER_INFO.name}</strong></span>
          </div>
        </div>

        {/* 16 Structured Sections */}
        <div className="space-y-10 text-neutral-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">01</span>
              <span>Agreement and Acceptance</span>
            </h2>
            <p className="mb-3">
              By accessing the PRIRAJ GROUP website (<a href="https://www.prirajgroup.com/" className="text-[#d4af37] hover:underline">https://www.prirajgroup.com/</a>), commissioning a project quotation, or approving an engineering scope of work, you (&ldquo;Client&rdquo;) agree to be bound by these Terms of Service.
            </p>
            <p>
              If you represent an entity or company, you warrant that you possess the lawful corporate authority to bind that entity to these Terms.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">02</span>
              <span>Project Scope &amp; Written Quotation</span>
            </h2>
            <p className="mb-3">
              All commercial engagements are executed against a specific, documented Scope of Work (SOW) or written quotation agreed in writing via email or electronic proposal. The proposal defines:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-300">
              <li>Target pages, interactive features, responsive breakpoints, and animations</li>
              <li>Agreed third-party integrations (forms, email notifications, payment gateways)</li>
              <li>Project delivery timeline estimates and milestone review checkpoints</li>
              <li>Agreed total financial investment and milestone payment schedule</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">03</span>
              <span>Payment Milestones &amp; Invoicing</span>
            </h2>
            <p className="mb-3">
              Unless otherwise specified in a custom enterprise contract, projects follow our standard transparent two-milestone schedule:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm my-3">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <strong className="text-white block font-mono text-xs uppercase mb-1 text-[#38bdf8]">Milestone 1 · 50% Advance</strong>
                <span>Due upon project kickoff to allocate engineering resources, lock sprint dates, and begin architectural development.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <strong className="text-white block font-mono text-xs uppercase mb-1 text-[#d4af37]">Milestone 2 · 50% Final Balance</strong>
                <span>Due upon completion of the interactive preview inspection, revision sign-off, and prior to source-code delivery or production deployment.</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">04</span>
              <span>Development Commencement</span>
            </h2>
            <p>
              Engineering begins officially only after (i) the 50% advance milestone has cleared into PRIRAJ GROUP accounts, (ii) the written quotation is mutually approved, and (iii) the client has submitted necessary baseline materials (brand assets, logos, copy, and access credentials where required).
            </p>
          </section>

          {/* Section 5 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">05</span>
              <span>Client Responsibilities</span>
            </h2>
            <p className="mb-3">
              The Client is responsible for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-300">
              <li>Providing accurate, lawful text copy, high-resolution imagery, brand guidelines, and product catalogs</li>
              <li>Ensuring they possess all legal ownership rights or licenses for any text, fonts, logos, or media provided to PRIRAJ GROUP</li>
              <li>Providing timely feedback on preview stages within 3 to 5 business days to maintain agreed sprint delivery momentum</li>
              <li>Procuring their own domain names, third-party API accounts (e.g. payment gateway credentials, mapping keys), and hosting accounts unless explicitly managed by PRIRAJ GROUP in writing</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">06</span>
              <span>Website Preview, Feedback &amp; Approval</span>
            </h2>
            <p className="mb-3">
              Upon completing development, PRIRAJ GROUP provides the Client with a private staging link or interactive demonstration. The Client has the opportunity to inspect typography, responsiveness, interactive states, contact forms, and functional flows.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              Formal approval of the preview confirms that the deliverables meet the agreed specification and signals progression to final milestone invoicing and handover.
            </p>
          </section>

          {/* Section 7 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">07</span>
              <span>Included Revisions &amp; Additional Work</span>
            </h2>
            <p className="mb-3">
              Every PRIRAJ GROUP quotation includes designated revision rounds (typically 2 to 3 iterations during design and staging) to refine spacing, visual hierarchy, text copy, color balances, and responsive presentation within the agreed scope.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              Requests that introduce new pages, fundamental architectural redesigns, alternate third-party integrations, or features outside the initial approved scope are quoted separately as a scope addendum.
            </p>
          </section>

          {/* Section 8 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">08</span>
              <span>Project Timelines &amp; Delays</span>
            </h2>
            <p className="mb-3">
              Timeline estimates provided in proposals are good-faith engineering targets based on normal workflow progression.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              Delivery schedules may be extended due to client delays in providing essential assets, delayed feedback, expanded revision requests, or third-party service outages outside PRIRAJ GROUP&rsquo;s control. PRIRAJ GROUP is not liable for indirect commercial losses arising from project schedule extensions caused by client dependencies.
            </p>
          </section>

          {/* Section 9 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">09</span>
              <span>Cancellation, Abandonment &amp; Refund Terms</span>
            </h2>
            <p className="mb-3">
              Project cancellations and refunds are governed strictly by our published <a href="/payment-refund-policy" className="text-[#d4af37] underline">Payment &amp; Refund Policy</a>:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-300 mb-3">
              <li>If the Client reviews the demonstration preview and decides not to proceed because they are unsatisfied with the build against the agreed scope, they may submit a written request to refund the 50% advance payment.</li>
              <li>Refund requests must be delivered in writing via email before final milestone approval and before source-code handover.</li>
              <li>Upon refund issuance, the engagement terminates, and the Client acquires zero rights to use, copy, deploy, or reverse-engineer the previewed code or designs.</li>
              <li>Projects abandoned by the Client without communication for over 45 consecutive days may be closed.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">10</span>
              <span>Source-Code Delivery &amp; Intellectual Property</span>
            </h2>
            <p className="mb-3">
              Upon receipt and clearance of 100% full project payment, PRIRAJ GROUP assigns to the Client full ownership and rights to the bespoke website frontend code, layout designs, and custom text created specifically for the project.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              PRIRAJ GROUP retains the right to display the completed work in its studio portfolio, case studies, and marketing channels unless a mutual Non-Disclosure Agreement (NDA) explicitly prohibits public attribution.
            </p>
          </section>

          {/* Section 11 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">11</span>
              <span>Third-Party Software, Hosting, Domains &amp; Licences</span>
            </h2>
            <p className="mb-3">
              Web applications built by PRIRAJ GROUP utilize industry-standard open-source libraries (e.g. React, Tailwind CSS, TypeScript) and third-party SaaS platforms (e.g. Resend, Stripe, Google Maps).
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              Third-party components remain subject to their respective open-source or commercial licenses. PRIRAJ GROUP does not warrant continuous uptime or policy changes of external platforms (such as hosting providers, domain registrars, or payment processors).
            </p>
          </section>

          {/* Section 12 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">12</span>
              <span>Confidentiality &amp; Client Information</span>
            </h2>
            <p>
              Both parties agree to protect and treat as confidential all proprietary business information, technical credentials, unpublished brand strategies, and financial data exchanged during the engagement. PRIRAJ GROUP does not disclose client credentials or non-public business data to unauthorized third parties.
            </p>
          </section>

          {/* Section 13 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">13</span>
              <span>Maintenance, Post-Launch Support &amp; Modifications</span>
            </h2>
            <p className="mb-3">
              Every completed website includes a standard post-launch support window (typically 14 to 30 days depending on package tier) to address any functional bugs or anomalies discovered after deployment.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              Ongoing maintenance, major browser platform deprecation updates, subsequent content additions, or third-party API changes occurring after the warranty period are available via monthly retainers or ad-hoc hourly engineering support.
            </p>
          </section>

          {/* Section 14 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">14</span>
              <span>Lawful Limitations of Liability</span>
            </h2>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, PRIRAJ GROUP shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business opportunities arising out of the performance or non-performance of delivered software.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              PRIRAJ GROUP&rsquo;s total aggregate liability arising out of any engagement shall not exceed the total fees actually paid by the Client to PRIRAJ GROUP for the specific project in dispute.
            </p>
          </section>

          {/* Section 15 */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">15</span>
              <span>Dispute Resolution &amp; Governing Law</span>
            </h2>
            <p className="mb-3">
              In the event of any disagreement or dispute, both parties agree to first engage in good-faith executive discussions between the Client&rsquo;s authorized representative and the Founder of PRIRAJ GROUP to reach an amicable resolution.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              These Terms and any project engagements shall be governed by and construed in accordance with the laws of India. Any formal legal proceedings arising hereunder shall be subject to the exclusive jurisdiction of the competent courts of Jammu &amp; Kashmir, India.
            </p>
          </section>

          {/* Section 16 */}
          <section className="rounded-2xl bg-gradient-to-b from-[#111119] to-[#0a0a0f] border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">16</span>
              <span>Contact Details for Legal &amp; Contract Inquiries</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Business Entity</span>
                <strong className="text-white text-base">PRIRAJ GROUP</strong>
              </div>
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Executive Leadership</span>
                <strong className="text-white text-base">{FOUNDER_INFO.name}</strong>
              </div>
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Official Email</span>
                <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] font-semibold hover:underline">
                  {OFFICIAL_CONTACT.email}
                </a>
              </div>
              <div>
                <span className="text-neutral-500 uppercase font-mono block text-[11px]">Official Phone / WhatsApp</span>
                <span className="text-white font-mono">{OFFICIAL_CONTACT.phone}</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-neutral-400">
              Contract, NDA, or enterprise terms revisions may be requested via email to <span className="text-white">{OFFICIAL_CONTACT.email}</span>.
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
