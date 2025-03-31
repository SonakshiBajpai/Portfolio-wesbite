import React from "react";
import { FlipWords } from "./ui/flip-words";
import ShimmerButton from "./shimmer-button";
import Link from "next/link";

export function WordsFlipper() {
  const words = [
    "Software\u00A0Engineer",
    "UX\u00A0Designer",
    "Debate\u00A0enthusiast",
  ];

  const handleHireMeClick = () => {
    window.location.href =
      "https://drive.google.com/file/d/1-2aPhqL7tIqnmy2hlfOSyxep4vZ_DMzf/view?usp=sharing";
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="h-[30rem] flex flex-col justify-center items-center gap-4">
        <div className="text-xl sm:text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
          Hello there, Nice to meet you 👋
        </div>
        <div className="text-xl sm:text-3xl mx-auto font-normal text-neutral-400 text-center max-w-full">
          <div className="flex flex-col items-center gap-4">
            <div>I am Gaurav, a</div>
            <div className="relative w-full overflow-hidden flex justify-center">
              <FlipWords words={words} className="max-w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            <Link href="mailto:kkr2810@gmail.com">
              <ShimmerButton>Contact Me 📬</ShimmerButton>
            </Link>
            <ShimmerButton onClick={handleHireMeClick}>
              Hire Me :) 🏆
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}
