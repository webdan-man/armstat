import { TypographyH3, TypographyP } from '@/components/ui/typography';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ChartTab from '@/components/stat/ChartTab';

export default function StatPage() {
  return (
    <div className="w-full pt-7.5 pl-16.75 flex flex-col">
      <TypographyH3 className="text-[rgba(40,40,40,1)]">Ենթաթեմա 1 անվանումը</TypographyH3>
      <div className="flex gap-3 mt-5">
        <Input className="text-[rgba(55,71,79,1)] border-textBlack300 shadow-none h-10.5" />
        <Button variant="secondary" size="icon" className="size-10.5">
          <Image src={'/icons/search-blue.svg'} alt="search" width={24} height={24} />
        </Button>
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-6">
          <div className="flex gap-3 items-center">
            <Image src={'/icons/man.svg'} alt="man" width={17} height={27} />
            <div className="flex flex-col">
              <p className="text-fontSizeXS font-semibold text-[rgba(56,56,56,1)]">1,580,982</p>
              <p className="text-[11px] text-[rgba(110,127,136,1)]">52%</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Image src={'/icons/man.svg'} alt="man" width={17} height={27} />
            <div className="flex flex-col">
              <p className="text-fontSizeXS font-semibold text-[rgba(56,56,56,1)]">1,448,982</p>
              <p className="text-[11px] text-[rgba(110,127,136,1)]">48%</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <Button variant="ghost" className="gap-1 flex items-center">
            <Image src={'/icons/download.svg'} alt="download" width={20} height={20} />
            <p className="font-medium text-[12px] text-link">Ներբեռնել</p>
          </Button>
          <Button variant="ghost" className="gap-1 flex items-center">
            <Image src={'/icons/share.svg'} alt="share" width={20} height={20} />
            <p className="font-medium text-[12px] text-link">Կիսվել</p>
          </Button>
        </div>
      </div>
      <h5 className="text-[rgba(0,0,0,1)] mt-7.5 text-[18px]">
        ՀՀ կացության կարգավիճակ ստացած օտարերկրացիների բաշխումն  ըստ կարգավիճակի տեսակի և տարիքային
        խմբերի
      </h5>
      <TypographyP className="text-fontSizeS leading-4.75 text-[rgba(125,125,125,1)] mt-3">
        Լորեմ իպսում դոլոր սիթ ամեթ, կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի սեդ
        պորտտիթոր աք, ֆաուցիբուս վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել աուքթոր
        պուրուս ալիքուեթ. Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ եու ֆաուցիբուս
        վել, ուլտրիսիս ուտ նունկ. Պելլենտեսքուե.
      </TypographyP>
      <div className="bg-[rgba(241,245,248,1)] px-3 border-t border-[rgba(15,104,192,1)] pt-4.25 pb-4.75 mt-10 flex gap-4">
        <Select defaultValue="1">
          <SelectTrigger className="border-none text-[rgba(44,44,44,1)] bg-transparent shadow-none px-2 h-9">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="1">Ժամանակային շարք</SelectItem>
            <SelectItem value="2">Ժամանակային շարք 2</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="1">
          <SelectTrigger className="border-none text-[rgba(44,44,44,1)] bg-transparent shadow-none px-2 h-9">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="1">Տարիք</SelectItem>
            <SelectItem value="2">Տարիք 2</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="1">
          <SelectTrigger className="border-none text-[rgba(44,44,44,1)] bg-transparent shadow-none px-2 h-9">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="1">Մարզեր</SelectItem>
            <SelectItem value="2">Մարզեր 2</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="1">
          <SelectTrigger className="border-none text-[rgba(44,44,44,1)] bg-transparent shadow-none px-2 h-9">
            <SelectValue placeholder="Select option" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="1">Սեռ</SelectItem>
            <SelectItem value="2">Սեռ 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="border border-[rgba(178,178,178,1)] rounded-2xl mt-6 pb-8.75 overflow-hidden">
        <Tabs defaultValue="diagram" className="w-full">
          <TabsList className="border-b border-b-[rgba(178,178,178,1)] px-5 rounded-none w-full bg-none h-11.75">
            <TabsTrigger value="diagram" className="text-[rgba(40,40,40,1)]">
              Գծապատկեր
            </TabsTrigger>
            <TabsTrigger value="data" className="text-[rgba(40,40,40,1)] font-medium">
              Տվյալներ
            </TabsTrigger>
            <TabsTrigger value="metadata" className="text-[rgba(40,40,40,1)] font-medium">
              Մետատվյալներ
            </TabsTrigger>
          </TabsList>
          <TabsContent value="diagram">
            <div className="p-7.5">
              <ChartTab />
            </div>
          </TabsContent>
          <TabsContent value="data">
            <div className="p-7.5 w-full">
              <div className="w-full">
                <div className="grid grid-cols-[3fr_2fr_2fr_2fr_2fr] border-b border-b-[rgba(226,226,226,1)] py-3">
                  {['Ժամանակային Շարք', 'Տարիք', 'Մարզեր', 'Սեռ', 'Քանակ'].map((item, index) => (
                    <p key={index} className="text-[12px] font-medium text-[rgba(40,40,40,1)]">
                      {item}
                    </p>
                  ))}
                </div>
                {Array.from(Array(10).keys()).map((row, rowIndex) => (
                  <div
                    className="grid grid-cols-[3fr_2fr_2fr_2fr_2fr] border-b border-b-[rgba(226,226,226,1)]"
                    key={rowIndex}
                  >
                    {['1997', '0-5', 'Արարատ', 'Տղամարդ', '15,000'].map((cell, cellIndex) => (
                      <p
                        key={cellIndex}
                        className="text-[12px] pt-3.75 pb-4.5 text-[rgba(40,40,40,1)]"
                      >
                        {cell}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="metadata">
            <div className="p-6">
              <h4 className="text-fontSizeM text-[rgba(0,0,0,1)]">
                Այստեղ պետք է լինի վերնագիր, կարող է լինել նաև երկու տող
              </h4>
              <p className="mt-4 text-fontSizeS leading-4.75 text-[rgba(125,125,125,1)]">
                Լորեմ իպսում դոլոր սիթ ամեթ, կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի
                սեդ պորտտիթոր աք, ֆաուցիբուս վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել
                աուքթոր պուրուս ալիքուեթ. Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ
                եու ֆաուցիբուս վել, ուլտրիսիս ուտ նունկ. Պելլենտեսքուե. Լորեմ իպսում դոլոր սիթ ամեթ,
                կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի սեդ պորտտիթոր աք, ֆաուցիբուս
                վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել աուքթոր պուրուս ալիքուեթ.
                Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ եու ֆաուցիբուս վել,
                ուլտրիսիս ուտ նունկ. Պելլենտեսքուե.
              </p>
              <h4 className="text-fontSizeM text-[rgba(0,0,0,1)] mt-7.5">
                Այստեղ պետք է լինի վերնագիր, կարող է լինել նաև երկու տող, ՀՀ կացության կարգավիճակ
                ստացած օտարերկրացիների բաշխումն ըստ կարգավիճա։
              </h4>
              <p className="mt-4 text-fontSizeS leading-4.75 text-[rgba(125,125,125,1)]">
                Լորեմ իպսում դոլոր սիթ ամեթ, կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի
                սեդ պորտտիթոր աք, ֆաուցիբուս վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել
                աուքթոր պուրուս ալիքուեթ. Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ
                եու ֆաուցիբուս վել, ուլտրիսիս ուտ նունկ. Պելլենտեսքուե. Լորեմ իպսում դոլոր սիթ ամեթ,
                կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի սեդ պորտտիթոր աք, ֆաուցիբուս
                վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել աուքթոր պուրուս ալիքուեթ.
                Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ եու ֆաուցիբուս վել,
                ուլտրիսիս ուտ նունկ. Պելլենտեսքուե.
              </p>
              <p className="mt-5 text-fontSizeS leading-4.75 text-[rgba(125,125,125,1)]">
                Լորեմ իպսում դոլոր սիթ ամեթ, կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի
                սեդ պորտտիթոր աք, ֆաուցիբուս վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել
                աուքթոր պուրուս ալիքուեթ. Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ
                եու ֆաուցիբուս վել, ուլտրիսիս ուտ նունկ. Պելլենտեսքուե. Լորեմ իպսում դոլոր սիթ ամեթ,
                կոնսեկթեթուր ադիպիսցինգ էլիթ. Ուտ էլիթ էլիթ, ֆասիլիսի սեդ պորտտիթոր աք, ֆաուցիբուս
                վել լիգուլա. Սեդ ալիքուեթ լորեմ աք օդիո ուլտրիչիես, վել աուքթոր պուրուս ալիքուեթ.
                Մաուրիս նոն ինթերդում իպսում. Պրոին էլիթ նունկ, բլանդիթ եու ֆաուցիբուս վել,
                ուլտրիսիս ուտ նունկ. Պելլենտեսքուե.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
