import React from 'react';
import { TypographyH2 } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export default function LegalActsPage() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-hidden pb-55">
      <div className="bg-blue1000 w-full flex justify-center">
        <div className="flex flex-col max-w-295 w-full py-12">
          <TypographyH2>Տեղեկատվական կենտրոն</TypographyH2>
        </div>
      </div>
      <div className="bg-[rgba(245,246,233,1)] w-full flex justify-center">
        <div className="flex max-w-295 w-full ">
          <div className="w-full pt-23 pb-26.5 flex flex-col">
            <h3 className="text-[rgba(55,55,55,1)] font-semibold text-[23px]">
              ԱՐՄՍՏԱՏ Վիճակագրական Կոմիտեյի մասին
            </h3>
            <p className="text-[rgba(55,55,55,1)] mt-8.5">
              Հայաստանի Հանրապետությունում պաշտոնական վիճակագրությունը, օրենքով լիազորված մարմինների
              կողմից պաշտոնական վիճակագրության հիմնարար սկզբունքների պահանջներին համապատասխան,
              հանրային կյանքի էական և չափակցելի երևույթների թվային արտահայտությամբ մշակված,
              արտադրված և տարածված, բացառապես վիճակագրական ծրագրերում արտացոլված վիճակագրությունն է,
              որը ներկայացուցչական հիմքով նկարագրում է Հայաստանի Հանրապետության տնտեսական,
              ժողովրդագրական, սոցիալական և բնապահպանական երևույթները:
            </p>
          </div>
          <div className="w-full relative max-w-134.75 h-136.75 shrink-0 -mt-16.75 rounded-r-[159px] rounded-tl-[159px] overflow-hidden -right-18">
            <Image src="/images/legal-acts.jpg" alt="Տեղեկատվական կենտրոն" fill />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-295 w-full pt-27.25">
        <div className="flex flex-col max-w-202 w-full justify-start">
          <h3 className="text-[rgba(55,55,55,1)] font-semibold text-[23px]">
            ԱՐՄՍՏԱՏ Տեղեկատվական ինֆորմացիա
          </h3>
          <h5 className="text-[rgba(0,0,0,1)] font-medium text-ontSizeM mt-10">
            Վիճակագրական ծրագրերին համապատասխան իրականացնում է պաշտոնական վիճակագրության մշակումը,
            արտադրությունը և տարածումը.
          </h5>
          <p className="mt-3 text-fontSizeXS text-[rgba(85,85,85,1)]">
            Հայաստանի Հանրապետությունում պաշտոնական վիճակագրությունը, օրենքով լիազորված մարմինների
            կողմից պաշտոնական վիճակագրության հիմնարար սկզբունքների պահանջներին համապատասխան,
            հանրային կյանքի էական և չափակցելի երևույթների թվային արտահայտությամբ մշակված, արտադրված
            և տարածված, բացառապես վիճակագրական ծրագրերում արտացոլված վիճակագրությունն է, որը
            ներկայացուցչական հիմքով նկարագրում է Հայաստանի Հանրապետության տնտեսական, ժողովրդագրական,
            սոցիալական և բնապահպանական երևույթները:
          </p>
          <p className="text-[12px] text-[rgba(110,127,136,1)] mt-6">
            Հղում՝{' '}
            <Link href={'/public'} className="text-link">
              Հղման աղբյուրը
            </Link>
          </p>
          <h5 className="text-[rgba(0,0,0,1)] font-medium text-ontSizeM mt-10">
            պետական խորհրդի կողմից սահմանված մեթոդների, ընտրանքի և անցկացման կարգին համապատասխան
            իրականացնում է ընտրանքային հետազոտություններ.
          </h5>
          <p className="mt-3 text-fontSizeXS text-[rgba(85,85,85,1)]">
            Հայաստանի Հանրապետությունում պաշտոնական վիճակագրությունը, օրենքով լիազորված մարմինների
            կողմից պաշտոնական վիճակագրության հիմնարար սկզբունքների պահանջներին համապատասխան,
            հանրային կյանքի էական և չափակցելի երևույթների թվայի
          </p>
          <div className="flex items-center gap-10 mt-6">
            <Link href={'/public'} className="text-link flex text-[12px] items-center">
              <Image src="/icons/download.svg" alt="download" width={20} height={20} /> Ներբեռնել
            </Link>
            <p className="text-[12px] text-[rgba(110,127,136,1)]">
              Հղում՝{' '}
              <Link href={'/public'} className="text-link font-semibold">
                Հղման աղբյուրը
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
