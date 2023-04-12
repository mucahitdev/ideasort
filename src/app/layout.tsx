import './globals.css'

import { quicksandFont } from '@/lib/font';
import { Navbar } from '@/components';

export const metadata = {
  title: 'Idea Sort',
  description: 'Idea platform for Influencers and Content Creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksandFont.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}