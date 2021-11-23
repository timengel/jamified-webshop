import React from 'react';
import ProductList from '../../components/products/ProductList';
import {fetchApi} from '../../../lib/api';

const Products = ({products}) => {
  return (
      <ProductList products={products}/>
  );
};

// Will be executed on the server during build time
export async function getStaticProps() {
  const fetchedProducts = await fetchApi('/articles');

  return {
    props: {
      products: fetchedProducts
    }
  };
}

export default Products;
