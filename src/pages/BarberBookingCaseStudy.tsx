import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Scissors,
  Sparkles,
  Smartphone,
  Shield,
  Layers,
  ChevronRight,
  Award,
  Phone,
  Check,
  RefreshCw,
  ExternalLink
} from 'lucide-react';
import { useRouter } from '../router/Router';

interface BarberBookingCaseStudyProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

interface BarberService {
  id: string;
  name: string;
  duration: string;
  price: string;
  desc: string;
}

const BARBER_SERVICES: BarberService[] = [
  {
    id: 'signature-fade',
    name: 'Executive Fade & Beard Sculpt',
    duration: '45 mins',
    price: '₹850',
    desc: 'Precision skin fade, hot lather outline, beard shaping with organic argan oil conditioning.'
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Straight Razor Shave',
    duration: '35 mins',
    price: '₹650',
    desc: 'Dual steamed eucalyptus towels, pre-shave butter, traditional Japanese straight-edge razor, cold aloe rinse.'
  },
  {
    id: 'classic-scissor',
    name: 'Classic Scissor Cut & Styling',
    duration: '30 mins',
    price: '₹550',
    desc: 'Consultation, tailored scissor architecture, scalp massage wash, matte clay finish.'
  },
  {
    id: 'royal-grooming',
    name: 'Royal Master Grooming Treatment',
    duration: '75 mins',
    price: '₹1,400',
    desc: 'Full haircut, beard sculpt, charcoal detox facial compress, neck & shoulder massage.'
  }
];

const TIME_SLOTS = [
  '10:00 AM',
  '11:15 AM',
  '12:30 PM',
  '02:00 PM',
  '03:15 PM',
  '04:30 PM',
  '05:45 PM',
  '07:00 PM'
];

export const BarberBookingCaseStudy: React.FC<BarberBookingCaseStudyProps> = ({ onOpenProjectModal }) => {
  const { navigate } = useRouter();

  // Interactive booking flow state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedService, setSelectedService] = useState<BarberService>(BARBER_SERVICES[0]);
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string>('11:15 AM');
  const [clientName, setClientName] = useState<string>('Vikram Malhotra');
  const [clientPhone, setClientPhone] = useState<string>('+91 98765 43210');
  const [clientNotes, setClientNotes] = useState<string>('Medium taper on sides, keep length on top.');
  const [isBooked, setIsBooked] = useState<boolean>(false);

  // Generate next 6 days
  const dates = Array.from({ length: 6 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    return { dayName, dayNum };
  });

  const handleConfirmSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setCurrentStep(5);
  };

  const handleResetSimulation = () => {
    setIsBooked(false);
    setCurrentStep(1);
  };

  return (
    <div className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10">
          <button
            onClick={() => navigate('/#work')}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Work</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-[#d4af37]">PORTFOLIO</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-300">BARBER SHOP BOOKING</span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 1. PROJECT HERO                                      */}
        {/* ==================================================== */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-mono">
            <span className="text-[#d4af37] font-bold">PROJECT 02</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white font-semibold">WEB / BOOKING PLATFORM</span>
            <span className="text-neutral-600">·</span>
            <span className="text-[#38bdf8] font-bold uppercase">REAL BUSINESS SYSTEM</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            BARBER SHOP <span className="gold-gradient-text">BOOKING</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-normal mb-8">
            A modern appointment-booking website designed for a barber shop, allowing customers to discover services, choose an appointment date and time, and book their visit online without unnecessary phone calls.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400 mb-10">
            <span>BOOKING</span>
            <span className="text-neutral-600">·</span>
            <span>WEB</span>
            <span className="text-neutral-600">·</span>
            <span>UI/UX</span>
            <span className="text-neutral-600">·</span>
            <span>DEVELOPMENT</span>
            <span className="text-neutral-600">·</span>
            <span>MOBILE-FIRST</span>
          </div>

          {/* Large Showcase Mockup */}
          <div className="relative rounded-3xl overflow-hidden bg-[#06080e] border border-white/15 aspect-[16/9] shadow-2xl">
            <img
              src="/assets/projects/barber-booking.jpg"
              alt="Barber Shop Booking Platform UI Mockup by PRIRAJ GROUP"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90">
              <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                Production UI Showcase &middot; Desktop &amp; Smartphone Booking Flow
              </span>
              <span className="hidden sm:inline-block text-[#d4af37]">
                Engineered by PRIRAJ GROUP
              </span>
            </div>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 2. THE PROBLEM & THE SOLUTION                        */}
        {/* ==================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* The Problem */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090d16]/90 border border-red-500/20 shadow-xl">
            <div className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              THE PROBLEM
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Disruptive Calls &amp; Lost Client Appointments
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Barber shops need a simple way for customers to schedule appointments without unnecessary phone calls or messaging.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed space-y-2">
              In a busy barbershop, barbers holding scissors and clippers cannot constantly answer ringing phones to explain pricing, check written diary registers, and negotiate open time slots. When calls go unanswered, potential customers book at competitor shops. On peak weekends, walk-ins result in 45+ minute waiting queues, degrading client satisfaction.
            </p>
          </div>

          {/* The Solution */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090d16]/90 border border-[#d4af37]/30 shadow-xl">
            <div className="text-xs font-mono text-[#d4af37] uppercase tracking-widest mb-3 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
              THE SOLUTION
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              A 5-Step Frictionless Digital Reservation Flow
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              A responsive online booking experience where customers can select a service, date and available time slot in under 60 seconds.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              PRIRAJ GROUP designed and developed an elegant, mobile-first web booking platform. Clients view exact services and transparent pricing, select open appointment slots in real-time, provide contact details, and receive instant confirmation. Barbers get a clean digital schedule on their phone with zero phone interruptions.
            </p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 3. VISUAL BOOKING FLOW ARCHITECTURE                  */}
        {/* ==================================================== */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-semibold">
              Conversion Architecture
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              The Five-Step Booking Flow
            </h2>
            <p className="text-sm text-neutral-400">
              Structured to guide a client from discovery to confirmed appointment with zero cognitive friction.
            </p>
          </div>

          {/* Stepper Diagram */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-12">
            {[
              { num: '01', title: 'SELECT SERVICE', desc: 'Catalog, pricing, duration' },
              { num: '02', title: 'SELECT DATE', desc: 'Real-time open days' },
              { num: '03', title: 'SELECT TIME', desc: 'Dynamic slot availability' },
              { num: '04', title: 'ENTER DETAILS', desc: 'Name, phone, notes' },
              { num: '05', title: 'CONFIRM VISIT', desc: 'Instant booking ticket' }
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-[#0d1322]/80 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#d4af37] mb-1">
                    {step.num}
                  </div>
                  <div className="font-display text-xs font-bold text-white mb-1 tracking-wider uppercase">
                    {step.title}
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    {step.desc}
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end text-neutral-600">
                  {sIdx < 4 && <ChevronRight className="w-3.5 h-3.5" />}
                </div>
              </div>
            ))}
          </div>

          {/* ==================================================== */}
          {/* INTERACTIVE BOOKING SIMULATOR                        */}
          {/* ==================================================== */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0b101c] to-[#06080e] border border-white/15 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
                  INTERACTIVE SYSTEM PREVIEW
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Test the Live Booking Experience
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">Step {currentStep} of 5</span>
                {isBooked && (
                  <button
                    onClick={handleResetSimulation}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-xs font-mono text-neutral-200 hover:text-white cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset Demo</span>
                  </button>
                )}
              </div>
            </div>

            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 1: Choose Your Grooming Service
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {BARBER_SERVICES.map((srv) => {
                    const isSelected = selectedService.id === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#151c2e] border-[#d4af37] shadow-[0_0_20px_0_rgba(212,175,55,0.2)]'
                            : 'bg-[#090d16] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-base font-bold text-white">
                            {srv.name}
                          </h4>
                          <span className="text-sm font-mono font-bold text-[#d4af37]">
                            {srv.price}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                          {srv.desc}
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                          <span>{srv.duration}</span>
                          <span className={isSelected ? 'text-[#d4af37] font-semibold' : ''}>
                            {isSelected ? '✓ Selected' : 'Tap to select'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all cursor-pointer"
                  >
                    <span>Proceed to Date Selection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Date */}
            {currentStep === 2 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 2: Choose Appointment Date
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 mb-8">
                  {dates.map((d, dIdx) => {
                    const isSelected = selectedDateIndex === dIdx;
                    return (
                      <button
                        key={dIdx}
                        onClick={() => setSelectedDateIndex(dIdx)}
                        className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#151c2e] border-[#d4af37] shadow-lg text-white'
                            : 'bg-[#090d16] border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-mono font-semibold mb-1 text-neutral-400">
                          {d.dayName}
                        </div>
                        <div className="font-display text-lg font-bold text-white">
                          {d.dayNum}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                  >
                    &larr; Back to Services
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all cursor-pointer"
                  >
                    <span>Choose Time Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Select Time */}
            {currentStep === 3 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 3: Select Available Time Slot
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-3.5 rounded-xl border text-center font-mono text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#d4af37] text-black font-bold border-[#d4af37] shadow-md'
                            : 'bg-[#090d16] border-white/10 text-neutral-300 hover:border-white/30'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                  >
                    &larr; Back to Date
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all cursor-pointer"
                  >
                    <span>Enter Client Information</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Client Information */}
            {currentStep === 4 && (
              <form onSubmit={handleConfirmSimulation}>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 4: Customer Details &amp; Notes
                </div>
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-[#d4af37] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Mobile Phone (for SMS confirmation) *</label>
                      <input
                        type="tel"
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-[#d4af37] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">Styling Preferences / Notes (Optional)</label>
                    <input
                      type="text"
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-[#d4af37] outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                  >
                    &larr; Back to Time
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all cursor-pointer shadow-lg"
                  >
                    <span>Confirm Appointment &rarr;</span>
                  </button>
                </div>
              </form>
            )}

            {/* Step 5: Confirmed Ticket */}
            {currentStep === 5 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#d4af37]/40 text-center max-w-lg mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto mb-4 text-[#d4af37]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-[#d4af37] tracking-widest uppercase font-semibold">
                  BOOKING CONFIRMED &middot; CODE #PRJ-8492
                </span>
                <h4 className="font-display text-2xl font-bold text-white mb-2">
                  Appointment Reserved
                </h4>
                <p className="text-xs text-neutral-300 mb-6">
                  SMS verification dispatched to {clientPhone}.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-2 mb-6 font-mono">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Service:</span>
                    <span className="text-white font-semibold">{selectedService.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Date:</span>
                    <span className="text-white font-semibold">{dates[selectedDateIndex].dayName}, {dates[selectedDateIndex].dayNum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Time:</span>
                    <span className="text-[#d4af37] font-bold">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Price:</span>
                    <span className="text-white font-semibold">{selectedService.price} (Pay at venue)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Client:</span>
                    <span className="text-neutral-300">{clientName}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={handleResetSimulation}
                    className="px-4 py-2 rounded-lg bg-white/10 text-xs font-mono text-neutral-300 hover:text-white cursor-pointer"
                  >
                    Simulate Another Booking
                  </button>
                  <button
                    onClick={() => onOpenProjectModal('Barber Shop Booking Platform')}
                    className="px-5 py-2 rounded-lg bg-[#d4af37] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Build This For My Shop &rarr;
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================================================== */}
        {/* 4. KEY FEATURES DEEP DIVE                            */}
        {/* ==================================================== */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-[#d4af37] mb-2 font-semibold">
            Built-In Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Core Production Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Service Catalog & Dynamic Pricing',
                desc: 'Clean service cards showing haircut techniques, beard sculpting, add-ons, pricing, and exact service duration.'
              },
              {
                title: 'Interactive Date Picker',
                desc: 'Weekly calendar view that dynamically detects operating holidays, days off, and full booking capacity.'
              },
              {
                title: 'Real-Time Time Slot Logic',
                desc: 'Anti-clash scheduling engine that automatically calculates appointment duration and removes booked slots.'
              },
              {
                title: 'Customer Data & Notes',
                desc: 'Captures essential contact information and styling preferences with instant mobile phone validation.'
              },
              {
                title: 'Booking Confirmation & Notifications',
                desc: 'Instant booking screen plus automated SMS/WhatsApp webhook integration for client arrival reminders.'
              },
              {
                title: 'Mobile-First Touch Ergonomics',
                desc: 'Large touch targets (>= 44px) engineered specifically for rapid thumb booking on iPhone and Android viewports.'
              }
            ].map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090d16]/80 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] text-xs font-mono font-bold mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================== */}
        {/* 5. NEXT PROJECT NAVIGATION & CONVERSION              */}
        {/* ==================================================== */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <button
            onClick={() => navigate('/work/winter-arc')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; Previous: Winter Arc
          </button>

          <div className="flex items-center gap-4 text-center sm:text-right">
            <div>
              <div className="text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider">Next Portfolio Project</div>
              <div className="font-display text-base font-bold text-white">DRIVING SCHOOL BOOKING</div>
            </div>
            <button
              onClick={() => navigate('/work/driving-school')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#38bdf8] text-neutral-300 hover:text-black border border-white/10 transition-all cursor-pointer"
              aria-label="View Driving School Case Study"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Conversion Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0d1424] to-[#070b14] border border-[#d4af37]/30 text-center max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Need a Booking Engine for Your Business?
          </h3>
          <p className="text-sm text-neutral-300 mb-8 leading-relaxed max-w-lg mx-auto">
            From barber shops and salons to healthcare clinics and coaching practices, PRIRAJ GROUP builds custom booking systems tailored around your operational workflow.
          </p>
          <button
            onClick={() => onOpenProjectModal('Barber Shop Booking Platform')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all shadow-md cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
