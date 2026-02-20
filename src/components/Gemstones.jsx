import { useTranslation } from 'react-i18next';
import './Gemstones.css';

const Gemstones = () => {
  const { t } = useTranslation();

  const gemstones = [
    {
      id: 'sapphire',
      name: t('gemstones.sapphire.name'),
      description: t('gemstones.sapphire.description'),
      image: '/images/gem-sapphire.jpg',
      color: '#0f52ba'
    },
    {
      id: 'ruby',
      name: t('gemstones.ruby.name'),
      description: t('gemstones.ruby.description'),
      image: '/images/gem-2.jpg',
      color: '#e0115f'
    },
    {
      id: 'emerald',
      name: t('gemstones.emerald.name'),
      description: t('gemstones.emerald.description'),
      image: '/images/gem-3.jpg',
      color: '#50c878'
    },
    {
      id: 'topaz',
      name: t('gemstones.topaz.name'),
      description: t('gemstones.topaz.description'),
      image: '/images/gem-4.jpg', 
      color: '#ffcc00'
    },
    {
      id: 'catseye',
      name: t('gemstones.catseye.name'),
      description: t('gemstones.catseye.description'),
      image: '/images/gem-5.jpg',
      color: '#8b7355'
    },
    {
      id: 'alexandrite',
      name: t('gemstones.alexandrite.name'),
      description: t('gemstones.alexandrite.description'),
      image: '/images/gem-6.jpg',
      color: '#9932cc'
    }
  ];

  return (
    <section className="gemstones" id="gemstones">
      <div className="gemstones-container">
        <h2 className="gemstones-title">{t('gemstones.title')}</h2>
        <p className="gemstones-subtitle">{t('gemstones.subtitle')}</p>
        
        <div className="gemstones-grid">
          {gemstones.map((gem) => (
            <div key={gem.id} className="gemstone-card">
              <div className="gemstone-image-container">
                {gem.image ? (
                  <img src={gem.image} alt={gem.name} className="gemstone-image" />
                ) : (
                  <div 
                    className="gemstone-image" 
                    style={{ background: gem.gradient, width: '100%', height: '100%' }}
                  ></div>
                )}
                <div className="gemstone-shine"></div>
              </div>
              <div className="gemstone-info">
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
