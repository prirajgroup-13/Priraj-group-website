import React, { useEffect } from 'react';
import { ArrowLeft, RefreshCw, CheckCircle2, AlertCircle, FileText, Code2, Rocket, Clock, ShieldCheck } from 'lucide-react';
import { OFFICIAL_CONTACT, FOUNDER_INFO } from '../data/content';
import { useRouter } from '../router/Router';

export const PaymentRefundPolicyPage: React.FC = () => {
  const { navigate } = useRouter();

  useEffect(() => {
    document.title = 'Payment & Refund Policy | PRIRAJ GROUP';
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
            <RefreshCw className="w-3 h-3 text-[#d4af37]" />
            <span>CLIENT-FIRST TRANSPARENCY</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Payment &amp; Refund Policy
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            A clear, fair, and documented overview of our two-stage payment model, website preview inspection, advance refund process, source-code delivery, and deployment options.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-6 pt-6 border-t border-white/5">
            <span>Website: <strong className="text-neutral-200">https://www.prirajgroup.com/</strong></span>
            <span>&middot;</span>
            <span>Founder &amp; CEO: <strong className="text-neutral-200">{FOUNDER_INFO.name}</strong></span>
            <span>&middot;</span>
            <span>Billing Enquiries: <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] hover:underline">{OFFICIAL_CONTACT.email}</a></span>
          </div>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-[#101422]/90 border border-[#38bdf8]/30">
            <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] mb-1 font-semibold">Stage 1 · Kickoff</div>
            <div className="font-display text-lg font-bold text-white mb-2">50% Advance &amp; Scope Alignment</div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              We establish written scope, collect design requirements and branding assets, and begin bespoke engineering upon receipt of the initial 50% advance.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#151209]/90 border border-[#d4af37]/40">
            <div className="text-xs font-mono uppercase tracking-wider text-[#d4af37] mb-1 font-semibold">Stage 2 · Approval &amp; Handover</div>
            <div className="font-display text-lg font-bold text-white mb-2">Interactive Preview &amp; 50% Final Balance</div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              You inspect the live preview. If satisfied, the final 50% balance is paid and complete source code and deployment assistance are delivered.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-12 text-neutral-300 text-sm sm:text-base leading-relaxed">
          {/* Section A */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">A</span>
              <span>Initial Advance Payment (50%)</span>
            </h2>
            <p className="mb-4">
              To ensure dedicated engineering time and allocate senior developers to your build, PRIRAJ GROUP operates on a phased milestone model. The client pays <strong>50% of the agreed total project price</strong> before development begins.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 mb-4 text-xs sm:text-sm">
              <strong className="text-white block mb-2 font-mono uppercase text-xs text-[#d4af37]">Work Commences Officially Once:</strong>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>The 50% advance milestone payment has cleared into PRIRAJ GROUP accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>The project scope, deliverables, timeline estimate, and written quotation are agreed upon in writing via email or formal proposal document.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>The client provides necessary baseline assets (brand logos, typography/colors, primary copy, and third-party access credentials where applicable).</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section B */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">B</span>
              <span>Website Development &amp; Live Interactive Preview</span>
            </h2>
            <p className="mb-3">
              PRIRAJ GROUP develops the website strictly in accordance with the approved scope. During or at the conclusion of the build phase, our engineers provide the client with a private, interactive staging URL or demonstration preview.
            </p>
            <p className="mb-3">
              The client is invited to inspect the design, desktop and mobile responsive layout, animations, agreed pages, forms, and functional workflows on their own devices.
            </p>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-300">
              <strong className="text-white block mb-1">Scope Integrity:</strong>
              Any additional features, new pages, or architectural changes requested outside the originally approved written scope require an addendum with separate pricing and timeline estimates before implementation.
            </div>
          </section>

          {/* Section C - The Core Refund Policy */}
          <section className="rounded-2xl bg-gradient-to-b from-[#14120c] to-[#0a0a0f] border-2 border-[#d4af37]/60 p-6 sm:p-8 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37] text-black text-xs font-bold font-mono uppercase mb-4">
              <span>FOUNDER COMMITMENT</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-black bg-[#d4af37] px-2 py-0.5 rounded font-bold">C</span>
              <span>Client Satisfaction &amp; Advance Refund Process</span>
            </h2>
            <p className="mb-4">
              The founder&rsquo;s core policy is that no client should ever feel locked into a website that does not meet agreed standards. <strong>If you review the live demonstration preview and decide not to proceed because you are not satisfied with the result against the agreed scope, you may request a refund of your 50% advance payment.</strong>
            </p>

            <div className="space-y-4 my-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <strong className="text-[#d4af37] block font-mono text-xs uppercase mb-1">1. How to Submit a Written Refund Request</strong>
                <p className="text-neutral-300">
                  The client submits a written notice via email to <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="text-[#d4af37] underline">{OFFICIAL_CONTACT.email}</a> with the subject line <span className="font-mono text-white">&quot;Project Cancellation &amp; Advance Refund Request &mdash; [Project Name]&quot;</span>. The email should state the project quotation reference, the preview inspected, and the specific reasons for dissatisfaction.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <strong className="text-[#d4af37] block font-mono text-xs uppercase mb-1">2. Review Against Agreed Scope</strong>
                <p className="text-neutral-300">
                  PRIRAJ GROUP leadership reviews the request against the agreed written brief, project scope, and deliverables. We prioritize open, transparent communication to identify if issues stem from subjective preferences, missing assets, or technical deviations. Where possible, we first offer corrective revisions. If you still elect not to proceed, the cancellation is honored.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <strong className="text-[#d4af37] block font-mono text-xs uppercase mb-1">3. Refund Processing &amp; Disbursement Timeline</strong>
                <p className="text-neutral-300">
                  Approved refunds are remitted to the original funding account or bank channel via electronic transfer (NEFT/RTGS/UPI/original payment route). Refund disbursements are typically initiated within 7 to 10 business days following formal cancellation confirmation, subject to intermediary banking clearance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <strong className="text-[#d4af37] block font-mono text-xs uppercase mb-1">4. Resolution of Disputes &amp; Good Faith Handling</strong>
                <p className="text-neutral-300">
                  We believe in fair commercial conduct. We do not invent hidden cancellation fees or penalize clients unfairly. At the same time, this policy does not constitute an unconditional guarantee after final approval, nor does it apply after full source-code handover (see Sections D &amp; E).
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-neutral-300">
              <strong className="text-white block mb-1">IP Note on Cancelled Projects:</strong>
              In the event an advance refund is issued, all proprietary source code, design mockups, digital components, and custom architecture created during the project remain the exclusive intellectual property of PRIRAJ GROUP. The client may not deploy, host, copy, or adapt any portion of the previewed build.
            </div>
          </section>

          {/* Section D */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">D</span>
              <span>Final Milestone Payment (50%)</span>
            </h2>
            <p className="mb-3">
              When the client inspects the preview, completes any included revision cycles, and formally approves the website, the remaining <strong>50% final balance of the agreed project price</strong> becomes due before production delivery.
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              Upon receipt of the final milestone, PRIRAJ GROUP issues a formal zero-balance invoice confirming total project cost, cleared milestones, and commencement of the handover procedure.
            </p>
          </section>

          {/* Section E */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">E</span>
              <span>Source-Code Handover &amp; Deliverables</span>
            </h2>
            <p className="mb-4">
              Upon clearance of the 100% full project payment, PRIRAJ GROUP delivers the complete project package agreed in the proposal:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm mb-4">
              <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <Code2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Complete Clean Source Code:</strong> Production-ready repository or archive (React, TypeScript, CSS, server modules).</span>
              </li>
              <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Assets &amp; Documentation:</strong> Agreed graphics, vector logos, build configurations, and environment variable guidelines.</span>
              </li>
              <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Repository Access:</strong> Direct GitHub / GitLab project transfer or access delegation where specified in scope.</span>
              </li>
              <li className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5">
                <Rocket className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span><strong>Handover Instructions:</strong> Clear build scripts, README files, and deployment instructions for your engineering team.</span>
              </li>
            </ul>
            <p className="text-xs text-neutral-400">
              Open-source libraries, frameworks, licensed fonts, and third-party modules remain governed by their respective open-source or commercial licenses.
            </p>
          </section>

          {/* Section F */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">F</span>
              <span>Deployment Options</span>
            </h2>
            <p className="mb-4">Clients may choose one of two standard deployment paths:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <strong className="text-white block font-display text-sm mb-1.5">Option 1 &middot; Independent Deployment</strong>
                <p className="text-neutral-300 mb-2">
                  Receive the complete, packaged source code and documentation to deploy independently onto your internal infrastructure, private VPS, AWS, GCP, or serverless provider.
                </p>
                <span className="text-[11px] text-neutral-400">Ideal for teams with in-house DevOps.</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#d4af37]/40">
                <strong className="text-white block font-display text-sm mb-1.5">Option 2 &middot; Assisted Studio Deployment</strong>
                <p className="text-neutral-300 mb-2">
                  PRIRAJ GROUP assists you directly with production configuration, DNS mapping, SSL certification, and hosting setup (Vercel, Cloudflare, AWS, Hostinger, etc.).
                </p>
                <span className="text-[11px] text-[#d4af37]">Included in Business &amp; Premium packages.</span>
              </div>
            </div>
            <div className="mt-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-400">
              <strong>Third-Party Subscription Costs:</strong> Recurring domain registration fees, hosting plans, database instances, API keys, or paid software plugins are billed directly to the client by their chosen vendors unless explicitly bundled into the written quote.
            </div>
          </section>

          {/* Section G */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">G</span>
              <span>Delays, Inactivity &amp; Scope Expansion</span>
            </h2>
            <p className="mb-3">
              Efficient web engineering requires active collaboration. Client response times directly impact delivery dates:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-neutral-300 mb-4">
              <li>Delays in providing required branding assets, text copy, or review feedback will proportionally extend the project delivery timeline.</li>
              <li>Projects stalled by client inactivity for more than 45 consecutive days without written notice may be archived and require rescheduling based on developer availability.</li>
              <li>Major redesign requests after layout sign-off or feature additions beyond the approved proposal will be quoted as an addendum before work proceeds.</li>
            </ul>
          </section>

          {/* Section H */}
          <section className="rounded-2xl bg-[#0c0c12]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
              <span className="text-xs font-mono text-[#d4af37] px-2 py-0.5 rounded bg-white/5 border border-white/10">H</span>
              <span>Refund Transparency &amp; Consumer Protection</span>
            </h2>
            <p className="mb-3">
              We make this payment and refund policy publicly accessible on our website so clients can review every term before committing financial funds or signing quotations.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300">
              PRIRAJ GROUP rejects hidden fees, ambiguous cancellation penalties, or deceptive practices. Nothing in this policy is intended to limit or exclude statutory rights protected under applicable Indian consumer laws.
            </p>
          </section>

          {/* Questions & Verification Box */}
          <section className="rounded-2xl bg-gradient-to-b from-[#111119] to-[#0a0a0f] border border-[#d4af37]/40 p-6 sm:p-8 shadow-2xl">
            <h3 className="font-display text-xl font-bold text-white mb-2">Have Questions About Project Billing?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6">
              Our founder and engineering leads are available to walk through custom milestone agreements, enterprise procurement workflows, or specific billing arrangements.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <a
                href={`mailto:${OFFICIAL_CONTACT.email}?subject=Billing%20Enquiry%20-%20PRIRAJ%20GROUP`}
                className="px-5 py-2.5 rounded-lg bg-[#d4af37] text-black font-semibold uppercase tracking-wider hover:bg-[#e5c07b] transition-all"
              >
                Email Billing Support &rarr;
              </a>
              <a
                href={OFFICIAL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition-all"
              >
                WhatsApp Founder Direct
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
