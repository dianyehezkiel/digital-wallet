"use client"
import { Rubik } from '@next/font/google';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { UserIcon } from '@heroicons/react/24/outline'
import './globals.css';
import { classNames, mainMenus, otherMenus } from '../lib';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

const rubik = Rubik();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(pathname);

  return (
    <html lang="en" className={`bg-base-300 ${rubik.className}`}>
      <body className="flex">
        {/* Sidebar */}
        <div className="flex flex-col flex-shrink-0 h-screen pt-4">
          {/* Profile Info */}
          <div className="flex flex-shrink-0 gap-4 items-center px-6 py-4 border-b-2 border-b-base-100">
            <Link href="/">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center w-10 h-10 bg-accent rounded-full">
                  <UserIcon className='w-6 h-6' />
                </div>
                <div className="flex flex-col gap-2 w-40">
                  <p className="font-medium leading-none line-clamp-1">
                    Dian Yehezkiel
                  </p>
                  <p className="text-xs leading-none line-clamp-1 text-gray-400">
                    example@email.com
                  </p>
                </div>
              </div>
            </Link>
            <button className="btn btn-square btn-sm btn-ghost hover:bg-base-100 rounded-xl border-2 border-base-100">
              <ChevronDownIcon className='w-4 h-4' />
            </button>
          </div>
          <div className='overflow-y-auto'>
            {/* Menu */}
            <div>
              <p className='px-6 py-4 text-gray-400'>Menu</p>
              <nav>
                {mainMenus.map(({name, route, displayName, displayIcon: Icon, color}) => (
                  <Link onClick={() => setCurrentPage(route)} key={name} href={route} scroll={false}>
                    <div className={classNames('flex gap-4 px-6 py-4 border-l-2', color.border, currentPage === route ? 'bg-base-100' : 'text-gray-400 border-l-transparent')}>
                      <div className={classNames('w-8 h-8 rounded-xl p-2', color.bg)}>
                        <Icon className='w-4 h-4 fill-base-content' />
                      </div>
                      <p className='leading-8'>{displayName}</p>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
            {/* Other Menu */}
            <div>
              <p className='px-6 py-4 text-gray-400'>Other Menu</p>
              <nav>
                {otherMenus.map(({name, route, displayName, displayIcon: Icon, color}) => (
                  <Link onClick={() => setCurrentPage(route)} key={name} href={route} scroll={false}>
                    <div className={classNames('flex gap-4 px-6 py-4 border-l-2', color.border, currentPage === route ? 'bg-base-100' : 'text-gray-400 border-l-transparent')}>
                      <div className={classNames('w-8 h-8 rounded-xl p-2', color.bg)}>
                        <Icon className='w-4 h-4 fill-base-content' />
                      </div>
                      <p className='leading-8'>{displayName}</p>
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex-grow p-8 bg-base-100 rounded-tl-3xl">
          {children}
        </div>
      </body>
    </html>
  );
}
