import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/kamara-logo.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/gem-1.jpg',
    '/images/gem-2.jpg',
    '/images/gem-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToGemstones = () => {
    document.getElementById('gemstones')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-background">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <img className="hero-logo" src={logo} alt="Kamara Selections logo" />
        <h1 className="hero-title">{t('hero.title')}</h1>
        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
        <button className="hero-cta" onClick={scrollToGemstones}>
          {t('hero.cta')}
        </button>
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
