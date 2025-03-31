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

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4 gap-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        Hello there, Nice to meet you 👋
      </div>
      <div className="text-4xl mx-auto font-normal text-neutral-400 text-center">
        I am Gaurav, a <FlipWords words={words} /> <br />
        <div className="flex justify-center my-5">
          <Link href="mailto:kkr2810@gmail.com">
            <ShimmerButton>Contact Me 📬</ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
