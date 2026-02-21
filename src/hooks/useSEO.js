import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const setOrCreateMeta = (attribute, key, value) => {
  if (!value) return;
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', value);
};

const useSEO = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = `${t('hero.title')} | Kamara Selection`;
    const description = t('hero.subtitle');
    const url = 'https://www.kamaraselections.com/';
    const image = 'https://www.kamaraselections.com/images/gem-sapphire.jpg';

    document.title = title;
    document.documentElement.lang = i18n.language || 'en';

    setOrCreateMeta('name', 'description', description);
    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', description);
    setOrCreateMeta('property', 'og:url', url);
    setOrCreateMeta('property', 'og:image', image);
    setOrCreateMeta('name', 'twitter:title', title);
    setOrCreateMeta('name', 'twitter:description', description);
    setOrCreateMeta('name', 'twitter:image', image);
    setOrCreateMeta('property', 'og:locale', i18n.language || 'en');
  }, [t, i18n.language]);
};

export default useSEO;
