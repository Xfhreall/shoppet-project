import Hero from '@/features/Hero/hero-section';
import AboutContainer from '@/features/home/container/about-container/about-container';
import MapsContainer from '@/features/home/container/map-container/map-container';
import { TimelineSection } from '@/features/home/timeline/page';

export default function Page() {
  return (
    <>
      <Hero />
      <AboutContainer />
      <TimelineSection />
      <MapsContainer />
    </>
  );
}
