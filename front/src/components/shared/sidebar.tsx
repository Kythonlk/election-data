import DashboardNav from '@/components/shared/dashboard-nav';
import { navItems, siItems } from '@/constants/data';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { ChevronsLeft } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/components/layout/lang-ctx';

export default function Sidebar({ className }: { className?: string }) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);
  const { language, switchLanguage } = useLanguage();

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <nav
      className={cn(
        `relative z-10 hidden h-screen flex-none px-3 md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-72' : 'w-[80px]',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center px-0 py-5 md:px-2',
          isMinimized ? 'justify-center ' : 'justify-between'
        )}
      >
        {!isMinimized && (
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">
              {language ? 'ශ්‍රී ලංකා' : 'Sri Lnaka'} 2024
            </h1>
            <h1 className="text-lg font-bold">
              {language ? 'ජනාධිපතිවරණය' : 'Presidential election'}
            </h1>
          </div>
        )}
        <ChevronsLeft
          className={cn(
            'size-8 cursor-pointer rounded-full border bg-background text-foreground',
            isMinimized && 'rotate-180'
          )}
          onClick={handleToggle}
        />
      </div>
      {!isMinimized && (
        <div className="grid h-10 w-full grid-cols-2 items-center justify-center rounded-md bg-gray-200 p-1 text-gray-700 text-muted-foreground">
          <button
            onClick={() => switchLanguage(false)}
            className={cn(
              'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium',
              !language ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
            )}
          >
            {language ? 'English' : 'English'}
          </button>
          <button
            onClick={() => switchLanguage(true)}
            className={cn(
              'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium',
              language ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
            )}
          >
            {language ? 'සිංහල' : 'සිංහල'}
          </button>
        </div>
      )}
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={language ? siItems : navItems} />
          </div>
        </div>
      </div>
      {!isMinimized && (
        <a
          className="absolute bottom-10 left-10"
          href="https://github.com/kythonlk"
        >
          Dev by <span className="underline">Kythonlk</span>
        </a>
      )}
    </nav>
  );
}
