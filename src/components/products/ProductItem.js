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
import {getStrapiMedia} from '../../../lib/media';
import {animatedBtnSalmon} from '../../styles/_globals.module.scss'
import {SvgBlob} from 'react-svg-blob';
import sr from 'seedrandom';

const ProductItem = ({slug, title, description, price, image}) => {
  let imageUrl;
  let svgSeed;
  if (image) {
    imageUrl = getStrapiMedia(image);
  } else {
    svgSeed = sr.alea(slug).int32();
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
                : <SvgBlob variant='gradient'
                           shapeProps={
                             {
                               seed: svgSeed,
                               edges: 8
                             }
                           }
                           colors={['#0096C7', '#ADE8F4']}/>
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