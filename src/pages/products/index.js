import React from 'react';
import {fetchFromApi} from '../../../lib/api';
import ProductListContainer
  from '../../components/products/ProductListContainer';

const Products = ({categories, products}) => {
  return (
      <ProductListContainer categories={categories} products={products}/>
  );
};

export async function getStaticProps() {
  const fetchedCategories = await fetchFromApi('/categories');
  let products = [];
  fetchedCategories.map(c => {
    c.products.map(p => products.push(p));
  });

  return {
    props: {
      products: products,
      categories: fetchedCategories,
    }
  };
}

export default Products;
