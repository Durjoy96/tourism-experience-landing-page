import Hero from "./home/Hero";
import Journey from "./home/Journey";
import Stories from "./home/Stories";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="pt-32 pb-20 bg-base-200">
        <Stories />
      </section>
      <section className="py-32 bg-base-200">
        <Journey />
      </section>
    </>
  );
}
