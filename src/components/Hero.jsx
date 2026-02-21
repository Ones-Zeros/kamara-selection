import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/kamara-logo.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  const slides = [
    { image: '/images/gem-2.jpg',       label: 'Ruby',       color: '#e0115f' },
    { image: '/images/gem-3.jpg',       label: 'Emerald',    color: '#27ae60' },
    { image: '/images/gem-sapphire.jpg',label: 'Sapphire',   color: '#0f52ba' },
    { image: '/images/gem-6.jpg',       label: 'Alexandrite',color: '#9b59b6' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setPrevSlide(currentSlide);
    setCurrentSlide(index);
  };

  const scrollToGemstones = () => {
    document.getElementById('gemstones')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Full-screen background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index === prevSlide ? 'prev' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <img className="hero-logo" src={logo} alt="Kamara Selections logo" />

        <span className="hero-tag">
          — {slides[currentSlide].label} —
        </span>

        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>

        <button className="hero-cta" onClick={scrollToGemstones}>
          {t('hero.cta')}
        </button>
      </div>

      {/* Slide indicators */}
      <div className="hero-indicators">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`View ${slide.label}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
