import React from 'react';
import {fetchFromApi} from '../../../lib/api';
import ProductListContainer
  from '../../components/products/ProductListContainer';
import {generateDummyImage,} from '../../../lib/utils';

const Products = ({categories, products}) => {
  return (
      <ProductListContainer categories={categories} products={products}/>
  );
};

export async function getStaticProps() {
  const fetchedCategories = await fetchFromApi('/categories');
  let products = [];
  fetchedCategories.map(c => {
    c.products.map(p => {
      if (!p.image) {
        p.altImage = generateDummyImage(p);
      }
      products.push(p);
    });
  });

  // Filter duplicated products (due to multiple categories)
  products = products.filter((product, index, self) =>
      index === self.findIndex((p) => {
        return (p.slug === product.slug)
      }));

  [
    'status',
    'created_at',
    'updated_at',
    'Custom_field',
    'products'
  ].forEach(k => {
    products.forEach(p => {
      delete p[k]
    })
    fetchedCategories.forEach(c => {
      delete c[k]
    })
  });

  products.sort((a, b) => a.id - b.id);
  products = products.slice(0, 399);

  return {
    props: {
      products: products,
      categories: fetchedCategories,
    },
    revalidate: 60,
  };
}

export default Products;
