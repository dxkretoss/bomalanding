import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, ArrowRight, ArrowLeft, ShieldCheck, Building2, Users, 
  Trash2, Globe, Building, RefreshCw, Sprout, Award, DoorOpen, Handshake,
  CheckCircle2, Landmark, FileText, Search, HardHat, PenTool, Briefcase, Shield, Home
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

export const PartnersPage = () => {
  return (
    <div className="bg-[#F5F1EA] text-[#2E2330]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#2E2330] text-[#F5F1EA] pt-36 pb-28 lg:pt-44 lg:pb-36 overflow-hidden data-theme='dark'">
        {/* Glow & Texture */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#B87333]/20 via-[#C46A4A]/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grain-dark opacity-30 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#F5F1EA]/10 border border-[#F5F1EA]/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#B87333] animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F5F1EA]/90">
              For Municipalities, Lenders, Developers & Vendors
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8 text-[#F5F1EA]"
          >
            The infrastructure is here.<br />
            <span className="text-[#C46A4A] italic font-normal">The category is coming.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#F5F1EA]/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10 font-light"
          >
            Collaborative homeownership is not an alternative housing trend. It is the emergence of an entirely new asset class — and the infrastructure to scale it is being built right now.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:hello@boma-living.com?subject=Institutional%20Partnership%20Inquiry"
              className="inline-flex items-center gap-2.5 bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold px-8 py-4 rounded-full text-sm shadow-xl hover:shadow-[#C46A4A]/30 transition-all duration-300 transform active:scale-95 group"
            >
              <span>Partner with BOMA</span>
              <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Architectural Bottom Curve Separator */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none">
          <svg className="relative block w-full h-12 text-[#F5F1EA]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. A NEW ERA SECTION */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel>A New Era</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] mb-6 leading-tight">
              Housing has reached a structural dead end. BOMA is the way through.
            </h2>
            <p className="text-[#7A746B] text-lg leading-relaxed">
              For decades, homeownership assumed one model: one buyer, one mortgage, one home. That assumption has broken.
            </p>
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="font-serif text-5xl font-bold text-[#C46A4A]/20 mb-4 leading-none">01</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B87333] mb-2 block">Historical Context</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4 leading-snug">Shared equity has always existed</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">
                  Humans have co-owned land and housing for thousands of years. What disappeared was the modern software, legal framework, and risk-management infrastructure to do it at scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="font-serif text-5xl font-bold text-[#C46A4A]/20 mb-4 leading-none">02</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B87333] mb-2 block">Market Shift</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4 leading-snug">A new generation of real estate investors</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">
                  Millennials and Gen Z aren't waiting for housing costs to fall. They are actively seeking collaborative ownership models — they just need a trusted platform to de-risk the process.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="font-serif text-5xl font-bold text-[#C46A4A]/20 mb-4 leading-none">03</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B87333] mb-2 block">Governance Engine</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4 leading-snug">Community built on emotional maturity</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">
                  BOMA's Village Test screens for values, financial readiness, and communication style — ensuring every Pod starts with high social alignment before legal commitments are made.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Split Block: Why This Matters + Institutional Stats */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-12 border border-[#2E2330]/10 shadow-sm space-y-4">
              <h3 className="font-serif text-3xl font-bold text-[#2E2330] leading-snug mb-4">
                Why this matters for institutional partners
              </h3>
              <p className="text-[#7A746B] text-sm sm:text-base leading-relaxed">
                Single-occupancy homebuying is shrinking. Co-buying is already happening informally — through un-structured loans, family handshakes, and risky LLCs.
              </p>
              <p className="text-[#7A746B] text-sm sm:text-base leading-relaxed">
                BOMA turns an informal, high-friction behavior into a standardized, tech-enabled, bankable product.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#2E2330] text-[#F5F1EA] rounded-3xl p-8 sm:p-12 border border-[#E7DED0]/10 shadow-2xl flex flex-col justify-between relative overflow-hidden data-theme='dark'">
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D7A27A] flex-shrink-0 min-w-[100px]">$1.2T+</span>
                  <p className="text-[#F5F1EA]/80 text-sm leading-relaxed pt-1">Total addressable demand in untapped collaborative home equity nationwide.</p>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D7A27A] flex-shrink-0 min-w-[100px]">4.2x</span>
                  <p className="text-[#F5F1EA]/80 text-sm leading-relaxed pt-1">Higher default resistance on co-owned multi-borrower residential mortgages.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D7A27A] flex-shrink-0 min-w-[100px]">100%</span>
                  <p className="text-[#F5F1EA]/80 text-sm leading-relaxed pt-1">Vetted legal scaffolding and pre-arranged buy-out governance protocols.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. MARKET OPPORTUNITY SECTION */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden border-t border-[#2E2330]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel>Market Opportunity</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] mb-6 leading-tight">
              A untapped asset class waiting for infrastructure
            </h2>
            <p className="text-[#7A746B] text-lg leading-relaxed">
              Institutional partners who move early will define the terms of a market that is guaranteed to grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#F5F1EA] rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C46A4A] bg-[#C46A4A]/10 px-3 py-1 rounded-full border border-[#C46A4A]/20 mb-4 inline-block">For Lenders</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4 leading-snug">Lower-risk, higher-volume loan origination</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed mb-6">
                  Pod-backed loans spread debt across multiple credit-verified borrowers, dramatically reducing default risk while expanding your mortgage origination pipeline into priced-out demographics.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2E2330]/10">
                <a
                  href="mailto:hello@boma-living.com?subject=Lending%20Partnership%20Inquiry"
                  className="text-[#2E2330] font-bold text-sm hover:text-[#C46A4A] transition-colors flex items-center gap-1.5"
                >
                  <span>Inquire now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-[#F5F1EA] rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C46A4A] bg-[#C46A4A]/10 px-3 py-1 rounded-full border border-[#C46A4A]/20 mb-4 inline-block">For Developers</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4 leading-snug">Pre-sold multi-unit developments</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed mb-6">
                  BOMA matches Pods before ground is broken. Partner developers gain access to fully aligned, pre-funded buyer groups ready to contract on 3-plexes, 4-plexes, and pocket neighborhoods.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2E2330]/10">
                <a
                  href="mailto:hello@boma-living.com?subject=Developer%20Partnership%20Inquiry"
                  className="text-[#2E2330] font-bold text-sm hover:text-[#C46A4A] transition-colors flex items-center gap-1.5"
                >
                  <span>Inquire now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#F5F1EA] rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C46A4A] bg-[#C46A4A]/10 px-3 py-1 rounded-full border border-[#C46A4A]/20 mb-4 inline-block">For Real Estate Pros</span>
                <h3 className="font-serif text-2xl font-bold text-[#2E2330] mb-4 leading-snug">Luxury mansions at Pod scale</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed mb-6">
                  Access higher-tier inventory by presenting luxury multi-unit compounds and large acreage properties to pre-formed, capital-pooled buyer pods represented exclusively through BOMA.
                </p>
              </div>
              <div className="pt-4 border-t border-[#2E2330]/10">
                <a
                  href="mailto:hello@boma-living.com?subject=Vendor%20Network%20Inquiry"
                  className="text-[#2E2330] font-bold text-sm hover:text-[#C46A4A] transition-colors flex items-center gap-1.5"
                >
                  <span>Inquire now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quote Block */}
          <div className="bg-[#2E2330] text-[#F5F1EA] rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-xl border border-[#E7DED0]/10 data-theme='dark'">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1EA] leading-snug mb-4 max-w-3xl mx-auto">
              "Collaborative ownership isn't about compromising on housing — it's about pooling buying power to access a standard of living no single buyer could reach alone."
            </p>
            <p className="text-[#D7A27A] text-sm font-medium">
              BOMA Thesis on Co-ownership Dynamics
            </p>
          </div>

        </div>
      </section>

      {/* 4. THE BOMA DIFFERENCE */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#F5F1EA]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel>The BOMA Difference</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] mb-6 leading-tight">
              Built for long-term stability, not short-term speculation
            </h2>
            <p className="text-[#7A746B] text-lg leading-relaxed">
              BOMA is designed from the ground up to create durable, human-centered housing communities.
            </p>
          </div>

          {/* 4 Grid Items */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex gap-5 items-start">
              <div className="p-3.5 rounded-2xl bg-[#2E2330] text-[#D7A27A] flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2E2330] text-lg mb-2">Risk Reduction & Financial Stability</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">Multiple income streams backing each property create unparalleled default resilience compared to traditional single-family debt structures.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex gap-5 items-start">
              <div className="p-3.5 rounded-2xl bg-[#2E2330] text-[#D7A27A] flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2E2330] text-lg mb-2">Safer & Connected Neighborhoods</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">Intentional communities foster built-in social safety nets, shared childcare, and long-term residency that stabilizes local neighborhoods.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex gap-5 items-start">
              <div className="p-3.5 rounded-2xl bg-[#2E2330] text-[#D7A27A] flex-shrink-0">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2E2330] text-lg mb-2">Construction Waste Reduction</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">Co-owned multi-unit compounds minimize sprawl and optimize material efficiency, reducing overall residential carbon footprint.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#2E2330]/10 shadow-sm flex gap-5 items-start">
              <div className="p-3.5 rounded-2xl bg-[#2E2330] text-[#D7A27A] flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#2E2330] text-lg mb-2">Green Living & Resource Efficiency</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed">Shared tools, communal green space, and integrated solar/microgrid capabilities make sustainable living effortless and cost-effective.</p>
              </div>
            </div>
          </div>

          {/* Thesis Footer */}
          <div className="bg-gradient-to-br from-[#E7DED0] to-[#F5F1EA] rounded-3xl p-10 sm:p-14 text-center border border-[#2E2330]/15 shadow-md">
            <p className="font-serif text-2xl sm:text-3xl text-[#2E2330] font-bold leading-snug mb-4 max-w-2xl mx-auto">
              "We aren't disrupting real estate — we're providing the missing operational layer that enables housing to function humanely again."
            </p>
            <p className="text-[#C46A4A] text-sm font-semibold tracking-wider uppercase">
              BOMA Founding Thesis
            </p>
          </div>

        </div>
      </section>

      {/* 5. MUNICIPAL & GOVERNMENT PARTNERSHIPS */}
      <section className="bg-[#2E2330] py-24 md:py-32 text-[#F5F1EA] relative overflow-hidden data-theme='dark'">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel light>Municipalities & Government</SectionLabel>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-[#F5F1EA]">
                Unlocking housing density without displacement
              </h2>
              <p className="text-[#F5F1EA]/80 text-base leading-relaxed">
                Cities are searching for workforce housing solutions that don't rely on endless taxpayer subsidies. BOMA enables middle-income residents to pool equity and buy locally without developer gentrification.
              </p>
              <p className="text-[#F5F1EA]/80 text-base leading-relaxed">
                We work directly with city planners, housing authorities, and land trust nonprofits to deploy BOMA Pod matching for target demographic initiatives.
              </p>
            </div>

            {/* 6 Sector Cards */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-[#B87333]/20 text-[#D7A27A] flex-shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Workforce Housing</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed">Teachers, nurses, and municipal staff co-buying locally.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-[#B87333]/20 text-[#D7A27A] flex-shrink-0">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Generational Renters</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed">Transitioning long-term renters into equity ownership.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-[#B87333]/20 text-[#D7A27A] flex-shrink-0">
                  <Sprout className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Sober & Supportive Living</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed">Structured, co-owned recovery community housing.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-[#B87333]/20 text-[#D7A27A] flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Veterans Communities</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed">Peer-aligned shared ownership compounds for veterans.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-[#B87333]/20 text-[#D7A27A] flex-shrink-0">
                  <DoorOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Re-entry & Returning Citizens</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed">Stable housing pathways for re-entering individuals.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex gap-3 items-start">
                <div className="p-2 rounded-xl bg-[#B87333]/20 text-[#D7A27A] flex-shrink-0">
                  <Handshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-1">Nonprofit Land Trusts</h4>
                  <p className="text-white/60 text-[11px] leading-relaxed">Integrating BOMA software into CLT governance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Bottom Pillars */}
          <div className="border-t border-white/10 pt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-[#F5F1EA]">Housing Authorities</h4>
              <p className="text-white/60 text-xs leading-relaxed">Inquire about city pilot programs and municipal partnerships.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-[#F5F1EA]">Direct Contact</h4>
              <a
                href="mailto:hello@boma-living.com?subject=Governmental%20Partnership%20Inquiry"
                className="text-[#D7A27A] font-bold text-sm hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>hello@boma-living.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-xl font-bold text-[#F5F1EA]">Policy & Research</h4>
              <p className="text-white/60 text-xs leading-relaxed">Collaborate on co-ownership zoning policy whitepapers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. VENDOR NETWORK SECTION */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionLabel>BOMA Vendor Network</SectionLabel>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] mb-6 leading-tight">
              Vetted professionals powering collaborative transactions
            </h2>
            <p className="text-[#7A746B] text-lg leading-relaxed">
              BOMA Pods require specialized service providers who understand multi-borrower deals and shared governance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* For Pods Card */}
            <div className="bg-[#F5F1EA] rounded-3xl p-8 sm:p-10 border border-[#2E2330]/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C46A4A] mb-3 block">For Buyers & Pods</span>
                <h3 className="font-serif text-3xl font-bold text-[#2E2330] mb-4 leading-snug">Confidence at every transaction stage</h3>
                <p className="text-[#7A746B] text-sm leading-relaxed mb-6">
                  Every Pod gains direct access to BOMA-certified attorneys, specialized lenders, modular builders, and agents trained in co-ownership structures.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#2E2330]">
                    <CheckCircle2 className="w-4 h-4 text-[#C46A4A] flex-shrink-0" />
                    <span>Pre-vetted co-ownership legal scaffolding</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#2E2330]">
                    <CheckCircle2 className="w-4 h-4 text-[#C46A4A] flex-shrink-0" />
                    <span>Specialized fractional mortgage lenders</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#2E2330]">
                    <CheckCircle2 className="w-4 h-4 text-[#C46A4A] flex-shrink-0" />
                    <span>Modular & ADU construction partners</span>
                  </div>
                </div>
              </div>
            </div>

            {/* For Vendors Card */}
            <div className="bg-[#2E2330] text-[#F5F1EA] rounded-3xl p-8 sm:p-10 border border-[#E7DED0]/10 shadow-2xl flex flex-col justify-between data-theme='dark'">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D7A27A] mb-3 block">For Service Providers</span>
                <h3 className="font-serif text-3xl font-bold text-white mb-4 leading-snug">Join the BOMA certified vendor directory</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Are you an attorney, lender, agent, architect, or contractor? Join BOMA's verified partner network to receive qualified Pod clients in your region.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#F5F1EA]">
                    <CheckCircle2 className="w-4 h-4 text-[#D7A27A] flex-shrink-0" />
                    <span>High-intent, pre-aligned buyer groups</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#F5F1EA]">
                    <CheckCircle2 className="w-4 h-4 text-[#D7A27A] flex-shrink-0" />
                    <span>Standardized legal & closing templates</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#F5F1EA]">
                    <CheckCircle2 className="w-4 h-4 text-[#D7A27A] flex-shrink-0" />
                    <span>Exclusive regional directory listing</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="mailto:hello@boma-living.com?subject=Vendor%20Network%20Application"
                  className="inline-flex items-center gap-2 bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold px-8 py-4 rounded-full text-sm shadow-xl transition-all duration-300"
                >
                  <span>Apply to Vendor Network</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Vendor Category Pills */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#7A746B] mb-6">
              Vendor categories in the BOMA network
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <Home className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Real Estate Agents</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <Landmark className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Mortgage Brokers & Lenders</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <FileText className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Real Estate Attorneys</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <Search className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Home Inspectors</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <HardHat className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">General Contractors</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <PenTool className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Architects & Designers</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <Briefcase className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Title Companies</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#F5F1EA] border border-[#2E2330]/10 rounded-full px-5 py-2.5 shadow-xs">
                <Shield className="w-4 h-4 text-[#C46A4A]" />
                <span className="text-[#2E2330] text-xs font-semibold">Insurance Providers</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL PARTNERSHIP CTA */}
      <section className="bg-[#F5F1EA] py-20 md:py-28 relative overflow-hidden border-t border-[#2E2330]/10 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] leading-tight">
            Ready to shape the future of collaborative housing?
          </h2>
          <p className="text-[#7A746B] text-base sm:text-lg leading-relaxed">
            Get in touch with the BOMA leadership team to discuss lending, development, municipal pilots, or vendor network integration.
          </p>
          <div>
            <a
              href="mailto:hello@boma-living.com?subject=Partnership Inquiry"
              className="inline-flex items-center gap-2.5 bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold px-9 py-4 rounded-full text-base shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>hello@boma-living.com</span>
            </a>
          </div>
          <div className="pt-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A746B] hover:text-[#2E2330] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to BOMA Living Home</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PartnersPage;
