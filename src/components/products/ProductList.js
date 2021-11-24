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
                      price={p.price}
                      description={p.description}/>
              )
          )
        }
      </ul>
  );
}

export default ProductList;