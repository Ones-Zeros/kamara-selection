import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToGemstones = () => {
    document.getElementById('gemstones')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t('hero.title')}</h1>
        <h2 className="hero-subtitle">{t('hero.subtitle')}</h2>
        <p className="hero-description">{t('hero.description')}</p>
        <button className="hero-cta" onClick={scrollToGemstones}>
          {t('hero.cta')}
        </button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;
