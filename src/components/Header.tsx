'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TypographyH1 } from '@/components/ui/typography';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const items = [
  {
    title: 'Կատալոգ',
    href: '/',
  },
  {
    title: 'Հրապարակումներ',
    href: '/blog',
  },
  {
    title: 'Իրավական ակտեր',
    href: '/legal-acts',
  },
  {
    title: 'Հետադարձ կապ',
    href: '/feedback',
  },
];

const languages = [
  { label: 'Հայերեն', code: 'hy' },
  { label: 'English', code: 'en' },
  // { label: 'Русский', code: 'ru' },
];

export default function Header() {
  const [activeLang, setActiveLang] = useState('hy');

  return (
    <header className="bg-blue1000 flex w-full flex-col items-center">
      <div className="w-full max-w-295 flex py-4 items-center justify-between">
        <Link href="./">
          <Image src={'/logo.svg'} alt={'Logo'} width={506} height={58} />
          <TypographyH1 className="hidden">
            Հայաստանի Հանրապետության Վիճակագրական Կոմիտե ԱՐՄՍՏԱՏ
          </TypographyH1>
        </Link>
        <div className="border flex border-blue800 rounded-sm">
          <input
            type="text"
            placeholder={'Որոնել'}
            className="placeholder:text-blue500/30 px-4 py-2 outline-none"
          />
          <button className="border-l border-l-blue800 flex items-center justify-center w-13.5 cursor-pointer">
            <Image src="/icons/search.svg" alt="Search" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center bg-blue800/30 py-4 max-md:hidden">
        <nav className="w-full flex max-w-295 justify-between items-center">
          <ul className="flex gap-6">
            {items.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1 p-[3px] outline-none"
              >
                <Image src="/icons/earth.svg" alt="Earth" width={24} height={24} />
                <span>{languages.find((l) => l.code === activeLang)?.label}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setActiveLang(lang.code)}
                  className={lang.code === activeLang ? 'font-bold' : ''}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
