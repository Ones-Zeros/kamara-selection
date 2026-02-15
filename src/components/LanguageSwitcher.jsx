import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
    { code: 'pl', name: 'Polski', flag: '🇵🇱' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button 
        className={`language-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
      >
        <span className="current-flag">{currentLang.flag}</span>
        <span className="current-name">{currentLang.name}</span>
        <span className="arrow-icon">▼</span>
      </button>

      <div className={`language-dropdown ${isOpen ? 'open' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span style={{ marginRight: '10px' }}>{lang.flag}</span>
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
