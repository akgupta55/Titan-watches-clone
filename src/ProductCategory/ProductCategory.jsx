import all_product from "../Components/Assets/all_product";
import Card from "../Components/Card/Card";
import "./ProductCategory.css";

function ProductCategory(props) {
  return (
    <div className="productCategory">
      <h1>{props.category} category</h1>
      <div className="hr">.</div>
      <div className="productCategory-info">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default ProductCategory;
