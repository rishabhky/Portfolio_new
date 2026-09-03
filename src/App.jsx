import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-measure px-6 pb-4">
        <Hero />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
