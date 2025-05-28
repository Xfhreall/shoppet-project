import Hero from '@/features/Hero/hero-section';
import FeatureContainer from '@/features/home/container/feature-container/feature-container';
import MapsContainer from '@/features/home/container/map-container/map-container';
import { TimelineSection } from '@/features/home/timeline/page';

export default function Page() {
  return (
    <>
      <Hero />
      <TimelineSection />
      <MapsContainer />
      <FeatureContainer />
    </>
  );
}
