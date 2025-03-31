import { CardHoverEffectDemo } from "@/components/cards";
import Footer from "@/components/footer";
import { HighlightedHero } from "@/components/highlighted-hero";
import Navbar from "@/components/navbar";
import { ScrollPad } from "@/components/scroll-pad";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className=" mx-auto">
        <Navbar />
        <div className="">
          <HighlightedHero />
        </div>
        <div className="my-10">
          <h1 className="text-3xl underline underline-offset-8 decoration-green-400 rotate-2 text-center font-bold">
            Skills 🤔
          </h1>
          <CardHoverEffectDemo />
        </div>
        <Footer />
      </div>
    </div>
  );
}
