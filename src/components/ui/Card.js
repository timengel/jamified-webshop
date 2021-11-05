import {card} from './Card.module.css';

function Card({children}) {
  return <div className={card}>
    {
      children
    }
  </div>;
}

export default Card;