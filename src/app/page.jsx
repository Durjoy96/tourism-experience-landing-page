import Hero from "./home/Hero";
import Journey from "./home/Journey";
import MostBookedPlaces from "./home/MostBookedPlaces";
import Stories from "./home/Stories";

export default function Home() {
  return (
    <>
      <section className="pb-12 bg-base-200">
        <Hero />
      </section>
      <section className="pt-12 pb-32 bg-base-200">
        <Stories />
      </section>
      <section className="py-12 bg-base-200">
        <Journey />
      </section>
      <section className="py-12 bg-base-200">
        <MostBookedPlaces />
      </section>
    </>
  );
}
