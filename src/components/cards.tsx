"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "React",
    icon: SiReact,
  },
  {
    title: "Next",
    icon: SiNextdotjs,
  },
  {
    title: "SQL",
    icon: SiPostgresql,
  },
  {
    title: "Node JS",
    icon: SiNodedotjs,
  },
  {
    title: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    title: "Express JS",
    icon: SiExpress,
  },
  {
    title: "GitHub",
    icon: SiGit,
  },
  {
    title: "C++",
    icon: SiCplusplus,
  },
  {
    title: "Figma",
    icon: SiFigma,
  },
];
