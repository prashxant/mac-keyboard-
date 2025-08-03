
import { Hero } from "./components/hero";
import { Keyboard } from "./components/keyboardbg";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-b from-neutral-900/99 to-neutral-950">
     <div>
    <Hero/>
     </div>
     <div className=" relative h-full flex justify-center items-center  bg-amber-400 m-10">
      <Keyboard/>
     </div>
    </div>
  );
}
