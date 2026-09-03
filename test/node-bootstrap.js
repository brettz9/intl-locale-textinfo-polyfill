import Locale from '../lib/Locale.js';

// @ts-expect-error Overwriting the read-only built-in with the polyfill implementation
Intl.Locale = Locale;
