import ProductItem from './ProductItem.js';
import classes from './ProductList.module.css';


function ProductList({products}) {
  return (
      <ul className={classes.list}>
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