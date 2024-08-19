import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./js/app.js";
import CheckProduct from "./components/CheckProduct";
import { useEffect } from "react";
import ProductList from "./components/ProductList.jsx";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      // Select only panels with the class "scroll-panel"
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

      // Remove the snap configuration to avoid automatic scrolling
    }, 0); // Delay to ensure all components are mounted
  }, []);

  return (
    <div>
      <div className="scroll-panel panel app"></div>
      <Header />
      <CheckProduct />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
