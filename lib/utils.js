const getRandomElements = (array, n) => {
  return array.sort(() => .5 - Math.random()).slice(0, n);
}

const colors = [
  '#c61f66',
  '#f16b00',
  '#00B4D8',
  '#a7040e',
  '#94D2BD',
  '#ffad53',
  '#a452d9',
  '#00ffcc',
  '#15ae1f',
  '#AE2012',
  '#0054bf',
  '#e22b2b',
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
  '#dcc403',
  '#0666d2',
  '#630000',];

const generateColor = (seed) => {
  let index = ~~(seed);
  if (index > colors.length) {
    index = ~~(scaleValue(seed, [0, 999], [0, colors.length]));
  }
  return colors[index];
}

const generateRotation = (seed) => {
  let deg = ~~(seed);
  const maxDeg = 100;
  if (deg > maxDeg) {
    deg = ~~(scaleValue(seed, [0, 999], [0, maxDeg]));
  }
  return deg;
}

const scaleValue = (value, fromScale, toScale) => {
  const scale = (toScale[1] - toScale[0]) / (fromScale[1] - fromScale[0]);
  const capped = Math.min(fromScale[1], Math.max(fromScale[0], value))
      - fromScale[0];
  return ~~(capped * scale + toScale[0]); // ~~ is faster than Math.floor
}

//##################### Exports #####################\\
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

export const generateDummyImage = (product) => {
  const seed = ~~(product.price);
  return {
    color: generateColor(seed),
    rotate: generateRotation(seed),
  };
}

