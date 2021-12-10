import React from 'react';
import {fetchFromApi} from '../../../lib/api';
import ProductListContainer
  from '../../components/products/ProductListContainer';
import {getColorByIndex, getDigits} from '../../../lib/utils';

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
        const seed = getDigits(p.price, 2);
        p.altImage = {
          color: getColorByIndex(seed),
          rotate: seed,
        }
      }
      products.push(p);
    });
  });

  // Filter duplicated products (due to multiple categories)
  products = products.filter((product, index, self) =>
      index === self.findIndex((p) => {
        return (p.slug === product.slug)
      }));

  return {
    props: {
      products: products,
      categories: fetchedCategories,
    }
  };
}

export default Products;
