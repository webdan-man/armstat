import React from 'react';
import Sidebar from '@/components/stat/Sidebar';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-center">
      {children}
      <Footer />
    </div>
  );
}
