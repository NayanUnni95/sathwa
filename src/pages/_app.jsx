import '@/styles/global.css'
import '@/styles/styles.css'
import { Inter, Oswald } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${oswald.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
