'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Link from 'next/link';

export const StatisticsCarousel = ({
  items,
  children,
}: {
  items: string[];
  children: React.ReactNode;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col w-full gap-8.75">
      <div className="flex w-full justify-between items-center gap-10 max-md:flex-col">
        {children}
        <div className="flex gap-3 items-center">
          <button
            onClick={scrollPrev}
            className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl hover:bg-gray-50 transition-colors"
          >
            <Image src="/icons/errow-left.svg" alt="Arrow Left" width={21} height={16} />
          </button>
          <button
            onClick={scrollNext}
            className="size-12 border flex items-center justify-center border-[rgba(198,198,198,1)] rounded-xl hover:bg-gray-50 transition-colors"
          >
            <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={21} height={16} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex-[0_0_auto] min-w-0">
              <Link
                href="/stat/1"
                className="block w-75 text-left font-medium text-[18px] rounded-xl text-[rgba(44,44,44,1)] py-6 pl-6 pr-20 border border-[rgba(57,127,206,1)] hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
