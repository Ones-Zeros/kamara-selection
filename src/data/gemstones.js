// ─── Central gemstone catalogue ──────────────────────────────────────
// Eight of the most popular gems found in Sri Lanka (Ceylon). Studio photos
// live in assets/images/stones; display copy (name / tagline / description)
// lives in the i18n files under `gemstones.<id>` for one-place management.

import sapphireImage from '../assets/images/stones/sapphire.png';
import rubyImage from '../assets/images/stones/ruby.png';
import catseyeImage from '../assets/images/stones/cymophane-cats-eye.png';
import alexandriteImage from '../assets/images/stones/alexandrite.png';
import moonstoneImage from '../assets/images/stones/moonstone.png';
import spinelImage from '../assets/images/stones/spinel.png';
import aquamarineImage from '../assets/images/stones/aquamarine.png';
import topazImage from '../assets/images/stones/topaz.png';

// `accent` tints each card's dot + hover glow, matched to the stone's colour.
export const gemstones = [
  { id: 'sapphire',    image: sapphireImage,    accent: '#2440e0' }, // royal blue
  { id: 'ruby',        image: rubyImage,        accent: '#d0182e' }, // fiery red
  { id: 'catseye',     image: catseyeImage,     accent: '#e2a90c' }, // golden chatoyant
  { id: 'alexandrite', image: alexandriteImage, accent: '#c62766' }, // colour-change magenta
  { id: 'moonstone',   image: moonstoneImage,   accent: '#8098d4' }, // periwinkle sheen
  { id: 'spinel',      image: spinelImage,      accent: '#9068c8' }, // violet
  { id: 'aquamarine',  image: aquamarineImage,  accent: '#23a6cf' }, // ocean cyan
  { id: 'topaz',       image: topazImage,       accent: '#e8760f' }, // amber-gold
];

export default gemstones;
