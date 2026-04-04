import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Gemstones from './components/Gemstones'
import MediaShowcase from './components/MediaShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useSEO from './hooks/useSEO'

function App() {
  useSEO()
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <MediaShowcase />
      <Gemstones />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
