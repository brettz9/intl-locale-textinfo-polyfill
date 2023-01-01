/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// Private vars - star
const _regexEscape = /([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g; // eslint-disable-line no-useless-escape
const _regexParseLocale = /^([a-zA-Z]+)([-a-zA-Z]*)$/;
// Private vars - end

class Locale {  // eslint-disable-line consistent-this

  constructor (locale) {
    if (typeof locale !== 'string') {
      throw new TypeError('A string argument is expected');
    }
    if (!_regexParseLocale.test(locale)) {
      throw new RangeError('A proper locale must be provided');
    }
    this._locale = locale;
  }

  // Private functions - star
  static _escapeRegExpPattern (str) {
    if (typeof str !== 'string') {
      return str;
    }
    return str.replace(_regexEscape, '\\$1');
  }

  static _toLowerCase (str, reserveReturnValue) {
    if (typeof str !== 'string') {
      return reserveReturnValue && str;
    }
    return str.toLowerCase();
  }

  static _toUpperCase (str, reserveReturnValue) {
    if (typeof str !== 'string') {
      return reserveReturnValue && str;
    }
    return str.toUpperCase();
  }

  static _trim (str, delimiter, reserveReturnValue) {
    const patterns = [];
    let regexp;
    const addPatterns = function (pattern) {
      // Build trim RegExp pattern and push it to patterns array
      patterns.push('^' + pattern + '+|' + pattern + '+$');
    };

    // fix reserveReturnValue value
    if (typeof delimiter === 'boolean') {
      reserveReturnValue = delimiter;
      delimiter = null;
    }

    if (typeof str !== 'string') {
      return reserveReturnValue && str;
    }

    // Trim based on delimiter array values
    if (Array.isArray(delimiter)) {
      // Loop through delimiter array
      delimiter.map((item) => {
        // Escape delimiter to be valid RegExp Pattern
        const pattern = this._escapeRegExpPattern(item);
        // Push pattern to patterns array
        addPatterns(pattern);
      });
    }

    // Trim based on delimiter string value
    if (typeof delimiter === 'string') {
      // Escape delimiter to be valid RegExp Pattern
      const patternDelimiter = this._escapeRegExpPattern(delimiter);
      // push pattern to patterns array
      addPatterns(patternDelimiter);
    }

    // If delimiter  is not defined, Trim white spaces
    if (!delimiter) {
      // Push white space pattern to patterns array
      addPatterns('\\s');
    }

    // Build RegExp pattern
    const pattern = '(' + patterns.join('|') + ')';
    // Build RegExp object
    regexp = new RegExp(pattern, 'g');

    // trim string for all patterns
    while (str.match(regexp)) {
      str = str.replace(regexp, '');
    }

    // Return trim string
    return str;
  }

  static _parseLocale (strLocale) {
    var matches =  _regexParseLocale.exec(strLocale); // exec regex
    let parsedLocale;
    let lang;
    let countryCode;

    if (!strLocale || !matches) {
      return;
    }

    // fix countryCode string by trimming '-' and '_'
    matches[2] = this._trim(matches[2], ['-', '_']);

    lang = this._toLowerCase(matches[1]);
    countryCode = this._toUpperCase(matches[2]) || countryCode;

    // object with lang, countryCode properties
    parsedLocale = {
      lang,
      countryCode
    };

    // return parsed locale object
    return parsedLocale;
  }
  // Private functions - End

  _isRtlLang () {
    const objLocale = this.constructor._parseLocale(this._locale);

    // return true if the intel string lang exists in the BID RTL LANGS array else return false
    return (this.constructor._BIDI_RTL_LANGS.indexOf(objLocale.lang) >= 0);
  }

  // Public functions - star
  get textInfo () {
    // return 'rtl' if the intel string lang exists in the BID RTL LANGS array else return 'ltr'
    const direction = this._isRtlLang() ? 'rtl' : 'ltr';
    return { direction };
  }

  // Public functions - End
}

// Why not working as static property
Locale._BIDI_RTL_LANGS = [
  // Const BIDI_RTL_LANGS Array
  // BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
  // Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
  'ae',	/* Avestan */
  'ar',   /* 'العربية', Arabic */
  'arc',  /* Aramaic */
  'bcc',  /* 'بلوچی مکرانی', Southern Balochi */
  'bqi',  /* 'بختياري', Bakthiari */
  'ckb',  /* 'Soranî / کوردی', Sorani */
  'dv',   /* Dhivehi */
  'fa',   /* 'فارسی', Persian */
  'glk',  /* 'گیلکی', Gilaki */
  'he',   /* 'עברית', Hebrew */
  'ku',   /* 'Kurdî / كوردی', Kurdish */
  'mzn',  /* 'مازِرونی', Mazanderani */
  'nqo',  /* N'Ko */
  'pnb',  /* 'پنجابی', Western Punjabi */
  'prs',  /* 'دری', Darī */
  'ps',   /* 'پښتو', Pashto, */
  'sd',   /* 'سنڌي', Sindhi */
  'ug',   /* 'Uyghurche / ئۇيغۇرچە', Uyghur */
  'ur',  /* 'اردو', Urdu */
  'yi'  /* 'ייִדיש', Yiddish */
];

export default Locale;
