import './App.css'
import LanguageSwitcher from './components/LanguageSwitcher'
import Hero from './components/Hero'
import About from './components/About'
import Gemstones from './components/Gemstones'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <LanguageSwitcher />
      </nav>
      <Hero />
      <About />
      <Gemstones />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
