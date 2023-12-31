import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react';

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'OrthoFace ',
  },
  description:
    ' OrthoFace is a non-profit organization that aims to help children with facial deformities.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
   )
}
