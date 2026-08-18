import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Leaf, Users, Laptop, Palette } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

export const WhoItsForSection = () => {
  const categories = [
    {
      icon: GraduationCap,
      category: "Locked-Out Professionals",
      headline: "You earn enough. You just can't buy alone.",
      description: "Teachers, nurses, social workers, and creatives pool buying power with an aligned community to achieve homeownership.",
      tags: ["Stable income", "Priced out solo", "Wants stability + community"],
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Leaf,
      category: "Intentional Living Seekers",
      headline: "You want more than a mortgage. You want a way of life.",
      description: "Cohousing, shared land, sustainability, and multi-family living structured with a compatible community that shares your vision.",
      tags: ["Cohousing interest", "Sustainability-focused", "Values-driven living"],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Users,
      category: "Multi-Generational Families",
      headline: "Family support systems built into where you live.",
      description: "Aging parents, adult siblings, or extended family planning shared compounds and co-owned properties to keep family close.",
      tags: ["Family planning", "Aging-in-place", "Shared land goals"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Laptop,
      category: "Remote & Flexible Workers",
      headline: "You're rethinking where — and how — you live.",
      description: "Remote workers seeking land, slower living, and a real sense of belonging without city commutes and isolation.",
      tags: ["Location-flexible", "Seeking community", "Rethinking city life"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Palette,
      category: "Alternative & Creative",
      headline: "Your lifestyle is specific. Your community should be too.",
      description: "Artists, musicians, gamers, and creative households finding a community that genuinely shares your world without judgment.",
      tags: ["Alternative lifestyles", "Creative communities", "Values-first matching"],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="who" className="bg-[#F5F1EA] py-12 md:py-16 relative overflow-hidden border-t border-[#2E2330]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <SectionLabel>Who It's For</SectionLabel>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2E2330] mb-6 leading-tight">
            If you can imagine the community, BOMA can help you build it
          </h2>
          <p className="text-[#7A746B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            BOMA's matching works for any intentional group — conventional or not. You don't have to fit a mold. You just have to know what you value and be open to building something real with a community that shares it.
          </p>
        </div>

        {/* 5-Category Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#2E2330]/10 shadow-sm hover:shadow-xl hover:border-[#C46A4A]/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Architectural Image Card Header */}
                <div className="relative h-52 overflow-hidden bg-[#2E2330]">
                  <img
                    src={cat.image}
                    alt={cat.category}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2E2330]/80 via-transparent to-[#2E2330]/40" />

                  {/* Top Image Badge & Icon Bar (Single Line Guaranteed via whitespace-nowrap) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <div className="p-2.5 rounded-2xl bg-[#2E2330]/80 backdrop-blur-md border border-white/20 text-[#D7A27A] flex-shrink-0 shadow-md">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#D7A27A] bg-[#2E2330]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 whitespace-nowrap shadow-md">
                      {cat.category}
                    </span>
                  </div>
                </div>

                {/* Editorial Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2E2330] leading-snug mb-3 group-hover:text-[#C46A4A] transition-colors">
                      {cat.headline}
                    </h3>
                    <p className="text-sm text-[#7A746B] leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2E2330]/10">
                    {cat.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium bg-[#F5F1EA] text-[#2E2330] px-3 py-1 rounded-full border border-[#2E2330]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote Statement */}
        <div className="text-center max-w-xl mx-auto pt-6">
          <p className="text-xs sm:text-sm text-[#7A746B] font-medium italic">
            "BOMA is built on collaboration, shared agreements, and long-term thinking. It's not the right fit for everyone — and that's intentional."
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhoItsForSection;
