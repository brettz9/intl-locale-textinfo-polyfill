declare namespace Intl {
  class Locale {
    constructor(locale: string);
    getTextInfo(): {
        direction: "ltr"|"rtl";
    };
  }
}
