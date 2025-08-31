import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { IntroductionSection } from '../components/sections/IntroductionSection';
import { WhatIsContextSection } from '../components/sections/WhatIsContextSection';
import { WhatIsContextEngineeringSection } from '../components/sections/WhatIsContextEngineeringSection';
import { WhyContextEngineeringSection } from '../components/sections/WhyContextEngineeringSection';
import { CoreFrameworkSection } from '../components/sections/CoreFrameworkSection';
import { AdvancedStrategiesSection } from '../components/sections/AdvancedStrategiesSection';
import { ConclusionSection } from '../components/sections/ConclusionSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <IntroductionSection />
        <WhatIsContextSection />
        <WhatIsContextEngineeringSection />
        <WhyContextEngineeringSection />
        <CoreFrameworkSection />
        <AdvancedStrategiesSection />
        <ConclusionSection />
      </main>

      <Footer />
    </div>
  );
};
