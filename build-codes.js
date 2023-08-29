const aCode = 'a'.charCodeAt();
const zCode = 'z'.charCodeAt();

const codes = [];
for (let i = aCode; i <= zCode; i++) {
  for (let j = aCode; j <= zCode; j++) {
    try {
      const code = String.fromCharCode(i) +
        String.fromCharCode(j);
      const dir = new Intl.Locale(
        code
      ).textInfo.direction; // .getTextInfo().direction;
      if (dir === 'rtl') {
        codes.push(code);
      }
      else if (dir !== 'ltr') {
        console.error('dir', dir);
        throw new Error('What?');
      }
    }
    catch (err) {
    }
    for (let k = aCode; k <= zCode; k++) {
      try {
        const code = String.fromCharCode(i) +
          String.fromCharCode(j) +
          String.fromCharCode(k);
        const dir = new Intl.Locale(
          code
        ).textInfo.direction; // .getTextInfo().direction;
        if (dir === 'rtl') {
          codes.push(code);
        }
        else if (dir !== 'ltr') {
          console.error('dir', dir);
          throw new Error('What?');
        }
      }
      catch (err) {
      }
    }
  }
}
console.log('codes', codes);
