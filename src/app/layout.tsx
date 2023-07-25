import Link from 'next/link'
import './globals.scss'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
export const metadata: Metadata = {
  title: 'Jen Nguyen - Portfolio',
  description: 'A personal portfolio by Jen Nguyen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
