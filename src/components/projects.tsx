import Link from 'next/link'
import React from 'react'
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
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
  {
    title: 'MERN Ecommerce',
    tech: [SiNodedotjs, SiReact, SiMongodb, SiExpress],
    link: 'https://mern-ecommerce-ashish.vercel.app/',
    cover: '/project-3.png',
    background: 'bg-violet-300/30',
  },
  {
    title: 'MERN Blog',
    tech: [SiNodedotjs, SiReact, SiMongodb, SiExpress],
    link: 'https://github.com/Ashish-Bind/Blog-MERN-Stack-Project',
    cover: '/project-4.png',
    background: 'bg-yellow-300/30',
  },
  {
    title: 'React & Typescript Todo',
    tech: [SiReact, SiTypescript],
    link: 'https://typescript-todo-react-ashish.vercel.app/',
    cover: '/project-5.png',
    background: 'bg-blue-300/30',
  },
  {
    title: 'Lango - Learn languages',
    tech: [SiReact, SiTypescript, SiRedux, SiRedux],
    link: 'https://lango-quiz.vercel.app/',
    cover: '/project-6.png',
    background: 'bg-purple-300/30',
  },
  {
    title: 'Movi',
    tech: [SiReact, SiTypescript, SiRedux, SiTailwindcss],
    link: 'https://movi-lhvc8v5sx-ashish-bind.vercel.app/',
    cover: '/project-7.png',
    background: 'bg-violet-300/30',
  },
  {
    title: 'Ecommerce Frontend',
    tech: [SiReact, SiRedux],
    link: 'https://react-ecommerce-1blu03umy-ashish-bind.vercel.app/',
    cover: '/project-8.png',
    background: 'bg-cyan-300/30',
  },
]

const Projects = () => {
  return (
    <div className="py-10 p-5 sm:p-0 my-5">
      <h1 className="text-3xl underline underline-offset-8 decoration-cyan-400 -rotate-2 text-center font-bold">
        Projects 📦
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 pt-20 gap-4 sm:px-16">
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
