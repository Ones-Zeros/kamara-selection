import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/kamara-logo.png';
import partnersImage from '../assets/images/bannerImg4.png';
import bannerImg2 from '../assets/images/bannerImg2.png';
import bannerImg3 from '../assets/images/bannerImg3.png';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const slides = [
    { image: bannerImg2, label: 'Blue Sapphire', color: '#0f52ba' },
    { image: bannerImg3, label: 'Ceylon Collection', color: '#e0115f' },
    { image: partnersImage, label: 'Mine Partners', color: '#d4a050' },
  ];

  const altTitles = t('hero.altTitles', { returnObjects: true });
  const phrases = Array.isArray(altTitles) && altTitles.length > 0
    ? altTitles
    : [t('hero.title')];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [currentSlide]);

  useEffect(() => {
    if (phrases.length <= 1) return undefined;
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4200);
    return () => clearInterval(interval);
  }, [phrases.length]);

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

        <h1 className="hero-title">
          <span key={phraseIndex} className="hero-phrase">{phrases[phraseIndex]}</span>
        </h1>
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
