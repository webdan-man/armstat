import Hero from '@/components/home/Hero';
import News from '@/components/home/News';
import Links from '@/components/home/Links';
import Interesting from '@/components/home/Interesting';
import Statistics from '@/components/home/Statistics';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <News />
      <Interesting />
      <Links />
      <Footer />
    </>
  );
}
