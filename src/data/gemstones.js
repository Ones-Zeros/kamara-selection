// ─── Central gemstone catalogue ──────────────────────────────────────
// The gems shown on the site, sourced from the studio photos in
// assets/images/stones. Display copy (name / tagline / description) lives
// in the i18n files under `gemstones.<id>` for one-place management.

import sapphireImage from '../assets/images/stones/blue-sahhir.png';
import rubyImage from '../assets/images/stones/ruby.png';
import ruby2Image from '../assets/images/stones/ruby2.jpeg';
import redSpinelImage from '../assets/images/stones/red-spinel.png';
import cobaltSpinelImage from '../assets/images/stones/cobalt-spinel.png';
import alexandriteImage from '../assets/images/stones/alexandrite.png';

// `accent` tints each card's dot + hover glow, matched to the stone's colour.
export const gemstones = [
  { id: 'sapphire',     image: sapphireImage,     accent: '#2440e0', class: 'sapphire' },     // royal blue
  { id: 'ruby',         image: rubyImage,         accent: '#d0182e', class: 'ruby' },         // fiery red
  { id: 'ruby2',        image: ruby2Image,        accent: '#b3122a', class: 'ruby' },         // deep red
  { id: 'redSpinel',    image: redSpinelImage,    accent: '#e0344f', class: 'redSpinel' },    // rose-red
  { id: 'cobaltSpinel', image: cobaltSpinelImage, accent: '#1b3fd8', class: 'cobaltSpinel' }, // cobalt blue
  { id: 'alexandrite',  image: alexandriteImage,  accent: '#c62766', class: 'alexandrite' },  // colour-change
];

export default gemstones;
