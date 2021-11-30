import ProductItem from './ProductItem.js';
import {productList, productListContainer,} from './ProductList.module.scss';
import Sidebar from '../layout/Sidebar';

function ProductList({products, categories}) {
  return (
      <div className={productListContainer}>
        <Sidebar categories={categories}/>
        <ul className={productList}>
          {
            products.map((p) => (
                    <ProductItem
                        key={p.id}
                        slug={p.slug}
                        image={p.image}
                        title={p.title}
                        price={p.price}
                        description={p.description}/>
                )
            )
          }
        </ul>
      </div>
  );
}

export default ProductList;