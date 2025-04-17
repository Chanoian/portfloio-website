import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/SideNav'
import { ThemeProvider } from '@/context/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

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
