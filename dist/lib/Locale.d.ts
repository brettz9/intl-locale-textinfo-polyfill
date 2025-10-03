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
    static _toLowerCase(str?: string | null, reserveReturnValue?: boolean): string | false | null | undefined;
    /**
     * @param {string|null} [str]
     * @param {boolean} [reserveReturnValue]
     */
    static _toUpperCase(str?: string | null, reserveReturnValue?: boolean): string | false | null | undefined;
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
    static _parseLocale(strLocale?: string | null): undefined | {
        lang: string;
        script: string | undefined;
        countryCode: string | undefined;
    };
    /**
     * @param {string} locale
     */
    constructor(locale: string);
    _locale: string;
    _isRtlLang(): boolean;
    getTextInfo(): {
        direction: string;
    };
}
declare namespace Locale {
    let _RTL_SCRIPTS: string[];
    let _BIDI_RTL_LANGS: string[];
}
//# sourceMappingURL=Locale.d.ts.map