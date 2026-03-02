import Image from 'next/image';
import Link from 'next/link';
import { TypographyH1 } from '@/components/ui/typography';

const items = [
  {
    title: 'Կատալոգ',
    href: '/catalogue',
  },
  {
    title: 'Հրապարակումներ',
    href: '/publications',
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

export default function Header() {
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
          <button type="button" className="cursor-pointer size-6 flex items-center justify-center">
            <Image src="/icons/earth.svg" alt="Earth" width={24} height={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
