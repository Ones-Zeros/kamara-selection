import { useTranslation } from 'react-i18next';
import partnersImage from '../assets/images/sortinggem.jpg';
import sapphireImage from '../assets/images/stones/blue-sahhir.png';
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
          <span className="about-tag about-tag--expertise">Gemstone Expertise</span>
          <h3 id="about-expertise-title" className="about-expertise-title">
            Best Sri Lankan Gem Stones for Jewelers and Collectors
          </h3>
          <p className="about-expertise-intro">
            Kamara Selections focuses on supplying the best Sri Lankan gem stones directly from trusted mining partners in Rathnapura.
            Our mine-to-market model helps buyers access premium stones with clear sourcing and consistent quality standards.
          </p>

          <div className="about-expertise-layout">
            <div className="about-expertise-column">
              <h4 className="about-expertise-subtitle">Why buyers choose Kamara</h4>
              <ul className="about-expertise-points">
                <li className="about-expertise-point">
                  <span className="about-expertise-point-icon" aria-hidden="true">✓</span>
                  <p>Direct sourcing from Sri Lankan mining regions with strong field knowledge.</p>
                </li>
                <li className="about-expertise-point">
                  <span className="about-expertise-point-icon" aria-hidden="true">✓</span>
                  <p>Hand-selected Ceylon sapphires, rubies, moonstones, and other rare stones.</p>
                </li>
                <li className="about-expertise-point">
                  <span className="about-expertise-point-icon" aria-hidden="true">✓</span>
                  <p>Transparent communication for wholesale buyers, jewelers, and collectors.</p>
                </li>
                <li className="about-expertise-point">
                  <span className="about-expertise-point-icon" aria-hidden="true">✓</span>
                  <p>Global buyer support by phone, email, and WhatsApp.</p>
                </li>
              </ul>

              <p className="about-expertise-cta">
                Explore our <a href="#gemstones">Sri Lankan gemstone collection</a> or <a href="#contact">speak with our team</a> for current parcel availability.
              </p>
            </div>

            <div className="about-faq" id="faq">
              <h4>FAQ about Sri Lankan Gem Stones</h4>

              <article className="about-faq-item">
                <div className="about-faq-head">
                  <span className="about-faq-q" aria-hidden="true">Q1</span>
                  <h5>Why are Sri Lankan gemstones highly valued?</h5>
                </div>
                <p>
                  Sri Lankan gemstones are known for strong natural color, clarity, and trusted origin, especially stones mined in the Rathnapura region.
                </p>
              </article>

              <article className="about-faq-item">
                <div className="about-faq-head">
                  <span className="about-faq-q" aria-hidden="true">Q2</span>
                  <h5>Which gemstone types does Kamara Selections offer?</h5>
                </div>
                <p>
                  We offer Ceylon blue, yellow and violet sapphires, rubies, blue moonstone, cat&apos;s eye chrysoberyl, alexandrite, and imperial topaz from Sri Lankan sources.
                </p>
              </article>

              <article className="about-faq-item">
                <div className="about-faq-head">
                  <span className="about-faq-q" aria-hidden="true">Q3</span>
                  <h5>Can international buyers purchase from Kamara Selections?</h5>
                </div>
                <p>
                  Yes. We work with buyers worldwide and support inquiry handling through direct contact channels.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
