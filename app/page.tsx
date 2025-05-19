import Explore from "./components/Explore";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <Explore />
      <Socials heading="Don't Think Twice. Let us Protect Your Data." />
    </main>
  );
}
