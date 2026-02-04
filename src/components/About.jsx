import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '💎',
      title: t('about.heritage'),
      description: t('about.heritageDesc')
    },
    {
      icon: '⭐',
      title: t('about.quality'),
      description: t('about.qualityDesc')
    },
    {
      icon: '✓',
      title: t('about.authentic'),
      description: t('about.authenticDesc')
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">{t('about.title')}</h2>
        <p className="about-description">{t('about.description')}</p>
        
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
