import {COLORS} from './constants';

const generateColor = (seed) => {
  let index = ~~(seed);
  if (index > COLORS.length) {
    index = ~~(scaleValue(seed, [0, 999], [0, COLORS.length]));
  }
  return COLORS[index];
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
/**
 * Sort by object.id.
 */
export const sortById = (a, b) => {
  return a.id - b.id;
}

/**
 * Generate dummy svg blob by seed (product.price).
 */
export const generateDummyImage = (product) => {
  const seed = ~~(product.price);
  return {
    color: generateColor(seed),
    rotate: generateRotation(seed),
  };
}

