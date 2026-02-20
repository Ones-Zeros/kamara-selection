import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/kamara-logo.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: '/images/gem-sapphire.jpg',
      label: 'Blue Sapphire',
      color: '#0f52ba',
      glow: 'rgba(15, 82, 186, 0.6)',
      bg: 'radial-gradient(ellipse at center, #0a1a3a 0%, #050d1f 60%, #020810 100%)',
    },
    {
      image: '/images/gem-2.jpg',
      label: 'Ruby',
      color: '#e0115f',
      glow: 'rgba(224, 17, 95, 0.55)',
      bg: 'radial-gradient(ellipse at center, #2a0812 0%, #180408 60%, #0a0204 100%)',
    },
    {
      image: '/images/gem-3.jpg',
      label: 'Emerald',
      color: '#27ae60',
      glow: 'rgba(39, 174, 96, 0.55)',
      bg: 'radial-gradient(ellipse at center, #051a0e 0%, #021008 60%, #010804 100%)',
    },
    {
      image: '/images/gem-6.jpg',
      label: 'Alexandrite',
      color: '#9b59b6',
      glow: 'rgba(155, 89, 182, 0.55)',
      bg: 'radial-gradient(ellipse at center, #1a0a2a 0%, #0f0518 60%, #060210 100%)',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 800);
    setCurrentSlide(index);
  };

  const scrollToGemstones = () => {
    document.getElementById('gemstones')?.scrollIntoView({ behavior: 'smooth' });
  };

  const current = slides[currentSlide];

  return (
    <section className="hero" style={{ background: current.bg }}>
      {/* Animated background gradient transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-bg-layer ${index === currentSlide ? 'active' : ''}`}
          style={{ background: slide.bg }}
        />
      ))}

      {/* Particle shimmer overlay */}
      <div className="hero-shimmer" />

      {/* Left: Content */}
      <div className="hero-content">
        <img className="hero-logo" src={logo} alt="Kamara Selections logo" />
        <div
          className="hero-gem-label"
          style={{ color: current.color, borderColor: current.color }}
        >
          {current.label}
        </div>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
        <button className="hero-cta" onClick={scrollToGemstones}>
          {t('hero.cta')}
        </button>

        {/* Slide indicators */}
        <div className="hero-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              style={index === currentSlide ? { background: slide.color } : {}}
              onClick={() => goToSlide(index)}
              aria-label={`View ${slide.label}`}
            />
          ))}
        </div>
      </div>

      {/* Right: Gemstone Image Showcase */}
      <div className="hero-gem-showcase">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-gem-frame ${index === currentSlide ? 'active' : ''}`}
          >
            <div
              className="hero-gem-glow"
              style={{ boxShadow: `0 0 80px 30px ${slide.glow}` }}
            />
            <img
              src={slide.image}
              alt={slide.label}
              className="hero-gem-img"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
