import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography';
import Image from 'next/image';

export default function Links() {
  return (
    <section className="flex w-full flex-col py-30 items-center">
      <div className="w-full max-w-295 flex items-start flex-col">
        <TypographyH2 className="text-[rgba(44,44,44,1)] font-medium max-w-180 text-center">
          Օգտակար հղումներ
        </TypographyH2>
        <div className="mt-15 grid grid-cols-3 gap-6.25 max-md:flex-col max-md:flex">
          <div className="border border-textBlack300 p-6 rounded-lg">
            <div className="relative w-full h-39.5">
              <Image src="/links/link1.jpg" alt="Link" fill={true} />
            </div>
            <TypographyH3 className="mt-4 leading-fontLine-heightLG tracking-normal text-textBlack800">
              Վերնագրիրը այստեղ
            </TypographyH3>
            <TypographyP className="mt-4 text-textBlack700">
              Լրացուցիչ տեղեկություններն այստեղ’ առավելագույնը 2 տող
            </TypographyP>
          </div>
          <div className="border border-textBlack300 p-6 rounded-lg">
            <div className="relative w-full h-39.5">
              <Image src="/links/link1.jpg" alt="Link" fill={true} />
            </div>
            <TypographyH3 className="leading-fontLine-heightLG mt-4 tracking-normal text-textBlack800">
              Վերնագրիրը այստեղ
            </TypographyH3>
            <TypographyP className="mt-4 text-textBlack700">
              Լրացուցիչ տեղեկություններն այստեղ’ առավելագույնը 2 տող
            </TypographyP>
          </div>
          <div className="border border-textBlack300 p-6 rounded-lg">
            <div className="relative w-full h-39.5">
              <Image src="/links/link1.jpg" alt="Link" fill={true} />
            </div>
            <TypographyH3 className="leading-fontLine-heightLG mt-4 tracking-normal text-textBlack800">
              Վերնագրիրը այստեղ
            </TypographyH3>
            <TypographyP className="mt-4 text-textBlack700">
              Լրացուցիչ տեղեկություններն այստեղ’ առավելագույնը 2 տող
            </TypographyP>
          </div>
        </div>
      </div>
    </section>
  );
}
