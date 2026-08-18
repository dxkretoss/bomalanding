import React from 'react';
import HeroSection from '../sections/HeroSection';
import ProblemSection from '../sections/ProblemSection';
import FounderQuote from '../sections/FounderQuote';
import HowItWorksSection from '../sections/HowItWorksSection';
import VillageTestSection from '../sections/VillageTestSection';
import PodMatchingSection from '../sections/PodMatchingSection';
import CommonsSection from '../sections/CommonsSection';
import JoinPathsSection from '../sections/JoinPathsSection';
import WhoItsForSection from '../sections/WhoItsForSection';
import ArchitectureShowcase from '../sections/ArchitectureShowcase';
import FirstStepCTA from '../sections/FirstStepCTA';
import WaitlistSection from '../sections/WaitlistSection';
import FAQSection from '../sections/FAQSection';
import FinalCTASection from '../sections/FinalCTASection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FounderQuote />
      <HowItWorksSection />
      <VillageTestSection />
      <PodMatchingSection />
      <CommonsSection />
      <JoinPathsSection />
      <ArchitectureShowcase />

      <WhoItsForSection />
      <FirstStepCTA />
      <WaitlistSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;
