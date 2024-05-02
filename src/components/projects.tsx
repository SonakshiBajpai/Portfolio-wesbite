import Link from 'next/link'
import React from 'react'
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { cn } from '@/utils/cn'

const projects = [
  {
    title: 'SkillCraft',
    tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb],
    link: 'https://github.com/Ashish-Bind/SkillCraft',
    cover: '/project-1.png',
    background: 'bg-cyan-300/30',
  },
  {
    title: 'StayWise',
    tech: [SiNodedotjs, SiReact, SiMongodb, SiExpress],
    link: 'https://github.com/Ashish-Bind/Accomodation-Rental',
    cover: '/project-2.png',
    background: 'bg-green-300/30',
  },
]

const Projects = () => {
  return (
    <div className="py-10 p-5 sm:p-0 my-5">
      <h1 className="text-3xl underline underline-offset-8 decoration-cyan-400 -rotate-2 text-center font-bold">
        Projects 📦
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
        {projects.map((project) => {
          return (
            <Link href={project.link} key={project.link}>
              <div className={cn('p-5 rounded-md', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  imageClassName="w-full space-y-5 cursor-pointer"
                >
                  <h1 className="text-2xl space-y-2">{project.title}</h1>
                  <div className="flex gap-2">
                    {project.tech.map((icon, i) => {
                      const Icon = icon
                      return <Icon key={i} className="size-6" />
                    })}
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
