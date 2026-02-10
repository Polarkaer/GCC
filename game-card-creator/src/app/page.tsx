'use client';

import { CardForm } from '@/components/CardForm';
import { CardPreview } from '@/components/CardPreview';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-6 p-6 bg-white dark:bg-black">
      {/* Left Panel: Settings Form */}
      <div className="overflow-auto">
        <CardForm />
      </div>

      {/* Right Panel: Preview */}
      <div className="hidden lg:block sticky top-6 max-h-[calc(100vh-48px)]">
        <CardPreview />
      </div>

      {/* Mobile Preview */}
      <div className="lg:hidden col-span-1">
        <CardPreview />
      </div>
    </div>
  );
}
