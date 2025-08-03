
import { Hero } from "./components/hero";
import { Keyboard } from "./components/keyboardbg";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-b from-neutral-900/99 to-neutral-950">
      <Hero/>
      <Keyboard/>
    </div>
  );
}
