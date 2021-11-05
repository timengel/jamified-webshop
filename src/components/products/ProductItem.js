import Card from '../ui/Card';
import {
  item,
  itemImage,
  content,
  actions
} from './ProductItem.module.css';

function ProductItem({title, address, image}) {
  return (
      <li className={item}>
        <Card>
          <div className={itemImage}>
            <img src={image} alt={title}/></div>
          <div className={content}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={actions}>
            <button>Show Details</button>
          </div>
        </Card>
      </li>
  );
}

export default ProductItem;