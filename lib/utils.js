const getRandomElements = (array, n) => {
  return array.sort(() => .5 - Math.random()).slice(0, n);
}

export const getDigits = (input, n) => {
  if (input.toString().length >= n) {
    return parseInt(input.toString().slice(0, n));
  } else {
    return Math.trunc(input);
  }
}

/**
 * Including min number, excluding max number. Precision 100 --> 2 decimal places.
 */
export const generateRandomNumber = (min, max, precision) => {
  return Math.floor(
          Math.random() * (max * precision - min * precision) + min * precision)
      / (min * precision)
}

/**
 * Including min number, excluding max number.
 */
export const generateRandomInteger = (min, max) => parseInt(
    generateRandomNumber(min, max, 10))

export const sortById = (a, b) => {
  return a.id - b.id;
}

const colors = [
  '#bd2062',
  '#db8f00',
  '#CA6702',
  '#BB3E03',
  '#920c12',
  '#AE2012',
  '#b015a8',
  '#94D2BD',
  '#15ae74',
  '#8023be',
  '#a452d9',
  '#0A9396',
  '#005F73',
  '#06373f',
  '#ff5361',
  '#ad525a',
  '#9d454d',
  '#90E0EF',
  '#00B4D8',
  '#0072ad',
  '#023E8A',
  '#273bc3',
  '#0666d2',
  '#03045E',
  '#3c0000',]

export const getRandomColors = (n) => {
  return getRandomElements(colors, n);
}

export const getColorByIndex = (i) => {
  let index = i;
  if (i > colors.length) {
    index = Math.trunc((colors.length / i) * colors.length);
  }
  return colors[index];
}

