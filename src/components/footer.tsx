'use client'

import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'

const socials = [
  {
    link: 'https://www.linkedin.com/in/ashish-bind/',
    label: 'LinkedIn',
    icon: SiLinkedin,
  },
  {
    link: 'https://github.com/Ashish-Bind',
    label: 'Github',
    icon: SiGithub,
  },
  {
    link: '#',
    label: 'X',
    icon: SiX,
  },
]

const Footer = () => {
  return (
    <div className="p-5 flex flex-col justify-between items-center gap-5 mt-10">
      <div className="text-lg -rotate-2 underline underline-offset-8 decoration-green-400">
        Made with 💖 Ashish
      </div>
      <div className="flex items-center gap-5">
        {socials.map((social, i) => {
          const Icon = social.icon
          return (
            <Link key={i} href={social.link} aria-label={social.label}>
              <Icon className="text-2xl hover:text-cyan-300 hover:scale-110 transition-all" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
