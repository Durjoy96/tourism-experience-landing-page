import Guide from "./home/Guide";
import Hero from "./home/Hero";
import JoinCommunity from "./home/JoinCommunity";
import Journey from "./home/Journey";
import MostBookedPlaces from "./home/MostBookedPlaces";
import Stories from "./home/Stories";

export default function Home() {
  return (
    <>
      <section className="pb-8 md:pb-12 bg-base-200">
        <Hero />
      </section>
      <section className="pt-8 md:pt-12 pb-28 md:pb-32 bg-base-200">
        <Stories />
      </section>
      <section className="py-8 md:py-12 bg-base-200">
        <Journey />
      </section>
      <section className="py-8 md:py-12 bg-base-200">
        <Guide />
      </section>
      <section className="py-8 md:py-12 bg-base-200">
        <MostBookedPlaces />
      </section>
      <section className="py-8 md:py-12 bg-base-200">
        <JoinCommunity />
      </section>
    </>
  );
}
