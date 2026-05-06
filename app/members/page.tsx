import { MembersPageClient } from './MembersPageClient';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#0f2a40] text-white">
      <Navbar />
      <MembersPageClient />
      <Footer />
    </main>
  );
}
