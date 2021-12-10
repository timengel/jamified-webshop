import ProductItem from './ProductItem.js';
import {productList,} from './ProductList.module.scss';
import {generateUniqueID} from '../../../lib/crypto';
import {sortById} from '../../../lib/sort';

const ProductList = ({products}) => {
  return (
      <ul className={productList}>
        {
          products.sort(sortById).map(p => (
              <ProductItem
                  key={generateUniqueID()}
                  slug={p.slug}
                  image={p.image}
                  title={p.title}
                  price={p.price}
                  description={p.description}/>
          ))
        }
      </ul>
  );
}

export default ProductList;