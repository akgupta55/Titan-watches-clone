import "./Home.css";
import banner1 from "../Components/Assets/banner1.gif";
import banner2 from "../Components/Assets/banner2.webp";
import Offers from "../Components/Offers/Offers";
import Newcollection from "../Components/Newcollection/Newcollection";

function Home() {
  return (
    <div className="home">
      <div className="banner1">
        <img src={banner1} alt="" />
      </div>
      <Offers />
      <div className="banner2">
        <img src={banner2} alt="" />
      </div>
      <Newcollection />
    </div>
  );
}

export default Home;
