import './globals.css'

import { quicksandFont } from '@/lib/font';

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
      <body>{children}</body>
    </html>
  )
}