import ProductItem from './ProductItem.js';
import {productList,} from './ProductList.module.scss';
import {generateUniqueID} from '../../../lib/crypto';
import {sortById} from '../../../lib/utils';

const ProductList = ({products}) => {
  return (
      <ul className={productList}>
        {
          products.sort(sortById).map(p => (
              <ProductItem
                  key={generateUniqueID()}
                  slug={p.slug}
                  image={p.image}
                  altImage={p.altImage}
                  title={p.title}
                  price={p.price}
                  description={p.description}
              />
          ))
        }
      </ul>
  );
}

export default ProductList;