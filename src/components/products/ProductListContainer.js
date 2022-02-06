import React from 'react';
import {productListContainer} from './ProductListContainer.module.scss';
import ProductList from './ProductList';
import Sidebar from '../layout/Sidebar';

const ProductListContainer = ({products, categories}) => {
  const [didHydrate, setDidHydrate] = React.useState(false);
  React.useEffect(() => {
    setDidHydrate(true);
  }, []);

  return (
      <div className={productListContainer}
          // style={{
          //   background: didHydrate
          //       ? "#34eb9e"
          //       : "#ff788c",
          // }}
      >
        <Sidebar categories={categories}/>
        <ProductList products={products}/>
      </div>
  );
};

export default ProductListContainer;
