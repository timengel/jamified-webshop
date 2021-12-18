import React from 'react';
import {fetchFromApi, getStrapiUrl} from '../../../lib/api';
import ProductListContainer
  from '../../components/products/ProductListContainer';
import {generateDummyImage,} from '../../../lib/utils';
import useSWR from 'swr';
import {useRouter} from 'next/router';
import {PRODUCT_CATEGORIES} from '../../../lib/constants'

const Category = ({productsSSG}) => {

  const router = useRouter();
  const {categorySlug} = router.query;
  console.log('##### categorySlug');
  console.log(categorySlug);
  console.log('##### productsSSG');
  console.log(productsSSG);

  //########## CSR ##########\\
  const start = new Date().getTime();
  let responseTime;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {data, error} = useSWR(getStrapiUrl(`/categories/${categorySlug}`),
      fetcher);
  let productsCSR = [];

  if (error) {
    return <div>Failed to load category...</div>
  }
  if (!data) {
    return <div style={{background: 'red'}}>Loading data...</div>
  } else {
    responseTime = new Date().getTime() - start;
    console.log(
        '##### CATEGORIES (CSR): responseTime: ' + responseTime + 'ms');
  }

  data.products.map(p => {
    if (!p.image) {
      p.altImage = generateDummyImage(p)
    }
    productsCSR.push(p);
  });

  return (
      <ProductListContainer categories={PRODUCT_CATEGORIES}
                            products={productsCSR}/>
  );
};

//########## SSG ##########\\
// export async function getStaticProps(context) {
//   // const fetchedCategories = await fetchFromApi('/categories');
//
//   const categorySlug = context.params.categorySlug;
//   const fetchedCategory = await fetchFromApi(`/categories/${categorySlug}`);
//   let productsSSG = [];
//   fetchedCategory.products.map(p => {
//     if (!p.image) {
//       p.altImage = generateDummyImage(p)
//     }
//     productsSSG.push(p);
//   });
//
//   return {
//     props: {
//       products: productsSSG,
//     }
//   };
// }
//
// export async function getStaticPaths() {
//   const fetchedCategories = await fetchFromApi('/categories');
//   const paths = fetchedCategories.map((c) => (
//       {
//         params: {
//           categorySlug: c.slug
//         }
//       }
//   ));
//
//   return {
//     paths,
//     fallback: false, // All paths are pre-rendered --> Show 404 when unknown path is requested
//   }
// }

export default Category;
