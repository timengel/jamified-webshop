import {
  card,
  content,
  detailBtn,
  itemImage,
  detailsOverview,
  detailsDesc,
  detailsPrice,
} from './ProductItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {getStrapiMedia} from '../../../lib/media';

function ProductItem({id, title, description, price, image}) {
  const imageUrl = getStrapiMedia(image);

  return (
      <li className={`${card}`}>
        <div className={itemImage}>
          <Image src={imageUrl}
                 alt={title || image.name}
                 width='500'
                 height='300'
                 layout='responsive'/>
        </div>
        <div className={content}>
          <h3>{title}</h3>
          <div className={detailsOverview}>
            <p className={detailsDesc}>{description}</p>
            <p className={detailsPrice}>{price}€</p>
          </div>
          <Link href={`/products/${id}`}>
            <button className={detailBtn}>Show Details</button>
          </Link>
        </div>
      </li>
  );
}

export default ProductItem;