import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Бесплатная подготовка к ЕГЭ с нуля онлайн в NeoFamily',
  description: 'Умная подготовка к ЕГЭ. Все, что нужно для бесплатной подготовки к экзаменам. Банки заданий, варианты и тесты, умное повторение'

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={comfortaa.className}>{children}</body>
    </html>
  )
}
