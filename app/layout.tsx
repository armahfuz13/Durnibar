import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Durnibar 06 | EdTE',
  description: 'University of Frontier Technology, Bangladesh - Department of Educational Technology and Engineering, Batch 2023-24',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="bg-[#0f2a40] text-gray-100 font-sans min-h-screen overflow-x-hidden selection:bg-[#e60046] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
