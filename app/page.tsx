
import { Hero } from "./components/hero";

import { Keys } from "./components/keys";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gradient-to-b from-neutral-900/99 to-neutral-950">
     <div>
    <Hero/>
     </div>
     <div className=" relative h-full flex justify-center items-center m-10">
      <Keys/>
     </div>
    </div>
  );
}
