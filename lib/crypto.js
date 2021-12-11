import {v4 as uuidV4} from 'uuid';

export function generateUniqueID() {
  return uuidV4();
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