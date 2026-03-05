'use client';

import { TypographyH4, TypographyP } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';
import { StatisticsCarousel } from '@/components/home/StatisticsCarousel';

export default function Statistics() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="flex w-full flex-col pb-15 items-center">
      <div className="w-full max-w-295 flex flex-col gap-15.75">
        <StatisticsCarousel
          items={[
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
          ]}
        >
          <div className="flex border-l-[6px] pt-0.75 pb-1.25 border-l-[rgba(204,0,0,1)] pl-4.5 items-center gap-6">
            <Image src="/statistics/statistics.svg" alt="statistics" width={46} height={46} />
            <div className="flex gap-6">
              <div className="flex flex-col gap-2">
                <h4 className="text-[24px] font-bold text-[rgba(44,44,44,1)]">Ժողովրդագրություն</h4>
                <p className="text-textBlack600">Կարճ հուշում պարունակութոյան մասին</p>
              </div>
            </div>
          </div>
        </StatisticsCarousel>
        <StatisticsCarousel
          items={[
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
          ]}
        >
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
        </StatisticsCarousel>
        <StatisticsCarousel
          items={[
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
            'Մշտական բնակչություն',
          ]}
        >
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
        </StatisticsCarousel>
      </div>
    </section>
  );
}
