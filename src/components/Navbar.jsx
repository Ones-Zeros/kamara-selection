import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home',          id: 'home' },
    { label: 'About Us',      id: 'about' },
    { label: 'Media',         id: 'media' },
    { label: 'Our Collection',id: 'gemstones' },
    { label: 'Contact Us',    id: 'contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / brand text */}
        <button className="navbar-brand" onClick={() => scrollTo('home')}>
          Kamara Selection
        </button>

        {/* Desktop links */}
        <nav className="navbar-links">
          {navLinks.map(({ label, id }) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}>
        {navLinks.map(({ label, id }) => (
          <button key={id} className="nav-link-mobile" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
