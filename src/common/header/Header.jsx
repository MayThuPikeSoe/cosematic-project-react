import { useEffect, useState } from "react";
import "/src/css/header.css";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import productDetail from "../../js/productDetail";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const [menu, setMenu] = useState(false);
  function menuToggle() {
    setMenu(!menu);
    console.log(menu);
  }
  const { id } = useParams();
  useEffect(() => {
    // Animation instance
    const showAnim = gsap
      .from(".header", {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    // ScrollTrigger instance
    const scrollTrigger = ScrollTrigger.create({
      start: "top top", // Adjust start value as necessary

      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });

    // Cleanup on unmount
    return () => {
      scrollTrigger.kill();
    };
  }, []);
  return (
    <div className="flex justify-between w-full p-5 border border-b-2 panel w-screen top-0 z-50 header">
      <div
        className={`hamburger mt-10 ${menu ? "open" : ""}`}
        onClick={menuToggle}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <nav className={`menu ${menu ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/check-product" className="text-8xl">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-8xl">
                About
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-8xl">
                News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/">
        <img src="/images/logo.svg" alt="" className="sm:w-auto sm:h-auto w-32 h-20"/>
      </Link>
      <div className="button_gp sm:text-center text-left">
        <Link to="/login">
          <button className="sm:px-4 py-2 border px-2 sm:text-2xl text-sm"> Sign up/Login</button>
        </Link>

        <Link to={`/cart/${productDetail.id}`}>
          <button className="sm:px-4 px-0 py-2 border sm:text-2xl text-sm transition hover:text-white">
            Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
