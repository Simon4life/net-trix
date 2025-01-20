import Explore from "./components/main/Explore";
import Life from "./components/main/Life";
import Hero from "./components/main/Hero";
import Values from "./components/main/Values";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Life/>
      <Explore/>
      <Values/>
      <Socials heading="Don't Think Twice. Let us Protect Your Data."/>
    </main>
  );
}
