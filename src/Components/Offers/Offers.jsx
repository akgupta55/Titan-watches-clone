import data_product from "../Assets/data_product";
import Card from "../Card/Card";
import "./Offers.css";

function Offers() {
  return (
    <div className="offers">
      <h1>Exculxive Offers</h1>
      <div className="hr">.</div>
      <div className="offers_item">
        {data_product.map((item, i) => {
          return (
            <Card
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Offers;
