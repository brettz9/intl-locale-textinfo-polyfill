export default Locale;
declare class Locale {
    /**
     * @param {null|undefined|string} [str]
     * @returns {null|undefined|string}
     */
    static _escapeRegExpPattern(str?: null | undefined | string): null | undefined | string;
    /**
     * @param {string|null} [str]
     * @param {boolean} [reserveReturnValue]
     */
    static _toLowerCase(str?: string | null | undefined, reserveReturnValue?: boolean | undefined): string | false | null | undefined;
    /**
     * @param {string|null} [str]
     * @param {boolean} [reserveReturnValue]
     */
    static _toUpperCase(str?: string | null | undefined, reserveReturnValue?: boolean | undefined): string | false | null | undefined;
    /**
     * @param {string|null} [str]
     * @param {string|null|string[]|boolean} [delimiter]
     * @param {boolean} [reserveReturnValue]
     */
    static _trim(str?: string | null | undefined, delimiter?: string | boolean | string[] | null | undefined, reserveReturnValue?: boolean | undefined): string | null | undefined;
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
    static _parseLocale(strLocale?: string | null | undefined): {
        lang: string;
        script: string | undefined;
        countryCode: string | undefined;
    } | undefined;
    /**
     * @param {string} locale
     */
    constructor(locale: string);
    _locale: string;
    _isRtlLang(): boolean;
    get textInfo(): {
        direction: string;
    };
}
declare namespace Locale {
    let _RTL_SCRIPTS: string[];
    let _BIDI_RTL_LANGS: string[];
}
//# sourceMappingURL=Locale.d.ts.map