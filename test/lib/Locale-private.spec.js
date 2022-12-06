/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

describe('Intl.Locale', function () {

  describe('private', function () {
    it('_escapeRegExpPattern()', function () {
      expect(Intl.Locale._escapeRegExpPattern()).to.equal(undefined);

      expect(Intl.Locale._escapeRegExpPattern(null)).to.equal(null);

      expect(Intl.Locale._escapeRegExpPattern('')).to.equal('');

      expect(Intl.Locale._escapeRegExpPattern(' ')).to.equal(' ');

      expect(Intl.Locale._escapeRegExpPattern('[CODE]')).to.equal('\\[CODE\\]');

      expect(Intl.Locale._escapeRegExpPattern('.*+^$[]()|{},-:?\\')).to.equal('\\.\\*\\+\\^\\$\\[\\]\\(\\)\\|\\{\\}\\,\\-\\:\\?\\\\');
    });

    it('_toLowerCase()', function () {
      expect(Intl.Locale._toLowerCase()).to.equal(undefined);

      expect(Intl.Locale._toLowerCase(null)).to.equal(undefined);
      expect(Intl.Locale._toLowerCase(null, true)).to.equal(null);

      expect(Intl.Locale._toLowerCase('')).to.equal('');

      expect(Intl.Locale._toLowerCase(' ')).to.equal(' ');

      expect(Intl.Locale._toLowerCase('Test Code')).to.equal('test code');

      expect(Intl.Locale._toLowerCase('TEST CODE')).to.equal('test code');

      expect(Intl.Locale._toLowerCase('test code')).to.equal('test code');
    });

    it('_toUpperCase()', function () {
      expect(Intl.Locale._toUpperCase()).to.equal(undefined);

      expect(Intl.Locale._toUpperCase(null)).to.equal(undefined);
      expect(Intl.Locale._toUpperCase(null, true)).to.equal(null);

      expect(Intl.Locale._toUpperCase('')).to.equal('');

      expect(Intl.Locale._toUpperCase(' ')).to.equal(' ');

      expect(Intl.Locale._toUpperCase('Test Code')).to.equal('TEST CODE');

      expect(Intl.Locale._toUpperCase('TEST CODE')).to.equal('TEST CODE');

      expect(Intl.Locale._toUpperCase('test code')).to.equal('TEST CODE');
    });

    it('_trim()', function () {
      expect(Intl.Locale._trim()).to.equal(undefined);
      expect(Intl.Locale._trim(undefined, '-')).to.equal(undefined);

      expect(Intl.Locale._trim(null)).to.equal(undefined);
      expect(Intl.Locale._trim(null, '-')).to.equal(undefined);
      expect(Intl.Locale._trim(null, true)).to.equal(null);
      expect(Intl.Locale._trim(null, '-', true)).to.equal(null);

      expect(Intl.Locale._trim('')).to.equal('');
      expect(Intl.Locale._trim('', '-')).to.equal('');

      expect(Intl.Locale._trim(' ')).to.equal('');

      expect(Intl.Locale._trim('-', '-')).to.equal('');

      expect(Intl.Locale._trim('  TRIM CODE  ')).to.equal('TRIM CODE');

      expect(Intl.Locale._trim('-TRIM-CODE-', '-')).to.equal('TRIM-CODE');

      expect(Intl.Locale._trim('-_TRIM-_CODE_-', ['-', '_'])).to.equal('TRIM-_CODE');
    });

    it('_parseLocale()', function () {
      expect(Intl.Locale._parseLocale()).to.equal(undefined);

      expect(Intl.Locale._parseLocale(null)).to.equal(undefined);

      expect(Intl.Locale._parseLocale('')).to.equal(undefined);

      expect(Intl.Locale._parseLocale(' ')).to.equal(undefined);

      expect(Intl.Locale._parseLocale('1234')).to.equal(undefined);
      expect(Intl.Locale._parseLocale('1a2B3c4')).to.equal(undefined);

      expect(Intl.Locale._parseLocale('en_US')).to.equal(undefined);

      expect(Intl.Locale._parseLocale('en')).to.deep.equal({
        lang: 'en',
        countryCode: undefined
      });

      expect(Intl.Locale._parseLocale('en-US')).to.deep.equal({
        lang: 'en',
        countryCode: 'US'
      });

      expect(Intl.Locale._parseLocale('en-us')).to.deep.equal({
        lang: 'en',
        countryCode: 'US'
      });


      expect(Intl.Locale._parseLocale('EN-US')).to.deep.equal({
        lang: 'en',
        countryCode: 'US'
      });


      expect(Intl.Locale._parseLocale('EN-US')).to.deep.equal({
        lang: 'en',
        countryCode: 'US'
      });
    });

    it('_BIDI_RTL_LANGS', function () {
      expect(Intl.Locale._BIDI_RTL_LANGS).to.deep.equal([
        'ae',
        'ar',
        'arc',
        'bcc',
        'bqi',
        'ckb',
        'dv',
        'fa',
        'glk',
        'he',
        'ku',
        'mzn',
        'nqo',
        'pnb',
        'ps',
        'sd',
        'ug',
        'ur',
        'yi'
      ]);
    });
  });
});
