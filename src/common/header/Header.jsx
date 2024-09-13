import { useEffect, useState } from "react";
import "/src/css/header.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const [menu, setMenu] = useState(false);
  function menuToggle() {
    setMenu(!menu);
    console.log(menu);
  }

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
    <div className="flex justify-between p-5 border border-b-2 panel w-screen top-0 z-50 header">
      <div
        className={`hamburger mt-4 ${menu ? "open" : ""}`}
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
        <img src="/images/logo.svg" alt="" />
      </Link>
      <div className="button_gp ">
        <Link to="/login">
          <button className="px-4 py-2 border"> Sign up/Login</button>
        </Link>
        <button className="px-4 py-2 border  transition hover:text-white">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
