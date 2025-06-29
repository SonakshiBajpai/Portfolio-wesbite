"use client";

import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const socials = [
  {
    link: "https://www.linkedin.com/in/bajpai-sonakshi/",
    label: "LinkedIn",
    icon: SiLinkedin,
  },
  {
    link: "https://github.com/SonakshiBajpai",
    label: "Github",
    icon: SiGithub,
  },
  {
    link: "https://x.com/BajpaiSonakshi",
    label: "X",
    icon: SiX,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {socials.map((social, i) => {
            const Icon = social.icon;
            return (
              <Link
                key={i}
                href={social.link}
                aria-label={social.label}
                className="text-gray-400 hover:text-gray-300"
              >
                <Icon className="h-6 w-6 hover:text-cyan-300 hover:scale-110 transition-all" />
              </Link>
            );
          })}
        </div>
        <div className="mt-8 md:mt-0 md:order-1 flex flex-col items-center md:items-start space-y-3">
          <p className="text-center text-base text-gray-400">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Made with 💖 by Sonakshi
            </span>
          </p>
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Sonakshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
