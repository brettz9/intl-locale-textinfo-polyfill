import Locale from './Locale.js';

if (typeof Intl === 'undefined') {
  // @ts-expect-error Not a complete polyfill
  globalThis.Intl = {};
}

Intl.Locale = Locale;
