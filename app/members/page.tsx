import { MembersPageClient } from './MembersPageClient';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AdvisorSection } from '@/components/AdvisorSection';

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#0f2a40] text-white">
      <Navbar />
      <div className="pt-16">
        <AdvisorSection />
      </div>
      <MembersPageClient />
      <Footer />
    </main>
  );
}
