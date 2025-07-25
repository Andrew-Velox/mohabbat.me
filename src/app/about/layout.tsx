import { Metadata } from 'next';
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: 'About - Andrew-Velox',
  description: 'Learn more about Andrew-Velox - Staff Engineer and Computer Science student',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen pb-16 flex items-center justify-center">
        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6 sm:gap-8 relative z-20">
          <Navbar />
          {children}
        </main>
      </div>
    </div>
  );
}
