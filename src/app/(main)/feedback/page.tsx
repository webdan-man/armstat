import React from 'react';
import { TypographyH2 } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function FeedbackPage() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden pb-55">
      <div className="bg-blue1000 w-full flex justify-center">
        <div className="flex flex-col max-w-295 w-full py-12">
          <TypographyH2>Հետադարձ կապ</TypographyH2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex max-w-295 w-full ">
          <div className="w-full pt-10.25 flex flex-col">
            <p className="text-[rgba(55,55,55,1)]">
              Որոշակի ինֆորմացիա տեքստ ենքով լիազորված մարմինների կողմից պաշտոնական վիճակագրության
              հիմնարար սկզբունքների պահանջներին համապատասխան, հանրային կյանքի էական և չափակցելի
              երևույթների թվային արտահայտությամբ մշակված, արտադրված և տարածված, բացառապես
              վիճակագրական ծրագրերում արտացոլված վիճակագրությունն է, որը ներկայացուցչական հիմքով
              նկարագրում է Հայաստանի Հանրապետության տնտեսական, ժողովրդագրական, սոցիալական և
              բնապահպանական երևույթները:
            </p>
            <address className="w-full not-italic mt-12.25 flex flex-col gap-6">
              {[
                {
                  id: 0,
                  title: 'Հասցե',
                  text: 'ՀՀ ք. Երևան, 0010, Հանրապետության պող., Կառավարական 3 շենք, ',
                },
                {
                  id: 1,
                  title: 'Աշխատանքի վիճակագրության բաժին՝',
                  phone: '+374 11 587 829',
                  email: 'labour@armstat.am',
                },
                {
                  id: 2,
                  title: 'Սոցիալական ոլորտի վիճակագրության բաժին՝',
                  phone: '+374 11 524 513',
                  email: 'social@armstat.am',
                },
                {
                  id: 3,
                  title: 'Աշխատանքի վիճակագրության բաժին՝',
                  phone: '+374 11 587 829',
                  email: 'labour@armstat.am',
                },
                {
                  id: 4,
                  title: 'Թողարկման պատասխանատու՝',
                  phone: '+374 11 523 356',
                  email: 'dissemination@armstat.am',
                },
                {
                  id: 5,
                  title: 'Թողարկման պատասխանատու՝',
                  phone: '+374 11 523 356',
                  email: 'dissemination@armstat.am',
                },
              ].map((item) => (
                <div key={item.id} className="flex flex-col gap-3.5">
                  <p className="text-[rgba(37,37,37,1)] font-medium">{item.title}</p>
                  {(item.phone || item.email || item.text) && (
                    <div className="flex flex-col gap-1">
                      {<p className="text-[rgba(37,37,37,1)]">{item.text}</p>}
                      {item.phone && (
                        <a
                          className="text-[rgba(37,37,37,1)] flex gap-2 items-center"
                          href={`tel:${item.phone}`}
                        >
                          <Image src="/icons/phone.svg" alt="phone" width={12} height={12} />{' '}
                          {item.phone}
                        </a>
                      )}
                      {item.email && (
                        <a
                          className="text-fontSizeS text-[rgba(15,104,192,1)]"
                          href={`mailto:${item.email}`}
                        >
                          {item.email}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3.5">
                <p className="text-[rgba(37,37,37,1)] text-[18px] font-semibold">
                  Պաշտոնական էլ. փոստ`
                </p>
                <div>
                  <a className="text-[rgba(15,104,192,1)]" href={`mailto:nfo@armstat.am`}>
                    nfo@armstat.am
                  </a>
                  <span className="text-[rgba(37,37,37,1)] underline">, վեբ մասնագետ</span>
                </div>
              </div>
            </address>
            <div className="w-full h-px bg-[rgba(217,217,217,1)] mt-20" />
            <p className="mt-6 text-[rgba(37,37,37,1)]">
              39123345@e-citizen.am (միայն www.e-citizen.am համակարգով ծանուցումների համար)
            </p>
            <p className="text-[18px] text-[rgba(37,37,37,1)] font-semibold mt-12.25">
              Սոցիալական կայքեր՝
            </p>
            <nav className="w-full mt-8.75">
              <ul className="flex gap-2">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    target="_blank"
                    className="size-10.5  bg-[rgba(14,22,62,1)] rounded-lg flex items-center justify-center"
                  >
                    <Image src="/social/fb.svg" alt="FB" width={9} height={18} />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    target="_blank"
                    className="size-10.5  bg-[rgba(14,22,62,1)] rounded-lg flex items-center justify-center"
                  >
                    <Image src="/social/in.svg" alt="In" width={22} height={22} />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    target="_blank"
                    className="size-10.5  bg-[rgba(14,22,62,1)] rounded-lg flex items-center justify-center"
                  >
                    <Image src="/social/te.svg" alt="Te" width={18} height={21} />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    target="_blank"
                    className="size-10.5  bg-[rgba(14,22,62,1)] rounded-lg flex items-center justify-center"
                  >
                    <Image src="/social/x.svg" alt="X" width={14} height={15} />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href=""
                    target="_blank"
                    className="size-10.5  bg-[rgba(14,22,62,1)] rounded-lg flex items-center justify-center"
                  >
                    <Image src="/social/yo.svg" alt="YO" width={22} height={15} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="w-full relative max-w-101 h-130.5 shrink-0 -mt-23.5 rounded-[30px]  overflow-hidden -right-15.75">
            <Image src="/images/map.jpg" alt="Հետադարձ կապ" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
