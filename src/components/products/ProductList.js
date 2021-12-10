import ProductItem from './ProductItem.js';
import {productList,} from './ProductList.module.scss';
import {generateUniqueID} from '../../../lib/crypto';

const sortById = (a, b) => {
  return a.id - b.id;
}

const ProductList = ({products}) => {
  return (
      <ul className={productList}>
        {
          products.sort(sortById).map(p => {
                console.log(p);
                return (
                    <ProductItem
                        key={generateUniqueID()}
                        slug={p.slug}
                        image={p.image}
                        title={p.title}
                        price={p.price}
                        description={p.description}/>
                )
              }
          )
        }
      </ul>
  );
}

export default ProductList;