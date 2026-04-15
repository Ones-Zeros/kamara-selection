import { useTranslation } from 'react-i18next';
import partnersImage from '../assets/images/sortinggem.jpg';
import sapphireImage from '../assets/images/BlueSapphireGen.jpg';
import mineImage from '../assets/images/mining1.jpg';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  const features = [
    { icon: '💎', title: t('about.heritage'),  description: t('about.heritageDesc') },
    { icon: '⭐', title: t('about.quality'),   description: t('about.qualityDesc') },
    { icon: '✓',  title: t('about.authentic'), description: t('about.authenticDesc') },
  ];

  return (
    <section className="about" id="about">
      {/* Decorative watermark */}
      <div className="about-watermark" aria-hidden="true">HERITAGE</div>

      <div className="about-container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-photo about-photo--main">
              <img src={mineImage} alt="Sri Lankan gem mining in Rathnapura" loading="lazy" decoding="async" />
            </div>
            <div className="about-photo about-photo--stack">
              <img src={partnersImage} alt="Kamara Selections partners at a Sri Lankan mining site" loading="lazy" decoding="async" />
            </div>
            <div className="about-chip">{t('about.heritage')}</div>
          </div>

          <div className="about-copy">
            <span className="about-tag">Our Story</span>
            <h2 className="about-title">{t('about.title')}</h2>
            <p className="about-description">{t('about.description')}</p>

            <div className="features">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-bar">
              <div className="about-bar-label">{t('about.authentic')}</div>
              <div className="about-bar-meter">
                <span style={{ width: '92%' }} />
              </div>
              <img className="about-gem" src={sapphireImage} alt="Sri Lankan blue sapphire gemstone" loading="lazy" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
