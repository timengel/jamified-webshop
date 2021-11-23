import {
  card,
  content,
  detailBtn,
  featuredItem,
  item,
  itemImage
} from './ProductItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {getStrapiMedia} from '../../../lib/media';

function ProductItem({id, title, description, image, featured}) {
  const imageUrl = getStrapiMedia(image);

  return (
      <li className={`${card} ${featured ? featuredItem : item}`}>
        <div className={itemImage}>
          <Image src={imageUrl}
                 alt={title || image.name}
                 width='500'
                 height='300'
                 layout='responsive'/>
        </div>
        <div className={content}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={`/products/${id}`}>
            <button className={detailBtn}>Show Details</button>
          </Link>
        </div>
      </li>
  );
}

export default ProductItem;