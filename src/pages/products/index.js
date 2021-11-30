import React from 'react';
import ProductList from '../../components/products/ProductList';
import {fetchFromApi} from '../../../lib/api';

const Products = ({products, categories}) => {
  return (
      <ProductList products={products} categories={categories}/>
  );
};

// Will be executed on the server during build time
export async function getStaticProps() {
  const fetchedProducts = await fetchFromApi('/products');
  const fetchedCategories = await fetchFromApi('/categories');

  return {
    props: {
      products: fetchedProducts,
      categories: fetchedCategories,
    }
  };
}

export default Products;
