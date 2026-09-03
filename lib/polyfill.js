import Locale from './Locale.js';

if (typeof Intl === 'undefined') {
  // @ts-expect-error Not a complete polyfill
  globalThis.Intl = {};
}

// @ts-expect-error Overwriting the read-only built-in with the polyfill implementation
Intl.Locale = Locale;
