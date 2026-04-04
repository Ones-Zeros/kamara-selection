import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
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
    { label: t('footer.links.home'),       id: 'home' },
    { label: t('footer.links.about'),      id: 'about' },
    { label: t('footer.links.media'),      id: 'media' },
    { label: t('footer.links.gemstones'),  id: 'gemstones' },
    { label: t('footer.links.contact'),    id: 'contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo / brand text */}
        <button className="navbar-brand" onClick={() => scrollTo('home')}>
          <span className="navbar-logo-wrap">
            <img src={logo} alt="Kamara Selections logo" className="navbar-logo" />
            <span className="navbar-logo-tint" aria-hidden />
          </span>
          <span className="navbar-title">Kamara Selections</span>
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
