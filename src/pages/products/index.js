import React from 'react';
import ProductList from '../../components/products/ProductList';

const DUMMY_IMG_STYLE_1 = '/style/shoe_style_1.jpeg'; // Random image URL: 'https://picsum.photos/500/300'
const DUMMY_IMG_STYLE_2 = '/style/shoe_style_2.jpeg';
const DUMMY_IMG_STYLE_3 = '/style/shoe_style_3.jpeg';
const DUMMY_IMG_STYLE_4 = '/style/shoe_style_4.jpeg';
const DUMMY_IMG_RUNNING_1 = '/running/shoe_running_1.jpeg';
const DUMMY_IMG_RUNNING_2 = '/running/shoe_running_2.jpeg';
const DUMMY_IMG_RUNNING_3 = '/running/shoe_running_3.jpeg';
const DUMMY_IMG_BB_1 = '/bb/shoe_bb_1.jpeg';
const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'First Item',
    image: DUMMY_IMG_STYLE_1,
    price: '30',
    description: 'This is the first product.'
  },
  {
    id: '2',
    title: 'Second Item',
    image: DUMMY_IMG_STYLE_2,
    price: '25',
    description: 'This is the second product.'
  },
  {
    id: '3',
    title: 'Third Item',
    image: DUMMY_IMG_STYLE_3,
    price: '50',
    description: 'This is the third product.'
  },
  {
    id: '4',
    title: 'Fourth Item',
    image: DUMMY_IMG_STYLE_4,
    price: '12',
    description: 'This is the fourth product.'
  },
  {
    id: '5',
    title: 'Fifth Item',
    image: DUMMY_IMG_RUNNING_1,
    price: '69',
    description: 'This is the fifth product.'
  },
  {
    id: '6',
    title: 'Sixth Item',
    image: DUMMY_IMG_RUNNING_2,
    price: '17',
    description: 'This is the sixth product.'
  },
  {
    id: '7',
    title: 'Seventh Item',
    image: DUMMY_IMG_RUNNING_3,
    price: '99',
    description: 'This is the seventh product.'
  },
  {
    id: '8',
    title: 'Eight Item',
    image: DUMMY_IMG_BB_1,
    price: '99',
    description: 'This is the eight product.'
  }
];

const Products = () => {
  return (
      <ProductList products={DUMMY_PRODUCTS}/>
  );
};

export default Products;
