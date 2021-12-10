import React from 'react';
import {fetchFromApi} from '../../../lib/api';
import ProductDetails from '../../components/products/ProductDetails';
import {getColorByIndex, getDigits} from '../../../lib/utils';

const Product = ({product}) => {

  return (
      <ProductDetails product={product}/>
  );
};

export async function getStaticProps(context) {
  const productSlug = context.params.productSlug;
  const fetchedProduct = await fetchFromApi(`/products/${productSlug}`);

  if (!fetchedProduct.image) {
    const seed = getDigits(fetchedProduct.price, 2);
    fetchedProduct.altImage = {
      color: getColorByIndex(seed),
      rotate: seed,
    }
  }

  return {
    props: {
      product: fetchedProduct
    }
  };
}

export async function getStaticPaths() {
  const fetchedProducts = await fetchFromApi('/products');
  const paths = fetchedProducts.map((p) => (
      {
        params: {
          productSlug: p.slug
        }
      }
  ));

  return {
    paths,
    fallback: false, // All paths are pre-rendered --> Show 404 when unknown path is requested
  }
}

export default Product;
