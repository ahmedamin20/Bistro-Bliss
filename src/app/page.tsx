import Banner from '@/components/pages/Home/Banner';
import HomeContact from '@/components/pages/Home/HomeContact';
import OffersSection from '@/components/pages/Home/OffersSection';


export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Banner />
      <HomeContact />
      <OffersSection />
    </div>
  );
}
