"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiCplusplus,
  SiExpress,
  SiGit,
  SiGo,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
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
    title: "MongoDB",
    icon: SiMongodb,
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
    title: "Go",
    icon: SiGo,
  },
];
