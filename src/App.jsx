/* eslint-disable no-unused-vars */
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import "./App.css";
import "./css/common.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./js/app.js";
import CheckProduct from "./components/CheckProduct";
import { useEffect } from "react";
import ProductList from "./components/ProductList.jsx";
import About from "./components/About.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./components/ProductCard.jsx";
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
      <div className="scroll-panel panel app box-border bg-cover 2xl:bg-[url('/images/image1.webp')] bg-[url('/images/fv-sp.webp')] "></div>
      <Header />
      <CheckProduct />
      <ProductList />
      <About />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default App;
