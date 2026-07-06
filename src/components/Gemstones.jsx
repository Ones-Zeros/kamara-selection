import { useTranslation } from 'react-i18next';
import { gemstones } from '../data/gemstones';
import './Gemstones.css';

const Gemstones = () => {
  const { t } = useTranslation();

  return (
    <section className="gemstones" id="gemstones">
      {/* Decorative watermark */}
      <div className="gemstones-watermark" aria-hidden="true">CEYLON</div>

      <div className="gemstones-container">
        <div className="gemstones-header">
          <span className="gemstones-tag">{t('gemstones.tag')}</span>
          <h2 className="gemstones-title">{t('gemstones.title')}</h2>
          <p className="gemstones-subtitle">{t('gemstones.subtitle')}</p>
        </div>

        <div className="gemstones-grid">
          {gemstones.map((gem) => (
            <article
              key={gem.id}
              className="gemstone-card"
              style={{ '--gem-accent': gem.accent }}
            >
              <div className="gemstone-image-container">
                <img
                  src={gem.image}
                  alt={`${t(`gemstones.${gem.id}.name`)} — Sri Lankan gemstone`}
                  className="gemstone-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="gemstone-shine" />
                <span className="gemstone-tagline">{t(`gemstones.${gem.id}.tagline`)}</span>
              </div>

              <div className="gemstone-info">
                <div className="gemstone-head">
                  <span className="gemstone-dot" aria-hidden="true" />
                  <h3 className="gemstone-name">{t(`gemstones.${gem.id}.name`)}</h3>
                </div>
                <p className="gemstone-description">{t(`gemstones.${gem.id}.description`)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="gemstones-cta">
          <p>{t('gemstones.ctaText')}</p>
          <a className="gemstones-cta-btn" href="#contact">{t('gemstones.ctaButton')}</a>
        </div>
      </div>
    </section>
  );
};

export default Gemstones;
