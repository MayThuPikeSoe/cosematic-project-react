/* eslint-disable no-unused-vars */
import Header from "./common/header/Header";
import "./App.css";
import "./css/common.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./js/app.js";
import { useEffect } from "react";
import About from "./components/About.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "./js/app.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductItem from "./pages/ProductItem.jsx";

import ProductCards from "./pages/ProductCards.jsx";
import News from "./pages/News.jsx";
import Footer from "./common/footer/Footer.jsx";
import CheckProductList from "./pages/CheckProductList.jsx";
import NewsComponent from "./components/NewsComponent.jsx";
import BottomScrollbar from "./components/BottomScrollbar.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductItem1 from "./pages/ProductItem1.jsx";
import ProductItem2 from "./pages/ProductItem2.jsx";
import Login from "./pages/Login.jsx";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let panels = gsap.utils.toArray(".scroll-panel");

      let tops = panels.map((panel) =>
        ScrollTrigger.create({ trigger: panel, start: "top top" })
      );

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: () =>
            panel.offsetHeight < window.innerHeight
              ? "top top"
              : "bottom bottom",
          pin: true,
          pinSpacing: false,
        });
      });
    }, 0);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" />
          <Route path="/news" element={<News />}></Route>
          <Route path="/product_item" element={<ProductItem />}></Route>
          <Route path="/product_item1" element={<ProductItem1 />}></Route>
          <Route path="/product_item2" element={<ProductItem2 />}></Route>
          <Route path="/login" element={<Login/>}></Route>

          <Route path="/check-product" element={<CheckProductList />}></Route>
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/" element={<ProductList />} />
          <Route path="/news-component" element={<NewsComponent />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
