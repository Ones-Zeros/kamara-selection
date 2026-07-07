import { useTranslation } from 'react-i18next';
import './Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo-wrap">
              <img src={logo} alt="Kamara Selections logo" className="footer-logo" />
            </span>
            <p className="footer-blurb">{t('footer.blurb')}</p>
          </div>

          <div className="footer-grid">
            <div className="footer-column">
              <h4 className="footer-heading">{t('footer.menuTitle')}</h4>
              <ul className="footer-links">
                <li><a href="#home">{t('footer.links.home')}</a></li>
                <li><a href="#about">{t('footer.links.about')}</a></li>
                <li><a href="#media">{t('footer.links.media')}</a></li>
                <li><a href="#gemstones">{t('footer.links.gemstones')}</a></li>
                <li><a href="#contact">{t('footer.links.contact')}</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">{t('footer.contactTitle')}</h4>
              <ul className="footer-links">
                <li><a href="mailto:info@kamaraselections.com">info@kamaraselections.com</a></li>
                <li><a href="tel:+41763789909">+41 76 378 9909</a></li>
                <li><a href="https://www.kamaraselections.com" target="_blank" rel="noreferrer">kamaraselections.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <div className="footer-meta">
            <p className="footer-copyright">© {year} {t('footer.copyright')}</p>
            <p className="footer-credits">
              Designed &amp; Developed by{' '}
              <a href="https://onzdev.com/" target="_blank" rel="noreferrer">
                Ones &amp; Zeros
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
