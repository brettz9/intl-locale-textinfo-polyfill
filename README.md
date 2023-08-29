# intl-locale-textinfo-polyfill

This library will help you to detect if the locale is right-to-left language or not.

It implements part of this now Stage 3 [intl-locale-info proposal](https://github.com/tc39/proposal-intl-locale-info).

The library has begun as a fork of [rtl-detect](https://github.com/shadiabuhilal/rtl-detect),
but it strives to adhere to the `Intl.Locale` (`textInfo`) proposal (notably,
locales with underscores as in the form `en_US` are not accepted).

## Usage

### import the library as a ponyfill

```js
import Locale from 'intl-locale-textinfo-polyfill';

const { direction } = new Locale('he').getTextInfo();
// "rtl"
```

### import the library as a polyfill

```js
import 'intl-locale-textinfo-polyfill/lib/polyfill.js';

const { direction } = new Intl.Locale('he').getTextInfo();
// `direction` will be "rtl"
```

### Intl.Locale#getTextInfo()

This returns an object with the language direction for the locale.

Examples:

```js
const { direction } = new Intl.Locale('ar-JO').getTextInfo();
// `direction` will be "rtl"
```

```js
const { direction } = new Intl.Locale('ar').getTextInfo();
// `direction` will be "rtl"
```

```js
const { direction } = new Intl.Locale('en-US')).getTextInfo();
// `direction` will be "ltr"
```
