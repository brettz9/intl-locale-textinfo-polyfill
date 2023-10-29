/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import { expect } from 'chai';

describe('index', function () {
  it('_isRtlLang()', function () {
    expect(new Intl.Locale('en')._isRtlLang()).to.equal(false);

    expect(new Intl.Locale('EN')._isRtlLang()).to.equal(false);

    expect(new Intl.Locale('en-US')._isRtlLang()).to.equal(false);

    expect(new Intl.Locale('en-us')._isRtlLang()).to.equal(false);

    expect(new Intl.Locale('ar')._isRtlLang()).to.equal(true);

    expect(new Intl.Locale('AR')._isRtlLang()).to.equal(true);

    expect(new Intl.Locale('ar-jo')._isRtlLang()).to.equal(true);

    expect(new Intl.Locale('ar-JO')._isRtlLang()).to.equal(true);
  });

  it('textInfo.direction', function () {
    expect(new Intl.Locale('en').textInfo.direction).to.equal('ltr');

    expect(new Intl.Locale('EN').textInfo.direction).to.equal('ltr');

    expect(new Intl.Locale('en-US').textInfo.direction).to.equal('ltr');

    expect(new Intl.Locale('en-us').textInfo.direction).to.equal('ltr');

    expect(new Intl.Locale('ar').textInfo.direction).to.equal('rtl');

    expect(new Intl.Locale('AR').textInfo.direction).to.equal('rtl');

    expect(new Intl.Locale('ar-jo').textInfo.direction).to.equal('rtl');

    expect(new Intl.Locale('ar-JO').textInfo.direction).to.equal('rtl');

    expect(new Intl.Locale('ku-Arab').textInfo.direction).to.equal('rtl');

    expect(new Intl.Locale('ku-Latn').textInfo.direction).to.equal('ltr');
  });

  it('throws on invalid locales', function () {
    expect(() => {
      // @ts-expect-error Bad args
      new Intl.Locale();
    }).to.throw(TypeError);

    expect(() => {
      // @ts-expect-error Bad args
      new Intl.Locale(null);
    }).to.throw(TypeError);

    expect(() => {
      new Intl.Locale('');
    }).to.throw(RangeError);

    expect(() => {
      new Intl.Locale(' ');
    }).to.throw(RangeError);

    expect(() => {
      new Intl.Locale('1234');
    }).to.throw(RangeError);
  });

  it('throws with locales with underscores', function () {
    expect(() => {
      new Intl.Locale('en_US');
    }).to.throw(RangeError);

    expect(() => {
      new Intl.Locale('ar_JO');
    }).to.throw(RangeError);
  });
});
