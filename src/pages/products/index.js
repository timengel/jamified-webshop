import React from 'react';
import ProductList from '../../components/products/ProductList';

const DUMMY_IMG_PATH = '/jpg/dummy_image_500-300.jpg'; // Random image URL: 'https://picsum.photos/500/300'
const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'First Item',
    image: DUMMY_IMG_PATH,
    price: '30',
    description: 'This is the first product.'
  },
  {
    id: '2',
    title: 'Second Item',
    image: DUMMY_IMG_PATH,
    price: '25',
    description: 'This is the second product.'
  },
  {
    id: '3',
    title: 'Third Item',
    image: DUMMY_IMG_PATH,
    price: '50',
    description: 'This is the third product.'
  },
  {
    id: '4',
    title: 'Fourth Item',
    image: DUMMY_IMG_PATH,
    price: '12',
    description: 'This is the fourth product.'
  },
  {
    id: '5',
    title: 'Fifth Item',
    image: DUMMY_IMG_PATH,
    price: '69',
    description: 'This is the fifth product.'
  },
  {
    id: '6',
    title: 'Sixth Item',
    image: DUMMY_IMG_PATH,
    price: '17',
    description: 'This is the sixth product.'
  },
  {
    id: '7',
    title: 'Seventh Item',
    image: DUMMY_IMG_PATH,
    price: '99',
    description: 'This is the seventh product.'
  }
];

const Products = () => {
  return (
      <ProductList products={DUMMY_PRODUCTS}/>
  );
};

export default Products;
