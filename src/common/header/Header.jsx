import { useState } from "react";
import "/src/css/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  function menuToggle() {
    setMenu(!menu);
    console.log(menu);
  }
  return (
    <div className="flex justify-between p-5 border border-b-2 fixed panel w-screen top-0 z-50 header">
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
              <Link to="/product" className="text-8xl">
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
        <button className="px-4 py-2 border"> Sign up/Login</button>
        <button className="px-4 py-2 border  transition hover:text-white">
          Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
