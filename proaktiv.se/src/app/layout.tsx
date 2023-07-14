import './globals.css'
import { Blinker } from 'next/font/google'


const blinker = Blinker({
  subsets: ['latin'],
  weight: '300'
})

export const metadata = {
  title: 'Proaktiv Idrottscenter',
  description: 'En modern idrottsklink med ett forskningsbaserat helhets perspektiv. Vi tillhandahåller naprapati, massage och rehabilitering för dig med smärta i kroppen. Vi behandlar akuta och återkommande tillstånd.',
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
        {children}
      </body>
    </html>
  )
}
