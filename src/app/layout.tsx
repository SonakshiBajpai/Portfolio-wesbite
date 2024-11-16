import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('http:localhost:3000/'),
  title: {
    template: 'Ashish | Portfolio',
    default: 'Ashish | Portfolio',
  },
  authors: {
    name: 'ashish',
  },
  description: 'Personal portfolio made using Next JS',
  openGraph: {
    title: 'Ashish | Portfolio',
    description: 'Personal portfolio made using Next JS',
    siteName: 'Ashish | Portfolio',
    images: '/website.png',
    type: 'website',
  },
  keywords: ['portfolio', 'ashish', 'personal porfolio'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
