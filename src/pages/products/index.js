import React from 'react';
import ProductList from '../../components/products/ProductList';
import {fetchFromApi} from '../../../lib/api';

const Products = ({products}) => {
  return (
      <ProductList products={products}/>
  );
};

// Will be executed on the server during build time
export async function getStaticProps() {
  const fetchedProducts = await fetchFromApi('/products');

  return {
    props: {
      products: fetchedProducts
    }
  };
}

export default Products;
