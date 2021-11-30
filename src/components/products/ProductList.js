import ProductItem from './ProductItem.js';
import {productList,} from './ProductList.module.scss';
import {generateUniqueID} from '../../../lib/crypto';

function ProductList({products}) {
  return (
      <ul className={productList}>
        {
          products.map(p => (
                  <ProductItem
                      key={generateUniqueID()}
                      slug={p.slug}
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