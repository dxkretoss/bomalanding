import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Sparkles } from 'lucide-react';

export const FounderQuote = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden border-y border-[#2E2330]/10">

      {/* FULL-WIDTH SECTION BACKGROUND: Authentic BOMA Co-Ownership Residential Compound */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920"
          alt="BOMA Living Authentic Community Home Compound"
          className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.08]"
        />
        {/* Soft Section Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-[#2E2330]/45 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />
      </div>

      {/* SECTION CONTENT CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative bg-[#F5F1EA]/95 backdrop-blur-md rounded-3xl p-8 sm:p-14 md:p-16 border-2 border-[#2E2330]/15 shadow-2xl text-[#2E2330]"
        >
          {/* Subtle Decorative Editorial Quote Mark */}
          <div className="absolute top-6 left-8 text-[#C46A4A] opacity-20 text-8xl font-serif select-none pointer-events-none">
            “
          </div>

          <div className="relative z-10 space-y-6">
            <Quote className="w-10 h-10 text-[#C46A4A] opacity-90" />

            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2E2330] leading-snug max-w-3xl">
              "I spent <span className="text-[#C46A4A] italic font-normal">30 years</span> watching people rent who never had to. No one ever handed them a different tool. BOMA is that tool."
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#2E2330]/15">
              <div>
                <h4 className="font-bold text-[#2E2330] text-lg font-serif">Hether Morgan</h4>
                <p className="text-[#7A746B] text-sm font-medium">Founder, BOMA Living — 30 years in rental housing</p>
              </div>

              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 text-[#C46A4A] text-sm font-semibold hover:text-[#2E2330] transition-colors group"
              >
                <span>The bigger vision →</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default FounderQuote;
