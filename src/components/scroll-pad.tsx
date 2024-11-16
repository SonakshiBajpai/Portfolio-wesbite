'use client'
import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import Image from 'next/image'

export function ScrollPad() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl text-white">
              Projects 🚀 <br />
              <span className="text-xl md:text-[3rem] font-bold mt-1 leading-none">
                says it all
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/hero.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
