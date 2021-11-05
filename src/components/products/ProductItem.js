import Card from '../ui/Card';
import {actions, content, item, itemImage} from './ProductItem.module.css';
import Link from 'next/link';

function ProductItem({id, title, address, image}) {
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
            <Link href={`/products/${id}`}>
              <button>Show Details</button>
            </Link>
          </div>
        </Card>
      </li>
  );
}

export default ProductItem;