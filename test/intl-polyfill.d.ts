/**
 * Ambient augmentation for the test suite.
 *
 * `test/node-bootstrap.js` assigns this package's `Locale` implementation onto
 * the global `Intl.Locale`, so the specs exercise `Intl.Locale` instances with
 * both the standard `getTextInfo()` method and the implementation-internal
 * `_isRtlLang()` helper. This file has no imports/exports, so it is a global
 * script and the augmentation applies across the whole test compilation.
 */
declare namespace Intl {
  interface Locale {
    getTextInfo(): {direction: "ltr" | "rtl"};
    _isRtlLang(): boolean;
  }
}
