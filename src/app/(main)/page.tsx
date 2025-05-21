import Hero from '@/features/Hero/hero-section';

export default function Page() {
  return (
    <>
      <section className="w-full h-[180vh] grid place-items-center">
        <Hero />
      </section>
      <section className="h-screen">
        <h1>section2</h1>
      </section>
    </>
  );
}
