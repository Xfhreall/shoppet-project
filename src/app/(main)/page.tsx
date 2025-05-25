import Hero from '@/features/Hero/hero-section';
import FeatureContainer from '@/features/home/container/feature-container/feature-container';
import MapsContainer from '@/features/home/container/map-container/map-container';

export default function Page() {
  return (
    <>
      <Hero />
      <MapsContainer />
      <FeatureContainer />
    </>
  );
}
