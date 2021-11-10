import Card from '../ui/Card';
import {
  detailBtnContainer,
  detailBtn,
  content,
  item,
  itemImage
} from './ProductItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';

function ProductItem({id, title, address, image}) {
  return (
      <li className={item}>
        <Card>
          <div className={itemImage}>
            <Image src={image}
                   alt={title}
                   width='500'
                   height='300'/>
          </div>
          <div className={content}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={detailBtnContainer}>
            <Link href={`/products/${id}`}>
              <button className={detailBtn}>Show Details</button>
            </Link>
          </div>
        </Card>
      </li>
  );
}

export default ProductItem;