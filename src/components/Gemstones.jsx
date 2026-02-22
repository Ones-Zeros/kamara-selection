import { useTranslation } from 'react-i18next';
import blueSapphireImage from '../assets/images/BlueSapphireGen.png';
import rubyImage from '../assets/images/RubyGen.png';
import moonstoneImage from '../assets/images/moonstone.png';
import topazImage from '../assets/images/YellowTopazGen.png';
import catseyeImage from '../assets/images/CatseyeGen.png';
import alexandriteImage from '../assets/images/AlexandriteGen.png';
import './Gemstones.css';

const Gemstones = () => {
  const { t } = useTranslation();

  const gemstones = [
    {
      id: 'sapphire',
      name: t('gemstones.sapphire.name'),
      description: t('gemstones.sapphire.description'),
      image: blueSapphireImage,
      color: '#0f52ba'
    },
    {
      id: 'ruby',
      name: t('gemstones.ruby.name'),
      description: t('gemstones.ruby.description'),
      image: rubyImage,
      color: '#e0115f'
    },
    {
      id: 'moonstone',
      name: t('gemstones.moonstone.name'),
      description: t('gemstones.moonstone.description'),
      image: moonstoneImage,
      color: '#d8e9ff'
    },
    {
      id: 'topaz',
      name: t('gemstones.topaz.name'),
      description: t('gemstones.topaz.description'),
      image: topazImage,
      color: '#ffcc00'
    },
    {
      id: 'catseye',
      name: t('gemstones.catseye.name'),
      description: t('gemstones.catseye.description'),
      image: catseyeImage,
      color: '#8b7355'
    },
    {
      id: 'alexandrite',
      name: t('gemstones.alexandrite.name'),
      description: t('gemstones.alexandrite.description'),
      image: alexandriteImage,
      color: '#9932cc'
    }
  ];

  return (
    <section className="gemstones" id="gemstones">
      {/* Decorative watermark */}
      <div className="gemstones-watermark" aria-hidden="true">GEMS</div>

      <div className="gemstones-container">
        <div className="gemstones-header">
          <span className="gemstones-tag">Our Collection</span>
          <h2 className="gemstones-title">{t('gemstones.title')}</h2>
          <p className="gemstones-subtitle">{t('gemstones.subtitle')}</p>
        </div>

        <div className="gemstones-grid">
          {gemstones.map((gem) => (
            <div key={gem.id} className="gemstone-card">
              <div className="gemstone-image-container">
                {gem.image ? (
                  <img src={gem.image} alt={gem.name} className="gemstone-image" />
                ) : (
                  <div className="gemstone-image" style={{ background: `${gem.color}22` }} />
                )}
                <div className="gemstone-shine" />
              </div>
              <div className="gemstone-info">
                <div className="gemstone-divider" />
                <h3 className="gemstone-name">{gem.name}</h3>
                <p className="gemstone-description">{gem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gemstones;
