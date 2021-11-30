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
import {getStrapiMedia} from '../../../lib/media';

const ProductDetails = ({product}) => {
  const imageUrl = getStrapiMedia(product.image);

  return (
      <div className={detailsContainer}>
        <div className={detailsImage}>
          <Image src={imageUrl}
                 alt={product.title || product.image.name}
                 width='375'
                 height='375'
                 layout='responsive'/>
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
          <a>product list.</a>
        </Link>
        </div>
      </div>
  );
};

export default ProductDetails;
