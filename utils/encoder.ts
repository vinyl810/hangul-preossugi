import * as Hangul from 'hangul-js';

export const singleCharDict = {
  'ㅏ': { upper: ['E00E'], lower: ['E02B'], upperBreved: null, lowerBreved: null },
  'ㅑ': { upper: ['E00F'], lower: ['E02C'], upperBreved: null, lowerBreved: null },
  'ㅓ': { upper: ['E010'], lower: ['E02D'], upperBreved: null, lowerBreved: null },
  'ㅕ': { upper: ['E011'], lower: ['E02E'], upperBreved: null, lowerBreved: null },
  'ㅗ': { upper: ['E012'], lower: ['E02F'], upperBreved: ['E019'], lowerBreved: ['E036'] },
  'ㅛ': { upper: ['E013'], lower: ['E030'], upperBreved: null, lowerBreved: null },
  'ㅜ': { upper: ['E014'], lower: ['E031'], upperBreved: ['E01A'], lowerBreved: ['E037'] },
  'ㅠ': { upper: ['E015'], lower: ['E032'], upperBreved: null, lowerBreved: null },
  'ㅡ': { upper: ['E016'], lower: ['E033'], upperBreved: ['E01B'], lowerBreved: ['E038'] },
  'ㅣ': { upper: ['E017'], lower: ['E034'], upperBreved: ['E018'], lowerBreved: ['E035'] },
};

export const doubleCharDict = {
  'ㅐ': { upper: [...singleCharDict['ㅏ'].upper, ...singleCharDict['ㅣ'].upperBreved], lower: [...singleCharDict['ㅏ'].lower, ...singleCharDict['ㅣ'].lowerBreved], upperBreved: null, lowerBreved: null },
  'ㅔ': { upper: [...singleCharDict['ㅓ'].upper, ...singleCharDict['ㅣ'].upperBreved], lower: [...singleCharDict['ㅓ'].lower, ...singleCharDict['ㅣ'].lowerBreved], upperBreved: null, lowerBreved: null },
  'ㅒ': { upper: [...singleCharDict['ㅑ'].upper, ...singleCharDict['ㅣ'].upperBreved], lower: [...singleCharDict['ㅑ'].lower, ...singleCharDict['ㅣ'].lowerBreved], upperBreved: null, lowerBreved: null },
  'ㅖ': { upper: [...singleCharDict['ㅕ'].upper, ...singleCharDict['ㅣ'].upperBreved], lower: [...singleCharDict['ㅕ'].lower, ...singleCharDict['ㅣ'].lowerBreved], upperBreved: null, lowerBreved: null },
};

export const multipleChartDict = {
  'ㅘ': { upper: [...singleCharDict['ㅗ'].upperBreved, ...singleCharDict['ㅏ'].upper], lower: [...singleCharDict['ㅗ'].lowerBreved, ...singleCharDict['ㅏ'].lower], upperBreved: null, lowerBreved: null },
  'ㅙ': { upper: [...singleCharDict['ㅗ'].upperBreved, ...doubleCharDict['ㅐ'].upper], lower: [...singleCharDict['ㅗ'].lowerBreved, ...doubleCharDict['ㅐ'].lower], upperBreved: null, lowerBreved: null },
  'ㅝ': { upper: [...singleCharDict['ㅜ'].upperBreved, ...singleCharDict['ㅓ'].upper], lower: [...singleCharDict['ㅜ'].lowerBreved, ...singleCharDict['ㅓ'].lower], upperBreved: null, lowerBreved: null },
  'ㅞ': { upper: [...singleCharDict['ㅜ'].upperBreved, ...doubleCharDict['ㅔ'].upper], lower: [...singleCharDict['ㅜ'].lowerBreved, ...doubleCharDict['ㅔ'].lower], upperBreved: null, lowerBreved: null },
  'ㅢ': { upper: [...singleCharDict['ㅡ'].upperBreved, ...singleCharDict['ㅣ'].upper], lower: [...singleCharDict['ㅡ'].lowerBreved, ...singleCharDict['ㅣ'].lower], upperBreved: null, lowerBreved: null },
  'ㅟ': { upper: [...singleCharDict['ㅜ'].upperBreved, ...singleCharDict['ㅣ'].upperBreved], lower: [...singleCharDict['ㅜ'].lowerBreved, ...singleCharDict['ㅣ'].lowerBreved], upperBreved: null, lowerBreved: null },
  'ㅚ': { upper: [...singleCharDict['ㅗ'].upperBreved, ...singleCharDict['ㅣ'].upperBreved], lower: [...singleCharDict['ㅗ'].lowerBreved, ...singleCharDict['ㅣ'].lowerBreved], upperBreved: null, lowerBreved: null },
};

export const singleConsonantDict = {
  'ㄱ': { upper: ['E000'], lower: ['E01D'], upperBreved: null, lowerBreved: null },
  'ㄴ': { upper: ['E001'], lower: ['E01E'], upperBreved: null, lowerBreved: null },
  'ㄷ': { upper: ['E002'], lower: ['E01F'], upperBreved: null, lowerBreved: null },
  'ㄹ': { upper: ['E003'], lower: ['E020'], upperBreved: null, lowerBreved: null },
  'ㅁ': { upper: ['E004'], lower: ['E021'], upperBreved: null, lowerBreved: null },
  'ㅂ': { upper: ['E005'], lower: ['E022'], upperBreved: null, lowerBreved: null },
  'ㅅ': { upper: ['E006'], lower: ['E023'], upperBreved: null, lowerBreved: null },
  'ㅇ': { upper: ['E007'], lower: ['E024'], upperBreved: null, lowerBreved: null },
  'ㅈ': { upper: ['E008'], lower: ['E025'], upperBreved: null, lowerBreved: null },
  'ㅊ': { upper: ['E009'], lower: ['E026'], upperBreved: null, lowerBreved: null },
  'ㅋ': { upper: ['E00A'], lower: ['E027'], upperBreved: null, lowerBreved: null },
  'ㅌ': { upper: ['E00B'], lower: ['E028'], upperBreved: null, lowerBreved: null },
  'ㅍ': { upper: ['E00C'], lower: ['E029'], upperBreved: null, lowerBreved: null },
  'ㅎ': { upper: ['E00D'], lower: ['E02A'], upperBreved: null, lowerBreved: null },
};

export const doubleConsonantDict = {
  'ㄲ': { upper: [...singleConsonantDict['ㄱ'].upper, ...singleConsonantDict['ㄱ'].upper], lower: [...singleConsonantDict['ㄱ'].lower, ...singleConsonantDict['ㄱ'].lower], upperBreved: null, lowerBreved: null },
  'ㄸ': { upper: [...singleConsonantDict['ㄷ'].upper, ...singleConsonantDict['ㄷ'].upper], lower: [...singleConsonantDict['ㄷ'].lower, ...singleConsonantDict['ㄷ'].lower], upperBreved: null, lowerBreved: null },
  'ㅃ': { upper: [...singleConsonantDict['ㅂ'].upper, ...singleConsonantDict['ㅂ'].upper], lower: [...singleConsonantDict['ㅂ'].lower, ...singleConsonantDict['ㅂ'].lower], upperBreved: null, lowerBreved: null },
  'ㅆ': { upper: [...singleConsonantDict['ㅅ'].upper, ...singleConsonantDict['ㅅ'].upper], lower: [...singleConsonantDict['ㅅ'].lower, ...singleConsonantDict['ㅅ'].lower], upperBreved: null, lowerBreved: null },
  'ㅉ': { upper: [...singleConsonantDict['ㅈ'].upper, ...singleConsonantDict['ㅈ'].upper], lower: [...singleConsonantDict['ㅈ'].lower, ...singleConsonantDict['ㅈ'].lower], upperBreved: null, lowerBreved: null },
};

export const charDict = {
  ...singleCharDict, ...doubleCharDict, ...multipleChartDict, ...singleConsonantDict, ...doubleConsonantDict,
};

export const charDistance = {
  upperConsonant: '0xAECF',
  lowerConsonant: '0xAEEC',
  upperVowel: '0xAEBF',
  lowerVowel: '0xAEDC',
};

export const addHex = (h1: string, h2: string) => {
  return (parseInt(h1, 16) + parseInt(h2, 16)).toString(16);
};

export const disassemble = (h: string) => {
  const disassembled = Hangul.d(h);

  return [...disassembled.join('').replaceAll('ㅗㅏ', 'ㅘ').replaceAll('ㅗㅐ', 'ㅙ').replaceAll('ㅜㅓ', 'ㅝ').replaceAll('ㅜㅔ', 'ㅞ').replaceAll('ㅜㅣ', 'ㅟ').replaceAll('ㅗㅣ', 'ㅚ').replaceAll('ㅡㅣ', 'ㅢ')];
};

export const removeHollow = (ha: string[]) => {
  const vowels = [...Object.keys(singleCharDict), ...Object.keys(doubleCharDict), ...Object.keys(multipleChartDict)];
  const targets = vowels.map((char) => 'ㅇ' + char);

  return ha.map((char, i) => {
    if (i < ha.length - 1 && targets.includes(char + ha[i + 1])) {
      return '';
    } else {
      return char;
    }
  });
};

export const makeCmuo = (h: string, totalCase?: 'upper' | 'lower') => {
  const hArray = removeHollow(disassemble(h));
  const upperCase = (char: string) => Object.keys(charDict).includes(char) ? charDict[char as keyof typeof charDict].upper.map((c) => String.fromCharCode(parseInt(c, 16))).join('') : char;
  const lowerCase = (char: string) => Object.keys(charDict).includes(char) ? charDict[char as keyof typeof charDict].lower.map((c) => String.fromCharCode(parseInt(c, 16))).join('') : char;

  if (totalCase === 'upper') return upperCase(hArray.map(upperCase).join(''));
  if (totalCase === 'lower') return lowerCase(hArray.map(lowerCase).join(''));

  const variableUpperCase = (char: string) => {
    return Object.keys(charDict).includes(char)
      ? [charDict[char as keyof typeof charDict].upper[0], ...charDict[char as keyof typeof charDict].lower.toSpliced(0, 1)].map((c) => String.fromCharCode(parseInt(c, 16))).join('')
      : char;
  };

  const cased = hArray.reduce((acc: string, cur: string) => {
    const isSos = acc.replaceAll(' ', '').length === 0 || ['.', ':', '?', '!', '\n'].includes(acc.replaceAll(' ', '').at(-1) ?? '.');

    return acc + (isSos ? variableUpperCase(cur) : lowerCase(cur));
  }, '');

  return cased;
};