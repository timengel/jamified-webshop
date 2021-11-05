import React from 'react';
import ProductList from '../../components/products/ProductList';

const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'First Item',
    image: 'https://picsum.photos/500/300',
    price: '30',
    description: 'This is the first product.'
  },
  {
    id: '2',
    title: 'Second Item',
    image: 'https://picsum.photos/500/300',
    price: '25',
    description: 'This is the second product.'
  },
  {
    id: '3',
    title: 'Third Item',
    image: 'https://picsum.photos/500/300',
    price: '50',
    description: 'This is the third product.'
  }
];

const Products = () => {
  return (
      <ProductList products={DUMMY_PRODUCTS}/>
  );
};

export default Products;
