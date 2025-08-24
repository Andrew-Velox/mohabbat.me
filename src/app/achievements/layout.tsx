'use client';

import Navbar from '../../components/Navbar';

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-white dark:bg-gray-900">
      <main className="min-h-screen px-2 sm:px-4 py-8 pb-24">
        <div className="w-full flex flex-col gap-6 sm:gap-8 relative z-20">
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
}
