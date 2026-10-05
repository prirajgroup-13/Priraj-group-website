import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Car,
  User,
  Shield,
  Layers,
  ChevronRight,
  Award,
  Phone,
  Check,
  RefreshCw,
  Navigation
} from 'lucide-react';
import { useRouter } from '../router/Router';

interface DrivingSchoolCaseStudyProps {
  onOpenProjectModal: (serviceName?: string) => void;
}

interface DrivingCourse {
  id: string;
  name: string;
  duration: string;
  price: string;
  desc: string;
  carType: string;
}

const DRIVING_COURSES: DrivingCourse[] = [
  {
    id: 'comprehensive-beginner',
    name: 'Comprehensive Beginner (20 Lessons)',
    duration: '20 Days · 1 hr/day',
    price: '₹12,500',
    desc: 'Complete dual-control steering, clutch & gear control, traffic rules, slope starts, and road test certification.',
    carType: 'Dual-Control Hatchback (Manual / Auto)'
  },
  {
    id: 'road-test-prep',
    name: 'Road Test Express Certification',
    duration: '7 Days · 1.5 hr/day',
    price: '₹4,800',
    desc: 'RTO test track simulation, figure-8 steering mastery, parallel parking calibration, and emergency braking.',
    carType: 'Test-Track Calibrated Vehicle'
  },
  {
    id: 'highway-defensive',
    name: 'Highway & Defensive Driving Mastery',
    duration: '5 Days · 2 hr/day',
    price: '₹6,200',
    desc: 'Expressway overtaking, speed management, night driving safety, and hazardous condition maneuvering.',
    carType: 'Compact SUV / Sedan'
  },
  {
    id: 'parking-clinic',
    name: 'Tight Parking & Reverse Maneuvers',
    duration: '3 Days · 1.5 hr/day',
    price: '₹3,500',
    desc: 'Basement ramp ascent, parallel parking between vehicles, tight U-turns, and spatial mirror awareness.',
    carType: 'Dual-Control Hatchback'
  }
];

const TIME_SLOTS = [
  '07:30 AM — Early Morning',
  '09:00 AM — Morning Traffic',
  '11:00 AM — Midday Practice',
  '02:30 PM — Afternoon Session',
  '04:00 PM — Evening Rush',
  '05:30 PM — Sunset Navigation'
];

export const DrivingSchoolCaseStudy: React.FC<DrivingSchoolCaseStudyProps> = ({ onOpenProjectModal }) => {
  const { navigate } = useRouter();

  // Interactive booking flow state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [selectedCourse, setSelectedCourse] = useState<DrivingCourse>(DRIVING_COURSES[0]);
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(1);
  const [selectedTime, setSelectedTime] = useState<string>('09:00 AM — Morning Traffic');
  const [pickupAddress, setPickupAddress] = useState<string>('House 42, Sector 14 Landmark Gate');
  const [pickupLandmark, setPickupLandmark] = useState<string>('Near Central Park North Gate');
  const [studentName, setStudentName] = useState<string>('Rohan Sharma');
  const [studentPhone, setStudentPhone] = useState<string>('+91 98112 34567');
  const [hasLearnerLicense, setHasLearnerLicense] = useState<boolean>(true);
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
    setCurrentStep(6);
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
            <span className="text-neutral-300">DRIVING SCHOOL BOOKING</span>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 1. PROJECT HERO                                      */}
        {/* ==================================================== */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs font-mono">
            <span className="text-[#d4af37] font-bold">PROJECT 03</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white font-semibold">WEB / BOOKING PLATFORM</span>
            <span className="text-neutral-600">·</span>
            <span className="text-[#38bdf8] font-bold uppercase">STUDENT DISPATCH PORTAL</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            DRIVING SCHOOL <span className="gold-gradient-text">BOOKING</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-normal mb-8">
            A modern driving-school website that allows students to learn about driving programs, choose their preferred training schedule, book available lessons and request pickup from their location.
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400 mb-10">
            <span>BOOKING</span>
            <span className="text-neutral-600">·</span>
            <span>WEB</span>
            <span className="text-neutral-600">·</span>
            <span>EDUCATION</span>
            <span className="text-neutral-600">·</span>
            <span>UI/UX</span>
            <span className="text-neutral-600">·</span>
            <span>DEVELOPMENT</span>
            <span className="text-neutral-600">·</span>
            <span>GEOLOCATION PICKUP</span>
          </div>

          {/* Large Showcase Mockup */}
          <div className="relative rounded-3xl overflow-hidden bg-[#06080e] border border-white/15 aspect-[16/9] shadow-2xl">
            <img
              src="/assets/projects/driving-school.jpg"
              alt="Driving School Booking Platform UI Mockup by PRIRAJ GROUP"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90">
              <span className="bg-black/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                Production UI Showcase &middot; Course Dispatch &amp; Doorstep Pickup Engine
              </span>
              <span className="hidden sm:inline-block text-[#38bdf8]">
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
              Phone Tag, Clashing Lessons &amp; Pickup Confusion
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              Driving schools often depend on calls or messaging to arrange lessons, making scheduling inconvenient for students.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Certified driving instructors spend their entire day behind the wheel and cannot safely answer phone calls while instructing. Students with college or office shifts struggle to coordinate lesson slots through fragmented WhatsApp messages. Furthermore, coordinating home or office pickup locations without structured address and landmark validation leads to missed lessons, instructor vehicle idle time, and mutual frustration.
            </p>
          </div>

          {/* The Solution */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090d16]/90 border border-[#38bdf8]/30 shadow-xl">
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest mb-3 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              THE SOLUTION
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              A Modern All-in-One Training Dispatch Platform
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-4">
              A modern booking experience that lets students choose their course, preferred date/time and pickup location.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              PRIRAJ GROUP built a full-stack student scheduling platform. Learners explore curriculum syllabi, choose automatic or manual vehicles, reserve available instructor slots, and specify their exact doorstep pickup address with landmark coordinates. The driving school receives structured, dispatch-ready lesson orders with instant student verification.
            </p>
          </div>
        </div>

        {/* ==================================================== */}
        {/* 3. VISUAL BOOKING FLOW ARCHITECTURE                  */}
        {/* ==================================================== */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-semibold">
              Workflow Architecture
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
              The Six-Step Booking Flow
            </h2>
            <p className="text-sm text-neutral-400">
              Clear visual workflow for driving student onboarding and lesson logistics.
            </p>
          </div>

          {/* Flow Stepper */}
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 mb-12">
            {[
              { num: '01', title: 'CHOOSE COURSE', desc: 'Syllabus & Car Type' },
              { num: '02', title: 'SELECT DATE', desc: 'Calendar Availability' },
              { num: '03', title: 'CHOOSE TIME', desc: 'Morning / Evening Slots' },
              { num: '04', title: 'PICKUP LOCATION', desc: 'Doorstep Coordinates' },
              { num: '05', title: 'STUDENT DETAILS', desc: 'License & Contact Info' },
              { num: '06', title: 'CONFIRM BOOKING', desc: 'Dispatch Confirmation' }
            ].map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-3.5 rounded-2xl bg-[#0d1322]/80 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#38bdf8] mb-1">
                    {step.num}
                  </div>
                  <div className="font-display text-[11px] font-bold text-white mb-1 tracking-wider uppercase">
                    {step.title}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ==================================================== */}
          {/* INTERACTIVE BOOKING SIMULATOR                        */}
          {/* ==================================================== */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0b1224] to-[#06080e] border border-white/15 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#38bdf8] font-semibold">
                  INTERACTIVE STUDENT PORTAL DEMO
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Test Lesson Scheduling &amp; Pickup Dispatch
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">Step {currentStep} of 6</span>
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

            {/* Step 1: Course Selection */}
            {currentStep === 1 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 1: Choose Your Driving Program
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {DRIVING_COURSES.map((course) => {
                    const isSelected = selectedCourse.id === course.id;
                    return (
                      <div
                        key={course.id}
                        onClick={() => setSelectedCourse(course)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#121c32] border-[#38bdf8] shadow-[0_0_20px_0_rgba(56,189,248,0.2)]'
                            : 'bg-[#090d16] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-display text-base font-bold text-white">
                            {course.name}
                          </h4>
                          <span className="text-sm font-mono font-bold text-[#38bdf8]">
                            {course.price}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                          {course.desc}
                        </p>
                        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/5">
                          <span>{course.duration}</span>
                          <span className={isSelected ? 'text-[#38bdf8] font-semibold' : ''}>
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

            {/* Step 2: Date Selection */}
            {currentStep === 2 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 2: Choose Training Start Date
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
                            ? 'bg-[#121c32] border-[#38bdf8] shadow-lg text-white'
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
                    &larr; Back to Courses
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

            {/* Step 3: Time Slot */}
            {currentStep === 3 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 3: Select Instructor Shift Time
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`p-3.5 rounded-xl border text-left font-mono text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#38bdf8] text-black font-bold border-[#38bdf8] shadow-md'
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
                    <span>Enter Pickup Location</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Pickup Location */}
            {currentStep === 4 && (
              <div>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 4: Specify Doorstep Pickup Location
                </div>
                <div className="p-5 rounded-2xl bg-[#090d16] border border-white/10 mb-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
                    <MapPin className="w-4 h-4" />
                    <span>Doorstep Instructor Pickup &amp; Drop Service</span>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Pickup Address / Street / Society *
                    </label>
                    <input
                      type="text"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      required
                      placeholder="e.g. Flat 302, Green Avenue, Gandhi Nagar"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#38bdf8] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                      Prominent Landmark (for instructor navigation)
                    </label>
                    <input
                      type="text"
                      value={pickupLandmark}
                      onChange={(e) => setPickupLandmark(e.target.value)}
                      placeholder="e.g. Opposite State Bank ATM, near Community Center"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:border-[#38bdf8] outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                  >
                    &larr; Back to Time
                  </button>
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all cursor-pointer"
                  >
                    <span>Enter Student Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Student Details */}
            {currentStep === 5 && (
              <form onSubmit={handleConfirmSimulation}>
                <div className="text-xs font-mono text-neutral-400 mb-4 uppercase tracking-wider">
                  Step 5: Student Contact &amp; Learner License Info
                </div>
                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Student Full Name *</label>
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-[#38bdf8] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 mb-1.5">Student Phone Number *</label>
                      <input
                        type="tel"
                        value={studentPhone}
                        onChange={(e) => setStudentPhone(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:border-[#38bdf8] outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <input
                      type="checkbox"
                      id="llCheck"
                      checked={hasLearnerLicense}
                      onChange={(e) => setHasLearnerLicense(e.target.checked)}
                      className="w-4 h-4 rounded text-[#38bdf8] accent-[#38bdf8] cursor-pointer"
                    />
                    <label htmlFor="llCheck" className="text-xs text-neutral-300 cursor-pointer">
                      I hold a valid RTO Learner’s License (LL) or need school assistance to apply.
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                  >
                    &larr; Back to Pickup Location
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-[#d4af37] hover:bg-[#e5c07b] transition-all cursor-pointer shadow-lg"
                  >
                    <span>Confirm Lesson Booking &rarr;</span>
                  </button>
                </div>
              </form>
            )}

            {/* Step 6: Confirmation */}
            {currentStep === 6 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090d16] border border-[#38bdf8]/50 text-center max-w-lg mx-auto">
                <div className="w-12 h-12 rounded-full bg-[#38bdf8]/20 border border-[#38bdf8] flex items-center justify-center mx-auto mb-4 text-[#38bdf8]">
                  <Car className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-[#38bdf8] tracking-widest uppercase font-semibold">
                  LESSON SCHEDULED &middot; DISPATCH #DS-9281
                </span>
                <h4 className="font-display text-2xl font-bold text-white mb-2">
                  Driving Lesson Reserved
                </h4>
                <p className="text-xs text-neutral-300 mb-6">
                  Instructor dispatch confirmation sent to {studentPhone}.
                </p>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-2 mb-6 font-mono">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Course:</span>
                    <span className="text-white font-semibold truncate max-w-[200px]">{selectedCourse.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">First Session:</span>
                    <span className="text-white font-semibold">{dates[selectedDateIndex].dayName}, {dates[selectedDateIndex].dayNum}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Shift:</span>
                    <span className="text-[#38bdf8] font-bold">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Pickup Address:</span>
                    <span className="text-neutral-300 truncate max-w-[220px]">{pickupAddress}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Fee:</span>
                    <span className="text-[#d4af37] font-semibold">{selectedCourse.price} (Inclusive of fuel &amp; car)</span>
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
                    onClick={() => onOpenProjectModal('Driving School Dispatch Platform')}
                    className="px-5 py-2 rounded-lg bg-[#38bdf8] text-black text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Build Driving Platform &rarr;
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
          <div className="text-xs font-mono uppercase tracking-widest text-[#38bdf8] mb-2 font-semibold">
            Built-In Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Core Production Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Driving Course Catalog & Pricing',
                desc: 'Structured curriculum tiers for beginners, test certification, highway defense, and parking clinic.'
              },
              {
                title: 'Instructor Schedule Calendar',
                desc: 'Interactive calendar ensuring no double-booked dual-control vehicles across morning and evening shifts.'
              },
              {
                title: 'Available Time Slot Engine',
                desc: 'Real-time slot chips matched with vehicle availability and instructor shift windows.'
              },
              {
                title: 'Doorstep Pickup Coordinates',
                desc: 'Captures precise student pickup addresses, landmarks, and pin verification for smooth instructor transit.'
              },
              {
                title: 'Student Information & LL Status',
                desc: 'Automates student onboarding with Learner License tracking and emergency guardian contact validation.'
              },
              {
                title: 'Responsive Mobile-First Architecture',
                desc: 'Tailored for smartphone booking on 3G/4G connections with instant response speeds.'
              }
            ].map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090d16]/80 border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8] text-xs font-mono font-bold mb-4">
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
            onClick={() => navigate('/work/barber-booking')}
            className="text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            &larr; Previous: Barber Shop Booking
          </button>

          <div className="flex items-center gap-4 text-center sm:text-right">
            <div>
              <div className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider">Next Portfolio Project</div>
              <div className="font-display text-base font-bold text-white">WINTER ARC — 90 DAY CHALLENGE</div>
            </div>
            <button
              onClick={() => navigate('/work/winter-arc')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-[#d4af37] text-neutral-300 hover:text-black border border-white/10 transition-all cursor-pointer"
              aria-label="View Winter Arc Case Study"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Conversion Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0d1424] to-[#070b14] border border-[#38bdf8]/30 text-center max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Build a Service Dispatch or Scheduling System
          </h3>
          <p className="text-sm text-neutral-300 mb-8 leading-relaxed max-w-lg mx-auto">
            PRIRAJ GROUP engineers customized booking, scheduling, and customer dispatch web platforms for ambitious service enterprises.
          </p>
          <button
            onClick={() => onOpenProjectModal('Driving School Dispatch Platform')}
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
