import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">{t('contact.title')}</h2>
        <p className="contact-description">{t('contact.description')}</p>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <h3>{t('contact.location')}</h3>
            <p>{t('contact.locationValue')}</p>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <h3>{t('contact.email')}</h3>
            <p>{t('contact.emailValue')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
