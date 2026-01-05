import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-ragam_black min-h-screen text-white overflow-x-hidden font-sans selection:bg-ragam_orange selection:text-black">
      <Head>
        <title>Ragam '23 | The Flame Still Burns</title>
        <meta name="description" content="Recreated Ragam 2023 website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Marquee />

        {/* Placeholder for other sections */}
        <section className="py-24 px-6 container mx-auto text-center">
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the grandeur of Ragam. With over 50+ events, workshops, and pro-shows,
            witness the campus comes alive with art, culture, and technology.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
