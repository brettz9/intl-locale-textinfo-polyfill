/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// Private vars - star
const _regexEscape = /([\.\*\+\^\$\[\]\\\(\)\|\{\}\,\-\:\?])/g; // eslint-disable-line no-useless-escape
const _regexParseLocale = /^([a-zA-Z]{2,3}|[a-zA-Z]{5,8})(-[a-zA-Z]{4})?(-(?:[a-zA-Z]{2}|\d{3}))?(-(?:[a-zA-Z\d]{5,8}|\d[a-zA-Z\d]{3}))?$/;
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
        // Escape delimiter to be valid RegExp pattern
        const pattern = this._escapeRegExpPattern(item);
        // Push pattern to patterns array
        addPatterns(pattern);
      });
    }

    // Trim based on delimiter string value
    if (typeof delimiter === 'string') {
      // Escape delimiter to be valid RegExp pattern
      const patternDelimiter = this._escapeRegExpPattern(delimiter);
      // push pattern to patterns array
      addPatterns(patternDelimiter);
    }

    // If delimiter is not defined, trim white spaces
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
    let script;
    let countryCode;

    if (!strLocale || !matches) {
      return;
    }

    // fix script string by trimming '-' and '_'
    matches[2] = this._trim(matches[2], ['-', '_']);

    // fix countryCode string by trimming '-' and '_'
    matches[3] = this._trim(matches[3], ['-', '_']);

    lang = this._toLowerCase(matches[1]);
    script = this._toLowerCase(matches[2]) || script;
    countryCode = this._toUpperCase(matches[3]) || countryCode;

    // object with lang, script properties
    parsedLocale = {
      lang,
      script,
      countryCode
    };

    // return parsed locale object
    return parsedLocale;
  }
  // Private functions - End

  _isRtlLang () {
    const { lang, script } = this.constructor._parseLocale(this._locale);

    if (script) {
      return this.constructor._RTL_SCRIPTS.indexOf(script) >= 0;
    }

    // return true if the intel string lang exists in the BID RTL LANGS array else return false
    return (this.constructor._BIDI_RTL_LANGS.indexOf(lang) >= 0);
  }

  // Public functions - star
  get textInfo () {
    // return 'rtl' if the intel string lang exists in the BID RTL LANGS array else return 'ltr'
    const direction = this._isRtlLang() ? 'rtl' : 'ltr';
    return { direction };
  }

  // Public functions - End
}

Locale._RTL_SCRIPTS = [
  'adlm', 'arab', 'armi', 'avst', 'chrs', 'cprt',
  'elym', 'hatr', 'hebr', 'hung', 'khar', 'lydi',
  'mand', 'mani', 'mend', 'merc', 'mero', 'narb',
  'nbat', 'nkoo', 'orkh', 'ougr', 'palm', 'phli',
  'phlp', 'phnx', 'prti', 'rohg', 'samr', 'sarb',
  'sogd', 'sogo', 'syrc', 'thaa', 'yezi'
];

// Why not working as static property
Locale._BIDI_RTL_LANGS = [
  // Const BIDI_RTL_LANGS Array
  // BIDI_RTL_LANGS ref: http://en.wikipedia.org/wiki/Right-to-left
  // Table of scripts in Unicode: https://en.wikipedia.org/wiki/Script_(Unicode)
  'ae',	// Avestan
  'aeb', // Tunisian Arabic
  'ajt', // Tunisian Arabic (old)
  'apc', // Levantine Arabic
  'apd', // Sudanese Arabic
  'ar', // 'العربية', Arabic
  'ara', // Arabic
  'arb', // Standard Arabic
  'arc', // Aramaic
  'arq', // Algerian Arabic
  'ars', // Najdi Arabic
  'ary', // Moroccan Arabic
  'arz', // Egyptian Arabic
  'ave', // Avestan
  'avl', // Eastern Egyptian Bedawi Arabic
  'bal', // Baluchi
  'bcc', // 'بلوچی مکرانی', Southern Balochi
  'bej', // Beja; Bedawiyet
  'bft', // Balti
  'bgn', // Western Balochi
  'bqi', // 'بختياري', Bakthiari
  'brh', // Brahui
  'cja', // Cham, Western
  'ckb', // 'Soranî / کوردی', Sorani
  'cld', // Chaldean Neo-Aramaic
  'dcc', // Deccan
  'dgl', // Andaandi
  'div', // Divehi
  'drw', // Darwazi (old)
  'dv', // Dhivehi
  'fa', // 'فارسی', Persian
  'fas', // Persian
  'fia', // Nobiin
  'fub', // Fulfulde (Adamawa)
  'gbz', // Dari, Zoroastrian
  'gjk', // Koli, Kachi
  'gju', // Gujari
  'glk', // 'گیلکی', Gilaki
  'grc', // Greek, Ancient (to 1453)
  'gwc', // Kalami
  'gwt', // Gawar-Bati
  'haz', // Hazaragi
  'he', // 'עברית', Hebrew
  'heb', // Hebrew
  'hnd', // Hindko, Southern
  'hno', // Hindko, Northern
  'iw', // Hebrew (old)
  'ji', // Yiddish (old)
  'kas', // Kashmiri
  'kby', // Kanuri, Manga
  'khw', // Khowar
  'ks', // Kashmiri
  'kvx', // Koli, Parkari
  'kxp', // Koli, Wadiyara
  'kzh', // Kenuzi-Dongola (old)
  'lad', // Ladino
  'lah', // Lahnda
  'lki', // Laki
  'lrc', // Luri, Northern
  'luz', // Luri, Southern
  'mde', // Maba (Chad)
  'mfa', // Malay, Pattani
  'mki', // Dhatki
  'mvy', // Kohistani, Indus
  'myz', // Mandaic, Classical
  'mzn', // 'مازِرونی', Mazanderani
  'nqo', // N'Ko
  'oru', // Ormuri
  'ota', // Turkish, Ottoman (1500–1928)
  'otk', // Turkish, Old
  'oui', // Uighur, Old
  'pal', // Pahlavi
  'pbu', // Pashto, Northern
  'per', // Persian
  'pes', // Western Farsi
  'phl', // Phalura
  'phn', // Phoenician
  'pnb', // 'پنجابی', Western Punjabi
  'pra', // Prakrit languages
  'prd', // Dari (Persian)
  'prs', // 'دری', Darī
  'ps', // 'پښتو', Pashto,
  'pus', // Pushto
  'rhg', // Rohingya
  'rmt', // Domari
  'scl', // Shina
  'sd', // 'سنڌي', Sindhi
  'sdh', // Kurdish, Southern
  'shu', // Arabic (Chadian)
  'skr', // Saraiki
  'smp', // Samaritan
  'snd', // Sindhi
  'sog', // Sogdian
  'swb', // Comorian
  'syr', // Syriac
  'tnf', // Tangshewi (old)
  'trw', // Torwali
  'ug', // 'Uyghurche / ئۇيغۇرچە', Uyghur
  'uig', // Uighur
  'ur', // 'اردو', Urdu
  'urd', // Urdu
  'wni', // Comorian, Ndzwani
  'xco', // Chorasmian
  'xld', // Lydian
  'xmn', // Manichaean Middle Persian
  'xmr', // Meroitic
  'xna', // North Arabian, Ancient
  'xpr', // Parthian
  'xsa', // Sabaean
  'ydd', // Yiddish, Eastern
  'yi', // 'ייִדיש', Yiddish
  'yid', // Yiddish
  'zdj' // Comorian, Ngazidja
];

export default Locale;
