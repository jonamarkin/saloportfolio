import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Salome Ayitey | Economist & PhD Researcher',
  description: 'Portfolio of Salome Ayitey, a strategy-minded economist combining corporate banking experience with advanced quantitative research.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[#F9F8F6] text-[#1A1A1A] antialiased selection:bg-[#5A5A40] selection:text-white" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
