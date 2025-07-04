"use client";

import { LampContainer } from "@/components/ui/lamp";
import React from "react";
import { motion } from "framer-motion";

const Lamp = () => {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl"
      >
        <div>
          Nice to meet you! 👋 <br /> I&apos;m Sonakshi <br />{" "}
          <span className="border-b-4 border-yellow-500">a web developer.</span>
        </div>
      </motion.h1>
    </LampContainer>
  );
};

export default Lamp;
