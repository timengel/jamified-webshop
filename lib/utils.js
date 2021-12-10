const getRandomElements = (array, n) => {
  return array.sort(() => .5 - Math.random()).slice(0, n);
}

export const sortById = (a, b) => {
  return a.id - b.id;
}

export const getRandomColors = (n) => {
  const colors = [
    '#EE9B00',
    '#CA6702',
    '#BB3E03',
    '#920c12',
    '#AE2012',
    '#94D2BD',
    '#0A9396',
    '#005F73',
    '#fff8f8',
    '#fbf1f0',
    '#f7dbd9',
    '#f2c4c0',
    '#eeb4af',
    '#e28a93',
    '#d96e78',
    '#ca666f',
    '#ad525a',
    '#9d454d',
    '#ebfbff',
    '#CAF0F8',
    '#ADE8F4',
    '#90E0EF',
    '#42c5df',
    '#00B4D8',
    '#0096C7',
    '#0072ad',
    '#023E8A',
    '#03045E',];
  return getRandomElements(colors, n);
}
