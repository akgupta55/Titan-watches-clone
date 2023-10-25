import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ProductCategory from "./ProductCategory/ProductCategory";
import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<ProductCategory category="men" />} />
        <Route path="/womens" element={<ProductCategory category="women" />} />
        <Route path="/product" element={<ProductList />}>
          <Route path=":productId" element={<ProductList />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
