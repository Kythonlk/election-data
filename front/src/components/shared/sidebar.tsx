'use client';
import DashboardNav from '@/components/shared/dashboard-nav';
import { navItems } from '@/constants/data';
import { useSidebar } from '@/hooks/use-sidebar';
import { cn } from '@/lib/utils';
import { ChevronsLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);
  const [language, setLanguage] = useState<boolean>(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  const switchLanguage = (lang: boolean) => {
    setLanguage(lang);
  };

  useEffect(() => {
    document.cookie = `lang=${language ? 'si' : 'en'}; path=/;`;
  }, [language]);

  return (
    <nav
      className={cn(
        `relative z-10 hidden h-screen flex-none  px-3 md:block`,
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
        {!isMinimized && <h1 className="text-2xl font-bold">Election 2024</h1>}
        <ChevronsLeft
          className={cn(
            'size-8 cursor-pointer rounded-full border bg-background text-foreground',
            isMinimized && 'rotate-180'
          )}
          onClick={handleToggle}
        />
      </div>
      <div className="h-10 items-center justify-center rounded-md bg-gray-200 text-gray-700 p-1 text-muted-foreground grid w-full grid-cols-2">
        <button
          onClick={() => switchLanguage(false)} 
          className={cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium',
            !language ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
          )}
        >
          English
        </button>
        <button
          onClick={() => switchLanguage(true)}
          className={cn(
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium',
            language ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'
          )}
        >
          Sinhala
        </button>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
      <a className='absolute bottom-10 left-10' href='https://github.com/kythonlk'>
        Dev by <span className='underline'>Kythonlk</span>
      </a>
    </nav>
  );
}
