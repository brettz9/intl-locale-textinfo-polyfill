import Locale from './Locale.js';

if (typeof Intl === 'undefined') {
  globalThis.Intl = {};
}

if (typeof Intl.Locale === 'undefined') {
  Intl.Locale = Locale;
}
