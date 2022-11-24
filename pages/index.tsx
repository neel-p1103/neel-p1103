import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(234, 231, 220)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Neel Patel - Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      {/* About Section */}

      {/* Experience Section */}

      {/* Skills Section */}

      {/* Projects Section */}

      {/* Contact Section */}
    </div>
  )
}
