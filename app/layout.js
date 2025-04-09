import './globals.scss'

import { DM_Sans, Figtree } from 'next/font/google'

const dmSans = DM_Sans({
  weight:["300", "900"],
  subsets: ['latin']
})
const figTree = Figtree({
  style: ['normal', 'italic'],
  weight: ["300"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${figTree.variable}`}>
      <body>{children}</body>
    </html>
  )
}