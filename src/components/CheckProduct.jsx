import "../css/checkproduct.css";
const CheckProduct = () => {
  return (
    <div>
      <div className="check_product flex items-center justify-center flex-col relative panel md:h-[1300px] h-[800px]">
        <h1 className="md:text-8xl text-5xl ">
          Make Humor <br />
          Make You More
        </h1>
        <a className="bg-white px-16 py-5 border border-black rounded-full mt-40 text-xl">
          Check the product
        </a>
        <div className="loopBelt absolute bottom-4 ">
          <div className="slider flex gap-10 justify-center">
            <ul className="flex gap-10 loop">
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>{" "}
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
            </ul>
            <ul className="flex gap-10 loop">
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>{" "}
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
              <li>
                <img src="/images/humor-icon.webp" alt="" className="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckProduct;
