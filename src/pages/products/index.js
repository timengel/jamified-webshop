import React from 'react';
import ProductList from '../../components/products/ProductList';
import {fetchApi} from '../../../lib/api';

const RANDOM_DUMMY_IMG_URL = 'https://picsum.photos/500/300';
const DUMMY_PRODUCTS = [
  {
    id: '1',
    title: 'First Item',
    image: 0,
    price: '30',
    description: 'This is the first product.'
  },
  {
    id: '2',
    title: 'Second Item',
    image: 1,
    price: '25',
    description: 'This is the second product.'
  },
  {
    id: '3',
    title: 'Third Item',
    image: 2,
    price: '50',
    description: 'This is the third product.'
  },
  {
    id: '4',
    title: 'Fourth Item',
    image: 3,
    price: '12',
    description: 'This is the fourth product.'
  },
  {
    id: '5',
    title: 'Fifth Item',
    image: 4,
    price: '69',
    description: 'This is the fifth product.'
  },
  {
    id: '6',
    title: 'Sixth Item',
    image: 5,
    price: '17',
    description: 'This is the sixth product.'
  },
  {
    id: '7',
    title: 'Seventh Item',
    image: 6,
    price: '99',
    description: 'This is the seventh product.'
  },
  {
    id: '8',
    title: 'Eight Item',
    image: 7,
    price: '99',
    description: 'This is the eight product.'
  }
];

const Products = ({products}) => {
  return (
      <ProductList products={products}/>
  );
};

// Will be executed on the server during build time
export async function getStaticProps() {
  // Fetch products from CMS
  const fetchedProducts = await fetchApi('/articles');
  return {
    props: {
      products: fetchedProducts
    }
  };
}

export default Products;
