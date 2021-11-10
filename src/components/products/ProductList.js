import ProductItem from './ProductItem.js';
import {productList} from './ProductList.module.scss';

function ProductList({products}) {
  return (
      <ul className={productList}>
        {
          products.map((p) => (
              <ProductItem
                  key={p.id}
                  id={p.id}
                  image={p.image}
                  title={p.title}
                  address={p.address}
              />
          ))
        }
      </ul>
  );
}

export default ProductList;