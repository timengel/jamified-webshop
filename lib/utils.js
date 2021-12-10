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
  '#c61f66',
  '#db8f00',
  '#00B4D8',
  '#a7040e',
  '#94D2BD',
  '#f59f23',
  '#a452d9',
  '#00ffcc',
  '#15ae1f',
  '#AE2012',
  '#0054bf',
  '#cd4444',
  '#00e52f',
  '#11fcff',
  '#b916b1',
  '#0b9dbb',
  '#ff5361',
  '#8e19dc',
  '#22eb9e',
  '#070866',
  '#e92433',
  '#5abe64',
  '#f852a2',
  '#60c3db',
  '#007ebe',
  '#df0d91',
  '#3147e6',
  '#c3d80a',
  '#00ffb8',
  '#df7f21',
  '#0666d2',
  '#630000',]

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

