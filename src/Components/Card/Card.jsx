import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="card_prices">
        <div className="card_new_price">{props.new_price}</div>
        <div className="card_old_price">{props.old_price}</div>
      </div>
    </div>
  );
}

export default Card;
