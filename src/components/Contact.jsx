import { useTranslation } from 'react-i18next';
import './Contact.css';
import ralphPortrait from '../assets/images/ralphamos.jpeg';
import kamalPortrait from '../assets/images/kamal.png';

const Contact = () => {
  const { t } = useTranslation();
  const phoneValue = t('contact.phoneValue');
  const whatsappValue = t('contact.whatsappValue');
  const websiteValue = t('contact.websiteValue');
  const emailValue = t('contact.emailValue');
  const secondaryName = t('contact.secondaryName');
  const secondaryPhoneValue = t('contact.secondaryPhoneValue');

  // Helper to clean phone numbers for links
  const cleanPhone = (str) => str.replace(/[^\d+]/g, '');

  const phoneHref = `tel:${cleanPhone(phoneValue)}`;
  const whatsappHref = `https://wa.me/${cleanPhone(whatsappValue).replace('+', '')}`;
  const secondaryPhoneHref = `tel:${cleanPhone(secondaryPhoneValue)}`;
  const secondaryWhatsappHref = `https://wa.me/${cleanPhone(secondaryPhoneValue).replace('+', '')}`;
  const websiteHref = websiteValue.startsWith('http')
    ? websiteValue
    : `https://${websiteValue}`;
  const emailHref = `mailto:${emailValue}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section className="contact" id="contact">
      {/* Decorative watermark */}
      <div className="contact-watermark" aria-hidden="true">CONTACT</div>

      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">Get In Touch</span>
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="contact-description">{t('contact.description')}</p>
        </div>

        <div className="contact-primary-row">
          <div className="contact-primary-person">
            <img
              className="contact-primary-photo"
              src={ralphPortrait}
              alt="Portrait of Ralph Amos"
              loading="lazy"
            />
            <div>
              <p className="contact-highlight-name">Ralph Amos</p>
              <div className="contact-person-links">
                <a className="contact-highlight-phone" href={phoneHref}>
                  {phoneValue}
                </a>
                <a className="contact-highlight-email" href={emailHref}>
                  {emailValue}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-primary-actions">
            <a className="contact-highlight-btn" href={phoneHref}>Call</a>
            <a className="contact-highlight-btn secondary" href={whatsappHref}>WhatsApp</a>
            <a className="contact-highlight-btn ghost" href={emailHref}>Email</a>
          </div>
        </div>

        <div className="contact-highlight contact-secondary-card">
          <div className="contact-highlight-person">
            <img
              className="contact-primary-photo"
              src={kamalPortrait}
              alt="Portrait of Kamal Addaraarachchi"
              loading="lazy"
            />
            <div>
              <p className="contact-highlight-name">{secondaryName}</p>
              <div className="contact-person-links">
                <a className="contact-highlight-phone" href={secondaryPhoneHref}>
                  {secondaryPhoneValue}
                </a>
                <a className="contact-highlight-email" href={emailHref}>
                  {emailValue}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-highlight-actions">
            <a className="contact-highlight-btn" href={secondaryPhoneHref}>Call</a>
            <a className="contact-highlight-btn secondary" href={secondaryWhatsappHref}>WhatsApp</a>
            <a className="contact-highlight-btn ghost" href={emailHref}>Email</a>
          </div>
        </div>
        
        <div className="contact-content-wrapper">
          <div className="contact-info-column">
            <h3>Contact Details</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>{t('contact.location')}</h4>
                <p>{t('contact.locationValue')}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>{t('contact.phone')}</h4>
                <a className="contact-link" href={phoneHref}>
                  {phoneValue}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">👤</div>
              <div>
                <h4>{secondaryName}</h4>
                <a className="contact-link" href={secondaryPhoneHref}>
                  {secondaryPhoneValue}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div>
                <h4>{t('contact.whatsapp')}</h4>
                <a className="contact-link" href={whatsappHref}>
                  {whatsappValue}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🌐</div>
              <div>
                <h4>{t('contact.website')}</h4>
                <a className="contact-link" href={websiteHref} target="_blank" rel="noreferrer">
                  {websiteValue}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>{t('contact.email')}</h4>
                <a className="contact-link" href={emailHref}>
                  {emailValue}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-column">
            <h3>{t('contact.title')}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder={t('contact.form.name')} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder={t('contact.form.email')} required />
              </div>
              <div className="form-group">
                <input type="text" placeholder={t('contact.form.subject')} required />
              </div>
              <div className="form-group">
                <textarea placeholder={t('contact.form.message')} rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">{t('contact.form.submit')}</button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.970679636653!2d79.90098227602336!3d6.894119318742668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a2e7077a7df%3A0xa1f1f1d1f1f1f1f1!2s26%2F6%20Rajamal%20Uyana%20Rd%2C%20Sri%20Jayawardenepura%20Kotte!5e0!3m2!1sen!2slk!4v1707987654321!5m2!1sen!2slk" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kamara Selections location map in Sri Jayawardenepura Kotte"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;
