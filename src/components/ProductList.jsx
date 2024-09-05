import "../css/productlist.css";

const ProductList = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full">
      <div className="h-auto w-[100%] img_box1 ">
        <img
          src="/images/man-fg01.webp"
          alt=""
          className="h-auto md:h-[831px] w-[100%] relative"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 left-0 object-cover img_hover h-full w-full hidden 2xl:block "
        />
        <div className="h-[116px]  relative flex  justify-between px-10">
          <div className="flex justify-center flex-col">
            <h2 className="text-3xl">syabaan clear</h2>
            <p className="text-xl">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] w-[237px] border relative my-5">
            <span>Check</span>
          </button>
        </div>
      </div>
      <div className=" w-[100%] img_box1 relative">
        <img
          src="/images/man-fg02.webp"
          alt=""
          className="h-[722px] sm:h-[831px] w-[100%]"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 img_hover left-0 object-cover  h-full w-full bottom-3 hidden 2xl:block"
        />
        <div className="h-[122px]  relative flex  justify-between px-10">
          <div className="flex justify-center flex-col">
            <h2 className="text-3xl">syabaan clear</h2>
            <p className="text-xl">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] w-[237px] border relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div>

      <div className=" w-[100%] img_box1 relative">
        <img
          src="/images/man-fg03.webp"
          alt=""
          className="h-[722px] sm:h-[831px] w-[100%]"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 img_hover left-0 object-cover h-full w-full hidden 2xl:block"
        />
        <div className="h-[116px]  relative flex  justify-between px-10">
          <div className="flex justify-center flex-col">
            <h2 className="text-3xl">syabaan clear</h2>
            <p className="text-xl">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] w-[237px] border relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div>
      <div className=" w-[100%] img_box1 relative">
        <img
          src="/images/man-fg04.webp"
          alt=""
          className="h-[722px] sm:h-[831px] w-[100%]"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 img_hover left-0 object-cover h-screen w-full bottom-3 hidden 2xl:block"
        />
        <div className="h-[122px]  relative flex  justify-between px-10">
          <div className="flex justify-center flex-col">
            <h2 className="text-3xl">syabaan clear</h2>
            <p className="text-xl">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] w-[237px] border relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
