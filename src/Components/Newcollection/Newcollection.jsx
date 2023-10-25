import "./Newcollection.css";
import Card from "../Card/Card";
import new_collection from "../Assets/new_collection";

const Newcollection = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <div className="hr">.</div>
      <div className="collection">
        {new_collection.map((item, i) => {
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
};

export default Newcollection;
