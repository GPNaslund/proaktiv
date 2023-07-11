import NavBar from '@/components/navbar/navbar'
import './globals.css'
import { Blinker } from 'next/font/google'

const blinker = Blinker({
  subsets: ['latin'],
  weight: '300'
})

export const metadata = {
  title: 'Proaktiv Idrottscenter',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <body className={blinker.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
