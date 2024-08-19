import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import "./App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import "./js/app.js";
import CheckProduct from "./components/CheckProduct";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    let panels = gsap.utils.toArray(".panel");

    let tops = panels.map((panel) =>
      ScrollTrigger.create({ trigger: panel, start: "top top" })
    );

    panels.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map((st) => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            snapScroll
          );
        },
        duration: 0.5,
      },
    });
  }, []);

  return (
    <div>
      <div className="panel app"></div>
      <Header />
      <CheckProduct />
      <Footer />
    </div>
  );
};

export default App;
