import ProductItem from './ProductItem.js';
import {productList} from './ProductList.module.scss';

function ProductList({products}) {
  return (
      <ul className={productList}>
        {
          products.map((p, index) => (
                  <ProductItem
                      key={p.id}
                      id={p.id}
                      imageIndex={p.image}
                      title={p.title}
                      address={p.address}
                      featured={(index === 0)}/>
              )
          )
        }
      </ul>
  );
}

export default ProductList;