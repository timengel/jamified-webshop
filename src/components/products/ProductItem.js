import {
  card,
  content,
  detailsBtn,
  detailsDesc,
  detailsOverview,
  detailsPrice,
  itemImage,
} from './ProductItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {animatedBtnSalmon} from '../../styles/_globals.module.scss'
import {getStrapiMedia} from '../../../lib/api';

const ProductItem = ({slug, title, description, price, image, altImage}) => {
  let imageUrl;
  if (image) {
    imageUrl = getStrapiMedia(image);
  }

  return (
      <li className={`${card}`}>
        <div className={itemImage}>
          {
            (image)
                ? <Image src={imageUrl}
                         alt={title || image.name}
                         width='500'
                         height='300'
                         layout='responsive'/>
                : <svg width='500' height='300' viewBox='0 0 500 300'
                       xmlns='http://www.w3.org/2000/svg'>
                  <rect x='50' y='40' rx='60' ry='60'
                        width='220' height='220'
                        fill={altImage.color}
                        transform={`rotate(${altImage.rotate}, 160, 150)`}/>
                  <rect className='smallRect' x='70' y='60' rx='60' ry='60'
                        width='80' height='80'
                        fill={altImage.color}
                        fillOpacity='0.5'
                        transform={`rotate(${altImage.rotate}, 160, 150)`}/>
                  <style>
                    {
                      `.smallRect { filter: brightness(85%); }`
                    }
                  </style>
                </svg>
          }
        </div>
        <div className={content}>
          <h3>{title}</h3>
          <div className={detailsOverview}>
            <p className={detailsDesc}>{description}</p>
            <p className={detailsPrice}>{price}€</p>
          </div>
          <Link href={`/products/${slug}`}>
            <button className={`${animatedBtnSalmon} ${detailsBtn}`}>Show
              Details
            </button>
          </Link>
        </div>
      </li>
  );
}

export default ProductItem;