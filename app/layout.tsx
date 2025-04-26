import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/SideNav'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ara Chanoian - Portfolio',
  description: 'Red Hat Certified Architect, DevOps Engineer, and Cloud Solutions Expert',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Ara Chanoian | Portfolio</title>
        <meta name="description" content="Explore Ara Chanoian's portfolio, showcasing expertise in cloud infrastructure, DevOps, and scalable solutions." />
        <meta name="keywords" content="Ara Chanoian, Cloud Engineer, DevOps, Portfolio, Kubernetes, AWS, GCP, Docker" />
        <meta name="author" content="Ara Chanoian" />
        <meta property="og:title" content="Ara Chanoian | Portfolio" />
        <meta property="og:description" content="Explore Ara Chanoian's portfolio, showcasing expertise in cloud infrastructure, DevOps, and scalable solutions." />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:url" content="https://arachanoian.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ara Chanoian | Portfolio" />
        <meta name="twitter:description" content="Explore Ara Chanoian's portfolio, showcasing expertise in cloud infrastructure, DevOps, and scalable solutions." />
        <meta name="twitter:image" content="/profile.png" />
      </Head>
      <body className={`${inter.className} transition-colors duration-200 bg-white dark:bg-gray-900`}>
        <ThemeProvider>
          {children}
          <SideNav />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
