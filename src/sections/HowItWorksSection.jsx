import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, Home, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

import avatarAmara from '../assets/avatar_amara.jpg';
import avatarDavid from '../assets/avatar_david.jpg';
import avatarSarah from '../assets/avatar_sarah.jpg';

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Compass,
      tagline: "Discover your readiness",
      title: "Take the Village Test",
      description: "Answer questions about your lifestyle, values, finances, and vision for community living. BOMA's Readiness Engine scores your collaborative homeownership readiness and helps you understand what kind of co-owner you'd be."
    },
    {
      number: "02",
      icon: Users,
      tagline: "Meet your matched co-buyers",
      title: "Form Your Pod",
      description: "BOMA matches you with a compatible community based on your values, financial readiness, governance preferences, and shared vision — not just who you already know. Your Pod is a small, aligned group ready to buy together."
    },
    {
      number: "03",
      icon: Home,
      tagline: "Build trust before you build anything",
      title: "Bond in The Commons",
      description: "Your Pod gets a shared dashboard, agreement scaffolding, and a space to communicate — so you can genuinely get to know each other before any money, land, or legal commitments enter the picture. Land, financing, and construction come in Phase 2."
    }
  ];

  const renderStepPhoneScreen = (stepIndex) => {
    if (stepIndex === 0) {
      // Step 01: Village Test & Readiness Engine UI
      return (
        <div className="rounded-[2rem] overflow-hidden bg-[#F5F1EA] pt-7 pb-4 px-3.5 text-center text-[#2E2330] space-y-3 shadow-inner relative z-10 h-[430px] flex flex-col justify-between">
          <div>
            {/* Logo & Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#2E2330]/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333]">Readiness Engine</span>
              <span className="text-[9px] font-bold bg-[#C46A4A]/15 text-[#C46A4A] px-2 py-0.5 rounded-full">Step 01</span>
            </div>

            {/* Score Circular Dial */}
            <div className="my-3 p-3 bg-white rounded-2xl border border-[#2E2330]/10 shadow-sm flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-semibold text-[#7A746B] uppercase block">Collaborative Score</span>
                <span className="font-serif text-2xl font-bold text-[#2E2330]">94 <span className="text-xs text-[#C46A4A]">/ 100</span></span>
                <span className="text-[9px] text-[#B87333] font-bold block mt-0.5">High Compatibility</span>
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-[#C46A4A] flex items-center justify-center font-bold text-xs text-[#2E2330] bg-[#F5F1EA]">
                94%
              </div>
            </div>

            {/* Questionnaire Card Preview */}
            <div className="bg-white p-3 rounded-2xl border border-[#2E2330]/10 text-left space-y-2">
              <span className="text-[9px] font-bold text-[#C46A4A] uppercase tracking-wider block">Question 12 of 18</span>
              <p className="text-[11px] font-semibold text-[#2E2330] leading-snug">"How do you prefer to handle shared maintenance?"</p>
              <div className="space-y-1 pt-1">
                <div className="p-1.5 rounded-lg bg-[#C46A4A]/10 border border-[#C46A4A]/30 text-[10px] font-semibold text-[#2E2330] flex items-center justify-between">
                  <span>A. Scheduled shared workdays</span>
                  <CheckCircle2 className="w-3 h-3 text-[#C46A4A]" />
                </div>
                <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-[10px] text-gray-600">
                  <span>B. Hired monthly contractor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <button className="w-full py-2.5 rounded-xl bg-[#C46A4A] text-white font-bold text-xs shadow-md hover:bg-[#B87333] transition-colors">
            VIEW FULL READINESS REPORT
          </button>
        </div>
      );
    }

    if (stepIndex === 1) {
      // Step 02: Form Your Pod UI
      return (
        <div className="rounded-[2rem] overflow-hidden bg-[#F5F1EA] pt-7 pb-4 px-3.5 text-center text-[#2E2330] space-y-3 shadow-inner relative z-10 h-[430px] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#2E2330]/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333]">Verified Pod #WA-042</span>
              <span className="text-[9px] font-bold bg-[#C46A4A]/15 text-[#C46A4A] px-2 py-0.5 rounded-full">Forming</span>
            </div>

            {/* Compatibility Banner */}
            <div className="my-2.5 p-2.5 bg-[#2E2330] text-[#F5F1EA] rounded-2xl text-left flex items-center justify-between shadow-sm">
              <div>
                <span className="text-[9px] text-[#D7A27A] font-bold uppercase tracking-widest block">Vector Match</span>
                <span className="font-serif text-lg font-bold text-white">94% Aligned</span>
              </div>
              <span className="text-[9px] bg-[#C46A4A] text-white px-2 py-1 rounded-lg font-bold">Redmond 4-Plex</span>
            </div>

            {/* Matched Pod Members List */}
            <div className="space-y-1.5 text-left">
              <div className="p-2 bg-white rounded-xl border border-[#2E2330]/10 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <img src={avatarAmara} alt="Amara" className="w-6 h-6 rounded-full object-cover" />
                  <div>
                    <span className="font-bold text-[#2E2330] block leading-none">Amara S.</span>
                    <span className="text-[8px] text-[#7A746B]">Architect</span>
                  </div>
                </div>
                <span className="text-[#C46A4A] font-bold">96% Fit</span>
              </div>

              <div className="p-2 bg-white rounded-xl border border-[#2E2330]/10 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <img src={avatarDavid} alt="David" className="w-6 h-6 rounded-full object-cover" />
                  <div>
                    <span className="font-bold text-[#2E2330] block leading-none">David K.</span>
                    <span className="text-[8px] text-[#7A746B]">Healthcare</span>
                  </div>
                </div>
                <span className="text-[#B87333] font-bold">92% Fit</span>
              </div>

              <div className="p-2 bg-white rounded-xl border border-[#2E2330]/10 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-2">
                  <img src={avatarSarah} alt="Elena" className="w-6 h-6 rounded-full object-cover" />
                  <div>
                    <span className="font-bold text-[#2E2330] block leading-none">Elena & Marcus</span>
                    <span className="text-[8px] text-[#7A746B]">Educator</span>
                  </div>
                </div>
                <span className="text-[#D7A27A] font-bold">89% Fit</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA Button */}
          <button className="w-full py-2.5 rounded-xl bg-[#2E2330] text-[#F5F1EA] font-bold text-xs shadow-md hover:bg-[#C46A4A] transition-colors">
            REQUEST POD INTRODUCTION
          </button>
        </div>
      );
    }

    // Step 03: Bond in The Commons UI
    return (
      <div className="rounded-[2rem] overflow-hidden bg-[#F5F1EA] pt-7 pb-4 px-3.5 text-center text-[#2E2330] space-y-3 shadow-inner relative z-10 h-[430px] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#2E2330]/10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#B87333]">The Commons</span>
            <span className="text-[9px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Active Pod</span>
          </div>

          {/* Shared Chat Preview */}
          <div className="my-2.5 bg-white p-2.5 rounded-2xl border border-[#2E2330]/10 text-left space-y-2 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
              <span className="text-[9px] font-bold text-[#C46A4A] flex items-center gap-1">
                <MessageSquare className="w-3 h-3" /> # general-chat
              </span>
              <span className="text-[8px] text-gray-400">4 active</span>
            </div>

            <div className="flex items-start gap-2 pt-0.5">
              <img src={avatarAmara} alt="Amara" className="w-5 h-5 rounded-full object-cover mt-0.5" />
              <div className="bg-[#F5F1EA] p-2 rounded-xl text-[9.5px] leading-tight text-[#2E2330]">
                <span className="font-bold text-[#C46A4A] block mb-0.5">Amara S.</span>
                Siteplan for our 4-plex courtyard looks ready for review!
              </div>
            </div>
          </div>

          {/* Agreement Scaffolding Status */}
          <div className="bg-white p-2.5 rounded-2xl border border-[#2E2330]/10 text-left space-y-1.5">
            <span className="text-[9px] font-bold text-[#2E2330] uppercase tracking-wider block">Co-Ownership Agreement</span>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#7A746B]">Governance Terms:</span>
              <span className="font-bold text-green-600 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> 100% Agreed
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#C46A4A] h-full w-4/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <button className="w-full py-2.5 rounded-xl bg-[#C46A4A] text-white font-bold text-xs shadow-md hover:bg-[#B87333] transition-colors">
          OPEN POD DASHBOARD
        </button>
      </div>
    );
  };

  return (
    <section id="how-it-works" className="bg-white py-12 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] mb-6 leading-tight">
            Three steps to owning a home — with your community
          </h2>
          <p className="text-[#7A746B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            BOMA takes you from "I can't afford to buy alone" to "We're buying together" — with a clear, structured path every step of the way.
          </p>
        </div>

        {/* Desktop Interactive Process Showcase */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center mb-16">
          {/* Step Selectors */}
          <div className="col-span-5 space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ x: 6 }}
                  className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${isActive
                    ? 'bg-[#F5F1EA] border-[#C46A4A] shadow-md'
                    : 'bg-white border-[#2E2330]/10 hover:border-[#C46A4A]/40'
                    }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-serif text-3xl font-bold text-[#C46A4A] opacity-70">
                      {step.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B87333] flex items-center gap-1.5">
                      <IconComponent className="w-3.5 h-3.5" />
                      {step.tagline}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#7A746B] leading-relaxed line-clamp-3">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Platform Phone Mockup */}
          <div className="col-span-7 flex justify-center">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#2E2330] rounded-3xl p-8 border border-[#2E2330]/20 shadow-2xl relative w-full max-w-lg overflow-hidden"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-semibold text-[#D7A27A] uppercase tracking-wider">
                  Step {steps[activeStep].number} of 03
                </span>
                <div className="p-2 rounded-xl bg-white/10 text-[#C46A4A]">
                  {React.createElement(steps[activeStep].icon, { className: "w-5 h-5" })}
                </div>
              </div>

              {/* Phone Mockup Frame with Authentic BOMA Platform UI */}
              <div className="w-64 mx-auto bg-[#1A141C] rounded-[2.4rem] p-2.5 shadow-2xl border-2 border-white/15">
                {renderStepPhoneScreen(activeStep)}
              </div>

              <div className="mt-6 text-center">
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="text-xs text-white/70 max-w-sm mx-auto">
                  {steps[activeStep].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#F5F1EA] rounded-3xl p-6 sm:p-8 border border-[#2E2330]/10 flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-serif text-4xl font-bold text-[#C46A4A]">{step.number}</span>
                  <div className="p-2.5 rounded-xl bg-[#2E2330] text-[#D7A27A]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B87333] mb-2">
                  {step.tagline}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-[#7A746B] leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="w-60 bg-[#1A141C] rounded-[2.4rem] p-2.5 shadow-xl border border-white/10 text-left">
                  {renderStepPhoneScreen(idx)}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <CTAButton size="lg" variant="primary">
            Start Step 01: Village Test
          </CTAButton>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
