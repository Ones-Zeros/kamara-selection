import { useTranslation } from 'react-i18next';
import './Gemstones.css';

const Gemstones = () => {
  const { t } = useTranslation();

  const gemstones = [
    {
      id: 'sapphire',
      name: t('gemstones.sapphire.name'),
      description: t('gemstones.sapphire.description'),
      color: '#0f52ba',
      gradient: 'linear-gradient(135deg, #667eea 0%, #0f52ba 100%)'
    },
    {
      id: 'ruby',
      name: t('gemstones.ruby.name'),
      description: t('gemstones.ruby.description'),
      color: '#e0115f',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #e0115f 100%)'
    },
    {
      id: 'emerald',
      name: t('gemstones.emerald.name'),
      description: t('gemstones.emerald.description'),
      color: '#50c878',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #50c878 100%)'
    },
    {
      id: 'topaz',
      name: t('gemstones.topaz.name'),
      description: t('gemstones.topaz.description'),
      color: '#ffcc00',
      gradient: 'linear-gradient(135deg, #ffd89b 0%, #ffcc00 100%)'
    },
    {
      id: 'catseye',
      name: t('gemstones.catseye.name'),
      description: t('gemstones.catseye.description'),
      color: '#8b7355',
      gradient: 'linear-gradient(135deg, #c9a068 0%, #8b7355 100%)'
    },
    {
      id: 'alexandrite',
      name: t('gemstones.alexandrite.name'),
      description: t('gemstones.alexandrite.description'),
      color: '#9932cc',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #9932cc 100%)'
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
              <div 
                className="gemstone-image" 
                style={{ background: gem.gradient }}
              >
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
