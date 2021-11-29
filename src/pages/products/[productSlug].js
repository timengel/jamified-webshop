import React from 'react';
import Link from 'next/link';
import {fetchFromApi} from '../../../lib/api';
import ProductDetails from '../../components/products/ProductDetails';

const Product = ({product}) => {

  return (
      <div>
        <h2>
          A Detail Page for Item {product.slug}.
        </h2>
        <div>
          Back to the {' '}<Link href='/products'>
          <a>product list.</a>
        </Link>
        </div>
      </div>
  );
};

export async function getStaticProps(context) {
  const productSlug = context.params.productSlug;
  const fetchedProduct = await fetchFromApi(`/products/${productSlug}`);

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
