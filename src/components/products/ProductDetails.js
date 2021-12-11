import React from 'react';
import Link from 'next/link';
import {
  caption,
  description,
  descriptionContainer,
  descriptionHighlight,
  detailsContainer,
  detailsImage,
  header,
  headerContainer,
  navigation,
  price,
  priceContainer,
} from './ProductDetails.module.scss'
import Image from 'next/image';
import {animatedBtnSalmon} from '../../styles/_globals.module.scss';
import sr from 'seedrandom';
import {getStrapiMedia} from '../../../lib/api';

const ProductDetails = ({product}) => {
  let imageUrl;
  let svgSeed;
  if (product.image) {
    imageUrl = getStrapiMedia(product.image);
  } else {
    svgSeed = sr.alea(product.slug).int32();
  }

  return (
      <div className={detailsContainer}>
        <div className={detailsImage}>
          {
            (product.image)
                ? <Image src={imageUrl}
                         alt={product.title || product.image.name}
                         width='375'
                         height='375'
                         layout='responsive'/>
                : <svg width='375' height='375' viewBox='0 0 375 375'
                       xmlns='http://www.w3.org/2000/svg'>
                  <rect x='60' y='60' rx='60' ry='60' width='250' height='250'
                        fill={product.altImage.color}
                        transform={`rotate(${product.altImage.rotate}, 185, 185)`}/>
                  <rect className='smallRect' x='80' y='80' rx='60' ry='60'
                        width='90'
                        height='90'
                        fill={product.altImage.color}
                        fillOpacity='0.5'
                        transform={`rotate(${product.altImage.rotate}, 185, 185)`}/>
                  <style>
                    {
                      `.smallRect { filter: brightness(85%); }`
                    }
                  </style>
                </svg>
          }
        </div>
        <div className={headerContainer}>
          <div className={header}>
            {product.title}
          </div>
          <div className={caption}>
            {
              (product.categories.length === 0)
                  ?
                  <>{product.title} doesnt belong to any category.</>
                  : (product.categories.length > 1)
                      ? <>{product.title} belongs to the
                        categories {product.categories.map((c, index) => {
                          if ((product.categories.length - 1) === index) {
                            return ' and ' + c.name + '.';
                          } else {
                            return c.name + ', ';
                          }
                        })}</>
                      : <>{product.title} belongs to the
                        category {product.categories[0].name}.</>
            }
          </div>
        </div>
        <div className={priceContainer}>
          Now only <span className={price}>{product.price},-</span>
        </div>
        <div className={descriptionContainer}>
          <div className={description}>
          <span
              className={descriptionHighlight}>{product.description}</span> Lorem
            ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam
            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className={navigation}>
          Back to the {' '}<Link href='/products'>
          <button className={animatedBtnSalmon}>Products Page</button>
        </Link>
        </div>
      </div>
  );
};

export default ProductDetails;
