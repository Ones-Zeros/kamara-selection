// ─── Central gemstone catalogue ──────────────────────────────────────
// Language-neutral metadata for each authentic Sri Lankan (Ceylon) gem.
// Display copy (name / tagline / description) lives in the i18n files under
// `gemstones.<id>` so it can be translated and managed in one place.

import blueSapphireImage from '../assets/images/BlueSapphireGen.jpg';
import yellowSapphireImage from '../assets/images/YellowSapphireGen.jpg';
import violetSapphireImage from '../assets/images/Violet Sapphire.jpeg';
import rubyImage from '../assets/images/RubyGen.jpg';
import catseyeImage from '../assets/images/CatseyeGen.jpg';
import alexandriteImage from '../assets/images/alexandritegreen.jpeg';
import moonstoneImage from '../assets/images/slmoonstone.jpeg';
import topazImage from '../assets/images/YellowTopazGen.jpg';

// `accent` tints each card's badge/glow. `hardness` is the Mohs scale value.
export const gemstones = [
  {
    id: 'sapphire',
    image: blueSapphireImage,
    accent: '#1e5fd0', // royal cornflower blue
    hardness: '9',
    focus: 'center center',
  },
  {
    id: 'yellowSapphire',
    image: yellowSapphireImage,
    accent: '#edb400', // golden canary yellow
    hardness: '9',
    focus: 'center center',
  },
  {
    id: 'violetSapphire',
    image: violetSapphireImage,
    accent: '#8a4bd6', // violet / purple
    hardness: '9',
    focus: 'center 45%',
  },
  {
    id: 'ruby',
    image: rubyImage,
    accent: '#c41230', // pigeon-blood red
    hardness: '9',
    focus: 'center center',
  },
  {
    id: 'catseye',
    image: catseyeImage,
    accent: '#a8871f', // honey-gold chrysoberyl
    hardness: '8.5',
    focus: 'center center',
  },
  {
    id: 'alexandrite',
    image: alexandriteImage,
    accent: '#2f8f4e', // daylight emerald green
    hardness: '8.5',
    focus: 'center 45%',
  },
  {
    id: 'moonstone',
    image: moonstoneImage,
    accent: '#9db6e6', // soft blue adularescence
    hardness: '6',
    focus: 'center 45%',
  },
  {
    id: 'topaz',
    image: topazImage,
    accent: '#e0821a', // warm amber-gold
    hardness: '8',
    focus: 'center center',
  },
];

export default gemstones;
