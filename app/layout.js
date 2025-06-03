import './globals.scss'

import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const inter = Inter({
  weight:["300", "600"],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}