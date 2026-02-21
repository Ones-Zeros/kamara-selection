import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-tagline">{t('footer.tagline')}</p>
        <div className="footer-divider" />
        <p className="footer-copyright">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
