import Banner from '@/components/pages/Home/Banner';
import HomeContact from '@/components/pages/Home/HomeContact';
import OffersSection from '@/components/pages/Home/OffersSection';
import dynamic from 'next/dynamic';

// const Banner = dynamic(() => import('@/components/pages/Home/Banner'), { ssr: false });
// const HomeContact = dynamic(() => import('@/components/pages/Home/HomeContact'), { ssr: false });
// const OffersSection = dynamic(() => import('@/components/pages/Home/OffersSection'), { ssr: false });

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Banner />
      <HomeContact />
      <OffersSection />
    </div>
  );
}
