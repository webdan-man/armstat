import { TypographyH2, TypographyP } from '@/components/ui/typography';
import Image from 'next/image';

export default function Hero({
  title,
  shortDescription,
  textContent,
  imageSrc,
}: {
  title?: string;
  shortDescription?: string;
  textContent?: string;
  imageSrc?: string;
}) {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="bg-blue1000 flex w-full flex-col items-center rounded-br-[56px]">
        <div className="w-full max-w-295 flex pt-18 pb-2.5 items-center flex-col">
          <TypographyH2 className="font-medium max-w-180 text-center relative z-10">
            {title ?? 'Հայաստանի գենդերային բաշխմամբ վիճակագրության հարթակ'}
          </TypographyH2>
          <TypographyP className="max-w-180 text-center mt-6 text-textBlack100/70 leading-5 relative z-10">
            {shortDescription ??
              'Գենդերային բաշխմամբ վիճակագրությունը կարևոր գործիք և ուղեցույց է կանանց ու տղամարդկանց իրավահավասարությունների և հավասար հնարավորության քաղաքականություն մշակողների, ոլորտի ակտիվիստների համար:'}
          </TypographyP>
          {textContent && (
            <TypographyP className="max-w-180 text-center mt-4 text-textBlack100/70 leading-5 relative z-10">
              {textContent}
            </TypographyP>
          )}
          <div className="relative w-full w-max-271 -top-25 h-51.5 z-0">
            <Image src={'/images/hero.png'} alt={'Hero'} fill={true} />
          </div>
        </div>
      </section>
      <div className="relative max-w-295 w-full h-87 overflow-hidden rounded-3xl -top-32.5">
        <Image src={imageSrc} alt={'Hero'} fill />
      </div>
    </div>
  );
}
