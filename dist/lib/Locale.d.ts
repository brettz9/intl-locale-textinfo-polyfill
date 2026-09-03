/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
export type LocaleInfo = {
    lang: string;
    script: string | undefined;
    countryCode: string | undefined;
};
declare class Locale {
    _locale: string;
    /**
     * @param {string} locale
     */
    constructor(locale: string);
    /**
     * @param {null|undefined|string} [str]
     * @returns {null|undefined|string}
     */
    static _escapeRegExpPattern(str?: null | undefined | string): null | undefined | string;
    /**
     * @param {string|null} [str]
     * @param {boolean} [reserveReturnValue]
     */
    static _toLowerCase(str?: string | null, reserveReturnValue?: boolean): string | null | undefined;
    /**
     * @param {string|null} [str]
     * @param {boolean} [reserveReturnValue]
     */
    static _toUpperCase(str?: string | null, reserveReturnValue?: boolean): string | null | undefined;
    /**
     * @param {string|null} [str]
     * @param {string|null|string[]|boolean} [delimiter]
     * @param {boolean} [reserveReturnValue]
     */
    static _trim(str?: string | null, delimiter?: string | null | string[] | boolean, reserveReturnValue?: boolean): string | null | undefined;
    /**
     * @typedef {{
     *   lang: string,
     *   script: string|undefined,
     *   countryCode: string|undefined
     * }} LocaleInfo
     */
    /**
     * @param {string|null} [strLocale]
     * @returns {undefined|LocaleInfo}
     */
    static _parseLocale(strLocale?: string | null): undefined | LocaleInfo;
    _isRtlLang(): boolean;
    /**
     * @returns {{direction: "ltr"|"rtl"}}
     */
    getTextInfo(): {
        direction: "ltr" | "rtl";
    };
}
declare namespace Locale {
    var _RTL_SCRIPTS: string[];
    var _BIDI_RTL_LANGS: string[];
}
export default Locale;
//# sourceMappingURL=Locale.d.ts.map