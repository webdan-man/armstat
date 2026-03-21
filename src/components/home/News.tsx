'use client';

import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Spinner } from '@/components/ui/spinner';
import Link from 'next/link';

type Item = {
  id: number;
  updatedAt: string;
  title: string;
  img: string;
  text: string;
};

const items: Item[] = [
  {
    id: 0,
    updatedAt: '14.09.25',
    title: 'Նորության վերնագիր, որը կարող է լինել երկու տող',
    img: '',
    text: 'Կարևոր է յուրաքանչյուր քարտում գրեք հակիրճ և ճշգրիտ:',
  },
  {
    id: 1,
    updatedAt: '14.09.25',
    title: 'Նորության վերնագիր, որը կարող է լինել երկու տող',
    img: '',
    text: 'Կարևոր է յուրաքանչյուր քարտում գրեք հակիրճ և ճշգրիտ:',
  },
  {
    id: 2,
    updatedAt: '14.09.25',
    title: 'Նորության վերնագիր, որը կարող է լինել երկու տող',
    img: '',
    text: 'Կարևոր է յուրաքանչյուր քարտում գրեք հակիրճ և ճշգրիտ:',
  },
];

const getData = () => items.map((item, index) => ({ ...item, id: Date.now() + index }));

export default function News() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    setData(getData());
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData((prev) => [...prev, ...getData()]);
    }, 1000);
  };

  return (
    <section className="flex w-full flex-col items-center">
      <div className="w-full max-w-295 flex py-15 items-start flex-col">
        <TypographyH2 className="text-[rgba(44,44,44,1)] font-medium max-w-180 text-center">
          Նորություններ
        </TypographyH2>
        <div className="mt-15 gap-10 grid grid-cols-3 max-md:flex max-md:flex-col">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full rounded-lg border border-textBlack300 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]"
            >
              <div className="w-full px-6 pt-6 pb-4 flex flex-col gap-2">
                <TypographyP className={'text-textBlack600'}>{item.updatedAt}</TypographyP>
                <TypographyH3 className={'text-textBlack800 tracking-normal'}>
                  {item.title}
                </TypographyH3>
              </div>
              <div className="relative w-full h-59.75">
                <Image src={'/news/content.jpg'} alt={'News'} fill={true} />
              </div>
              <div className="px-6 pt-6 pb-4 flex flex-col gap-4">
                <TypographyP className="text-textBlack700 tracking-normal">{item.text}</TypographyP>
                <Link
                  href={'/blog/1'}
                  className="text-center w-full rounded-sm border-2 bg-link border-blue600 p-2"
                >
                  Կարդալ ավելին
                </Link>
              </div>
            </div>
          ))}
        </div>
        {data?.length <= 6 && (
          <button
            disabled={loading}
            onClick={fetchData}
            className="mt-16.5 text-fontSizeS py-2 px-4 bg-link rounded-sm"
          >
            {loading ? <Spinner className="size-5" /> : 'Տեսնել ավելին'}
          </button>
        )}
      </div>
    </section>
  );
}
