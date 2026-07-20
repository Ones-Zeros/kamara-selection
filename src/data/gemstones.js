// ─── Central gemstone catalogue ──────────────────────────────────────
// Eight of the most popular gems found in Sri Lanka (Ceylon). Studio photos
// live in assets/images/stones; display copy (name / tagline / description)
// lives in the i18n files under `gemstones.<id>` for one-place management.

import sapphireImage from '../assets/images/stones/moonstone-new.png';
import rubyImage from '../assets/images/stones/alexandrite-new.png';
//import catseyeImage from '../assets/images/stones/ruby.png';
import alexandriteImage from '../assets/images/stones/cymophane-cats-eye-new.png';
//import moonstoneImage from '../assets/images/stones/moonstone-new.png';
//import spinelImage from '../assets/images/stones/spinel.png';
import aquamarineImage from '../assets/images/stones/aquamarine-new.png';
//import topazImage from '../assets/images/stones/topaz.png';
import rubyDiamond from '../assets/images/stones/ruby-diamond.png';

// `accent` tints each card's dot + hover glow, matched to the stone's colour.
export const gemstones = [
  { id: 'sapphire',    image: sapphireImage,    accent: '#2440e0', class: 'sapphire' }, // royal blue
  { id: 'ruby',        image: rubyImage,        accent: '#d0182e', class: 'ruby' }, // fiery red
  // { id: 'catseye',     image: catseyeImage,     accent: '#e2a90c', class: 'catseye' }, // golden chatoyant
  { id: 'alexandrite', image: alexandriteImage, accent: '#e2a90c', class: 'alexandrite' }, // colour-change magenta
  //{ id: 'moonstone',   image: moonstoneImage,   accent: '#8098d4', class: 'moonstone' }, // periwinkle sheen
  //{ id: 'spinel',      image: spinelImage,      accent: '#9068c8', class: 'spinel' }, // violet
  { id: 'aquamarine',  image: aquamarineImage,  accent: '#23a6cf', class: 'aquamarine' }, // ocean cyan
  //{ id: 'topaz',       image: topazImage,       accent: '#e8760f', class: 'topaz' }, // amber-gold
  { id: 'rubyDiamond', image: rubyDiamond,      accent: '#d0182e', class: 'rubyDiamond' }, // ruby-diamond
];

export default gemstones;
