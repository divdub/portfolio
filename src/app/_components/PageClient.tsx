'use client';

import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { ExperienceTimeline } from './ExperienceTimeline';
import { EducationSection } from './EducationSection';
import { CompetitiveProgrammingSection } from './CompetitiveProgrammingSection';
import { FeaturedProjects } from './FeaturedProjects';
import { ContactCta } from './ContactCta';

const PageClient = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BentoGrid />
      <ExperienceTimeline />
      <EducationSection />
      <CompetitiveProgrammingSection />
      <FeaturedProjects />
      <ContactCta />
    </div>
  );
};

export { PageClient };
