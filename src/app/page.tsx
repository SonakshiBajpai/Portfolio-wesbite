import { CardHoverEffectDemo } from "@/components/cards";
import Footer from "@/components/footer";
import { HighlightedHero } from "@/components/highlighted-hero";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Ripple } from "@/components/magicui/ripple";
import Navbar from "@/components/navbar";
import { ScrollPad } from "@/components/scroll-pad";
import SpotifyCard from "@/components/spotify";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
        <Navbar />
        <div className="w-full">
          <HighlightedHero />
        </div>
        <div className="my-8 sm:my-10 space-y-8 sm:space-y-12">
          <h1 className="text-2xl sm:text-3xl underline underline-offset-8 decoration-green-400 rotate-2 text-center font-bold">
            Skills 🤔
          </h1>
          <CardHoverEffectDemo />

          <div className="relative min-h-[600px] sm:min-h-[800px] group">
            <div className="absolute inset-0">
              <Ripple
                className="absolute inset-0"
                mainCircleSize={400}
                numCircles={12}
              />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="h-12 sm:h-20" />
              <AuroraText className="text-3xl sm:text-4xl font-bold text-center px-4">
                Spotify?
              </AuroraText>
              <div className="h-6 sm:h-8" />
              <SpotifyCard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
