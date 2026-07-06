import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://www.kamaraselections.com/';
const SITE_NAME = 'Kamara Selections';
const PRIMARY_KEYWORD = 'Best Sri Lankan Gem Stones';
const META_DESCRIPTION = 'Best Sri Lankan gem stones from Kamara Selections. Discover premium Ceylon sapphires, rubies, moonstones, and rare gems sourced direct from Rathnapura mines.';
const SOCIAL_DESCRIPTION = 'Explore premium Sri Lankan gem stones sourced directly from Rathnapura, the world-famous City of Gems.';
const SOCIAL_IMAGE = 'https://www.kamaraselections.com/images/gem-sapphire.jpg';

const LOCALE_MAP = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  pt: 'pt_PT',
  nl: 'nl_NL',
  sv: 'sv_SE',
  pl: 'pl_PL'
};

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

const setOrCreateLink = (rel, href) => {
  if (!href) return;
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const setStructuredData = (id, data) => {
  if (!id || !data) return;
  let tag = document.getElementById(id);
  if (!tag) {
    tag = document.createElement('script');
    tag.id = id;
    tag.type = 'application/ld+json';
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
};

const useSEO = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const title = `${PRIMARY_KEYWORD} | ${SITE_NAME}`;
    const locale = LOCALE_MAP[i18n.language] || LOCALE_MAP.en;

    document.title = title;
    document.documentElement.lang = i18n.language || 'en';

    setOrCreateMeta('name', 'description', META_DESCRIPTION);
    setOrCreateMeta('name', 'keywords', 'Best Sri Lankan gem stones, Sri Lankan gemstones, Ceylon sapphires, Rathnapura gems, premium Sri Lankan gems');
    setOrCreateMeta('name', 'author', SITE_NAME);
    setOrCreateMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    setOrCreateMeta('property', 'og:title', title);
    setOrCreateMeta('property', 'og:description', SOCIAL_DESCRIPTION);
    setOrCreateMeta('property', 'og:type', 'website');
    setOrCreateMeta('property', 'og:url', SITE_URL);
    setOrCreateMeta('property', 'og:image', SOCIAL_IMAGE);
    setOrCreateMeta('property', 'og:site_name', SITE_NAME);
    setOrCreateMeta('property', 'og:locale', locale);

    setOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    setOrCreateMeta('name', 'twitter:title', title);
    setOrCreateMeta('name', 'twitter:description', SOCIAL_DESCRIPTION);
    setOrCreateMeta('name', 'twitter:image', SOCIAL_IMAGE);

    setOrCreateLink('canonical', SITE_URL);

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}#website`,
          url: SITE_URL,
          name: SITE_NAME,
          description: 'Best Sri Lankan gem stones sourced directly from Rathnapura.',
          inLanguage: 'en'
        },
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}#organization`,
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}logo.png`
          },
          image: SOCIAL_IMAGE,
          email: 'info@kamaraselections.com',
          telephone: '+94 76 668 4970'
        },
        {
          '@type': 'JewelryStore',
          '@id': `${SITE_URL}#business`,
          name: SITE_NAME,
          url: SITE_URL,
          image: SOCIAL_IMAGE,
          description: 'Premium Sri Lankan gem stones including Ceylon sapphires, rubies, moonstones, topaz, cat\'s eye, and alexandrite.',
          telephone: '+94 76 668 4970',
          priceRange: '$$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '26/6, Rajamal Uyana, Baddagana Road, Pitakotte',
            addressCountry: 'LK'
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              contactType: 'sales',
              telephone: '+94 76 668 4970',
              email: 'info@kamaraselections.com',
              availableLanguage: ['English']
            },
            {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              telephone: '+94 77 765 5685',
              email: 'info@kamaraselections.com',
              availableLanguage: ['English']
            }
          ],
          areaServed: [
            {
              '@type': 'Country',
              name: 'Sri Lanka'
            },
            {
              '@type': 'Country',
              name: 'Switzerland'
            }
          ]
        },
        {
          '@type': 'ItemList',
          '@id': `${SITE_URL}#gem-list`,
          name: 'Best Sri Lankan Gem Stones Collection',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Ceylon Blue Sapphire' },
            { '@type': 'ListItem', position: 2, name: 'Yellow Sapphire' },
            { '@type': 'ListItem', position: 3, name: 'Violet Sapphire' },
            { '@type': 'ListItem', position: 4, name: 'Ceylon Ruby' },
            { '@type': 'ListItem', position: 5, name: 'Cat\'s Eye Chrysoberyl' },
            { '@type': 'ListItem', position: 6, name: 'Alexandrite' },
            { '@type': 'ListItem', position: 7, name: 'Blue Moonstone' },
            { '@type': 'ListItem', position: 8, name: 'Imperial Topaz' }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What makes Kamara Selections one of the best sources for Sri Lankan gem stones?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Kamara Selections sources directly from Rathnapura with strict quality checks and transparent mine-to-market handling.'
              }
            },
            {
              '@type': 'Question',
              name: 'Which Sri Lankan gemstones are available?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our collection includes Ceylon blue sapphires, rubies, moonstones, yellow topaz, cat\'s eye, and alexandrite.'
              }
            },
            {
              '@type': 'Question',
              name: 'Do you provide worldwide support for gem buyers?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We support collectors and jewelers internationally and can be reached by phone, email, and WhatsApp.'
              }
            }
          ]
        }
      ]
    };

    setStructuredData('kamara-structured-data', structuredData);
  }, [i18n.language]);
};

export default useSEO;
