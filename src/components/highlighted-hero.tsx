'use client'
import { motion } from 'framer-motion'
import { HeroHighlight, Highlight } from './ui/hero-highlight'
import { WordsFlipper } from './word-flipper'

export function HighlightedHero() {
  return (
    <HeroHighlight>
      <WordsFlipper />
    </HeroHighlight>
  )
}
