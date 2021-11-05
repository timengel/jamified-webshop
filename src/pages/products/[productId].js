import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';

const Product = () => {
  const router = useRouter();

  return (
      <div>
        <h2>
          A Detail Page for Item {router.query.productId}.
        </h2>
        <div>
          Back to the product {' '}<Link href='/products'>
          <a>overview.</a>
        </Link>
        </div>
      </div>
  );
};

export default Product;
