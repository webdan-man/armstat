import { TypographyH4, TypographyP } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function Statistics() {
  return (
    <section className="flex w-full flex-col pb-15 items-center">
      <div className="w-full max-w-295 flex flex-col gap-15.75">
        <div className="flex flex-col w-full gap-8.75">
          <div className="flex w-full justify-between items-center gap-10 max-md:flex-col">
            <div className="flex border-l-[6px] pt-0.75 pb-1.25 border-l-[rgba(204,0,0,1)] pl-4.5 items-center gap-6">
              <Image src="/statistics/statistics.svg" alt="statistics" width={46} height={46} />
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <TypographyH4 className="text-[rgba(44,44,44,1)]">Ժողովրդագրություն</TypographyH4>
                  <TypographyP className="text-textBlack600">
                    Կարճ հուշում պարունակութոյան մասին
                  </TypographyP>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <button className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl">
                <Image src="/icons/errow-left.svg" alt="Arrow Left" width={21} height={16} />
              </button>
              <button className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl">
                <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={21} height={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {[
              'Մշտական բնակչություն',
              'Մշտական բնակչություն',
              'Մշտական բնակչություն',
              'Մշտական բնակչություն',
            ].map((item, index) => (
              <Link
                key={index}
                href="/stat/1"
                className="max-w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full gap-8.75">
          <div className="flex w-full justify-between items-center gap-10 max-md:flex-col">
            <div className="flex border-l-[6px] pt-0.75 pb-1.25 border-l-[rgba(39,81,153,1)] pl-4.5 items-center gap-6">
              <Image src="/statistics/statistics.svg" alt="statistics" width={46} height={46} />
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <TypographyH4 className="text-[rgba(44,44,44,1)]">Ժողովրդագրություն</TypographyH4>
                  <TypographyP className="text-textBlack600">
                    Կարճ հուշում պարունակութոյան մասին
                  </TypographyP>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <button className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl">
                <Image src="/icons/errow-left.svg" alt="Arrow Left" width={21} height={16} />
              </button>
              <button className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl">
                <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={21} height={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {[
              'Մշտական բնակչություն',
              'Մշտական բնակչություն',
              'Մշտական բնակչություն',
              'Մշտական բնակչություն',
            ].map((item, index) => (
              <Link
                key={index}
                href="/stat/1"
                className="max-w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)]"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full gap-8.75">
          <div className="flex w-full justify-between items-center gap-10 max-md:flex-col">
            <div className="flex border-l-[6px] pt-0.75 pb-1.25 border-l-warning pl-4.5 items-center gap-6">
              <Image src="/statistics/statistics.svg" alt="statistics" width={46} height={46} />
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <TypographyH4 className="text-[rgba(44,44,44,1)]">Ժողովրդագրություն</TypographyH4>
                  <TypographyP className="text-textBlack600">
                    Կարճ հուշում պարունակութոյան մասին
                  </TypographyP>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <button className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl">
                <Image src="/icons/errow-left.svg" alt="Arrow Left" width={21} height={16} />
              </button>
              <button className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl">
                <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={21} height={16} />
              </button>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button className="max-w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)]">
              Մշտական բնակչություն
            </button>
            <button className="max-w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)]">
              Մշտական բնակչություն
            </button>
            <button className="max-w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)]">
              Մշտական բնակչություն
            </button>
            <button className="max-w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)]">
              Մշտական բնակչություն
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
