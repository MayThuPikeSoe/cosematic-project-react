import Header from "../common/header/Header";
import CheckProduct from "./CheckProduct";
import ProductList from "./ProductList";
import About from "./About";
import ProductCard from "./ProductCard";
import NewsComponent from "./NewsComponent";


const Home = () => {
  return (
    <div>
      <div className="scroll-panel panel relative app box-border bg-cover 2xl:bg-[url('/images/image1.webp')] bg-[url('/images/fv-sp.webp')] "></div>
      <Header />
      <CheckProduct />
      <ProductList />
      <About />
      <ProductCard />
      <NewsComponent />
     
    </div>
  );
};

export default Home;
