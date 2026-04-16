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

        <div className="about-expertise" id="best-sri-lankan-gem-stones" aria-labelledby="about-expertise-title">
          <span className="about-expertise-tag">Gemstone Expertise</span>
          <h3 id="about-expertise-title" className="about-expertise-title">
            Best Sri Lankan Gem Stones for Jewelers and Collectors
          </h3>
          <p className="about-expertise-intro">
            Kamara Selections focuses on supplying the best Sri Lankan gem stones directly from trusted mining partners in Rathnapura.
            Our mine-to-market model helps buyers access premium stones with clear sourcing and consistent quality standards.
          </p>

          <ul className="about-expertise-points">
            <li>Direct sourcing from Sri Lankan mining regions with strong field knowledge.</li>
            <li>Hand-selected Ceylon sapphires, rubies, moonstones, and other rare stones.</li>
            <li>Transparent communication for wholesale buyers, jewelers, and collectors.</li>
            <li>Global buyer support by phone, email, and WhatsApp.</li>
          </ul>

          <p className="about-expertise-cta">
            Explore our <a href="#gemstones">Sri Lankan gemstone collection</a> or <a href="#contact">speak with our team</a> for current parcel availability.
          </p>

          <div className="about-faq" id="faq">
            <h4>FAQ about Sri Lankan Gem Stones</h4>

            <article className="about-faq-item">
              <h5>Why are Sri Lankan gemstones highly valued?</h5>
              <p>
                Sri Lankan gemstones are known for strong natural color, clarity, and trusted origin, especially stones mined in the Rathnapura region.
              </p>
            </article>

            <article className="about-faq-item">
              <h5>Which gemstone types does Kamara Selections offer?</h5>
              <p>
                We offer blue sapphires, rubies, moonstones, yellow topaz, cat&apos;s eye, and alexandrite from Sri Lankan sources.
              </p>
            </article>

            <article className="about-faq-item">
              <h5>Can international buyers purchase from Kamara Selections?</h5>
              <p>
                Yes. We work with buyers worldwide and support inquiry handling through direct contact channels.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
