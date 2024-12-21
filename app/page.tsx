import Header from './components/Header'
import Hero from './components/Hero'
import ImportantSections from './components/ImportantSections'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow bg-white">
        <ImportantSections />
      </main>
      <Footer />
    </div>
  )
}
