import "../css/checkproduct.css";
const CheckProduct = () => {
  return (
    <div>
      <div className="check_product flex items-center justify-center flex-col relative panel">
        <h1 className="text-8xl ">
          Make Humor <br />
          Make You More
        </h1>
        <button className="bg-white px-16 py-5 border border-black rounded-full mt-40 text-xl">
          Check the product
        </button>
        <div className="loopBelt absolute bottom-4 ">
          <div className="slider">
            <ul className="flex gap-10 loop">
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>{" "}
              <li>
                <img
                  src="/images/humor-icon.webp"
                  alt=""
                  className="w-[150px] h-16 "
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckProduct;
