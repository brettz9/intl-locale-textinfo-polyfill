declare namespace Intl {
  class Locale {
    constructor(locale: string);
    get textInfo(): {
        direction: "ltr"|"rtl";
    };
  }
}
