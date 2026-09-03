/**
 * Ambient types for the side-effecting polyfill entry point (`lib/polyfill.js`),
 * which assigns this package's `Locale` implementation to the global
 * `Intl.Locale`.
 *
 * Importing `intl-locale-textinfo-polyfill/lib/polyfill.js` augments the global
 * `Intl.Locale` interface with the `getTextInfo()` method that the polyfill
 * installs. This merges as an overload with the standard-library declaration
 * where one is present, so it is safe regardless of the consumer's `lib`
 * setting.
 */
export {};

declare global {
  namespace Intl {
    interface Locale {
      /**
       * Returns an object with the text-direction information for the locale.
       * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
       */
      getTextInfo(): {direction: "ltr" | "rtl"};
    }
  }
}
