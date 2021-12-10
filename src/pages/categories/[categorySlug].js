import React from 'react';
import {fetchFromApi} from '../../../lib/api';
import ProductListContainer
  from '../../components/products/ProductListContainer';
import {getColorByIndex, getDigits} from '../../../lib/utils';

const Category = ({categories, products}) => {
  return (
      <ProductListContainer categories={categories} products={products}/>
  );
};

export async function getStaticProps(context) {
  // TODO: Find better way to populate sidebar categories. Dont fetch categories every time.
  const fetchedCategories = await fetchFromApi('/categories');

  const categorySlug = context.params.categorySlug;
  const fetchedCategory = await fetchFromApi(`/categories/${categorySlug}`);
  let products = [];
  fetchedCategory.products.map(p => {
    if (!p.image) {
      const seed = getDigits(p.price, 2);
      p.altImage = {
        color: getColorByIndex(seed),
        rotate: seed,
      }
    }
    products.push(p);
  });

  return {
    props: {
      products: products,
      categories: fetchedCategories,
    }
  };
}

export async function getStaticPaths() {
  const fetchedCategories = await fetchFromApi('/categories');
  const paths = fetchedCategories.map((c) => (
      {
        params: {
          categorySlug: c.slug
        }
      }
  ));

  return {
    paths,
    fallback: false, // All paths are pre-rendered --> Show 404 when unknown path is requested
  }
}

export default Category;
