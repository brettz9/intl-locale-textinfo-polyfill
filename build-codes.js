const aCode = 'a'.charCodeAt();
const zCode = 'z'.charCodeAt();

const codes = [];
const scripts = [];

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

      for (let l = aCode; l <= zCode; l++) {
        try {
          const code = String.fromCharCode(i) +
            String.fromCharCode(j) +
            String.fromCharCode(k) +
            String.fromCharCode(l);
          const dir = new Intl.Locale(
            'en-' + code
          ).textInfo.direction; // .getTextInfo().direction;
          if (dir === 'rtl') {
            scripts.push(code);
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
}
console.log('codes', codes);
console.log('scripts', scripts);
