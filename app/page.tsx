import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { SemesterTimeline } from '@/components/SemesterTimeline';
import { AdvisorSection } from '@/components/AdvisorSection';
import { EventSection } from '@/components/EventSection';
import { MemoriesSection } from '@/components/MemoriesSection';
import { BlogAchievementsSection } from '@/components/BlogAchievementsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { HomePopupController } from '@/components/HomePopupController';

export default function Home() {
  return (
    <main className="font-sans antialiased text-white">
      <HomePopupController />
      <Navbar />
      <HeroSection />
      <SemesterTimeline />
      <AdvisorSection />
      <EventSection />
      <MemoriesSection />
      <BlogAchievementsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
