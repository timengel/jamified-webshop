import React from 'react';
import ProductItem from './ProductItem.js';
import {productList,} from './ProductList.module.scss';
import {generateUniqueID} from '../../../lib/crypto';
import {sortById} from '../../../lib/utils';
import Spinner from '../layout/Spinner';

const ProductList = ({products}) => {
  return (
      <ul className={productList}>
        {
          products.sort(sortById).map(p => (
              <React.Suspense fallback={<Spinner/>}>
                <ProductItem
                    key={generateUniqueID()}
                    slug={p.slug}
                    image={p.image}
                    altImage={p.altImage}
                    title={p.title}
                    price={p.price}
                    description={p.description}
                />
              </React.Suspense>
          ))
        }
      </ul>
  );
}

export default ProductList;