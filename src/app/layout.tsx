import './globals.css'

import { quicksandFont } from '@/libs/font';
import { Navbar, Wrapper } from '@/components';
import getCurrentUser from '@/actions/getCurrentUser';

export const metadata = {
  title: 'Idea Sort',
  description: 'Idea platform for Influencers and Content Creators',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en" className={quicksandFont.className}>
      <body>
      <Wrapper>
        <Navbar currentUser={currentUser} />
        {children}
      </Wrapper>
      </body>
    </html>
  )
}