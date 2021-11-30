import React from 'react';
import {productListContainer} from './ProductListContainer.module.scss';
import ProductList from './ProductList';
import Sidebar from '../layout/Sidebar';

const ProductListContainer = ({products, categories}) => {
  return (
      <div className={productListContainer}>
        <Sidebar categories={categories}/>
        <ProductList products={products}/>
      </div>
  );
};

export default ProductListContainer;
