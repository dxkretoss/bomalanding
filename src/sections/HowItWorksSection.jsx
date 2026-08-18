import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, Home } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import CTAButton from '../components/CTAButton';

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      icon: Compass,
      tagline: "Discover your readiness",
      title: "Take the Village Test",
      description: "Answer questions about your lifestyle, values, finances, and vision for community living. BOMA's Readiness Engine scores your collaborative homeownership readiness and helps you understand what kind of co-owner you'd be.",
      image: "https://us.chat-img.sintra.ai/3b33d428-1b6b-4834-9265-bc5b98695208/491a46c6-c3a1-43c6-a466-d78b50addea3/IMG_3371.jpeg"
    },
    {
      number: "02",
      icon: Users,
      tagline: "Meet your matched co-buyers",
      title: "Form Your Pod",
      description: "BOMA matches you with a compatible community based on your values, financial readiness, governance preferences, and shared vision — not just who you already know. Your Pod is a small, aligned group ready to buy together.",
      image: "https://us.chat-img.sintra.ai/3b33d428-1b6b-4834-9265-bc5b98695208/c0dcec62-eb3e-43cb-9e3e-cc628a8a9802/IMG_3375.jpeg"
    },
    {
      number: "03",
      icon: Home,
      tagline: "Build trust before you build anything",
      title: "Bond in The Commons",
      description: "Your Pod gets a shared dashboard, agreement scaffolding, and a space to communicate — so you can genuinely get to know each other before any money, land, or legal commitments enter the picture. Land, financing, and construction come in Phase 2.",
      image: "https://us.chat-img.sintra.ai/3b33d428-1b6b-4834-9265-bc5b98695208/f43eba92-dc19-4fe9-a1e1-5264b55f1d5b/IMG_3374.jpeg"
    }
  ];

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
                  className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isActive
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
              <div className="w-60 mx-auto bg-[#1A141C] rounded-[2.4rem] p-2 shadow-2xl border-2 border-white/15">
                <div className="rounded-[2rem] overflow-hidden h-[420px] relative bg-[#2E2330]">
                  <img
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover object-top filter brightness-105"
                  />
                  {/* Glassmorphic UI Header Overlay */}
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#2E2330]/90 to-transparent p-4 text-center">
                    <span className="text-[10px] font-mono tracking-widest text-[#D7A27A] uppercase font-bold">
                      BOMA LIVING APP
                    </span>
                  </div>
                </div>
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
                <div className="w-52 bg-[#2E2330] rounded-[2.2rem] p-2 shadow-xl border border-white/10">
                  <div className="rounded-[1.8rem] overflow-hidden h-[360px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
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
