import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Noto_Sans_Armenian } from 'next/font/google';
import { SWRProvider } from '@/providers/SWRProvider';

import React from 'react';
import Header from '@/components/Header';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

const notoArmenian = Noto_Sans_Armenian({
  subsets: ['armenian'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Armstat',
  description: 'Statistics platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
        style={{ '--font-arm': notoArmenian.style.fontFamily } as React.CSSProperties}
      >
        <SWRProvider>
          <div className="flex min-h-screen items-center justify-center bg-lightTone1  dark:bg-black">
            <main className="flex min-h-screen w-full flex-col">
              <Header />
              {children}
            </main>
          </div>
        </SWRProvider>
      </body>
    </html>
  );
}
