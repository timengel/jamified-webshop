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
import style1 from '../../../public/style/shoe_style_1.jpg';
import style2 from '../../../public/style/shoe_style_2.jpg';
import style3 from '../../../public/style/shoe_style_3.jpg';
import style4 from '../../../public/style/shoe_style_4.jpg';
import running1 from '../../../public/running/shoe_running_1.jpg';
import running2 from '../../../public/running/shoe_running_2.jpg';
import running3 from '../../../public/running/shoe_running_3.jpg';
import bb1 from '../../../public/bb/shoe_bb_1.jpg';

function ProductItem({id, title, address, imageIndex}) {
  const productPics = [
    style1, style2, style3, style4, running1, running2, running3, bb1
  ];
  return (
      <li className={item}>
        <Card>
          <div className={itemImage}>
            <Image src={productPics[imageIndex]}
                   alt={title}
                   width='500'
                   height='300'
                   placeholder='blur'/>
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