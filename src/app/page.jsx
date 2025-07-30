import Hero from "./home/Hero";
import Stories from "./home/Stories";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="py-32 bg-base-200">
        <Stories />
      </section>
    </>
  );
}
