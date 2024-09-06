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
        <div className="h-[116px]  relative flex  justify-between sm:px-10 px-6">
          <div className="flex justify-center flex-col">
            <h2 className="sm:text-3xl text-xl">syabaan clear</h2>
            <p className="sm:text-xl text-sm">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] 2xl:w-[237px] lg:w-[170px] border w-[71px] sm:rounded-[50px] rounded-full relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div><div className="h-auto w-[100%] img_box1 ">
        <img
          src="/images/man-fg02.webp"
          alt=""
          className="h-auto md:h-[831px] w-[100%] relative"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 left-0 object-cover img_hover h-full w-full hidden 2xl:block "
        />
        <div className="h-[116px]  relative flex  justify-between sm:px-10 px-6">
          <div className="flex justify-center flex-col">
            <h2 className="sm:text-3xl text-xl">syabaan clear</h2>
            <p className="sm:text-xl text-sm">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] 2xl:w-[237px] lg:w-[170px] border w-[71px] sm:rounded-[50px] rounded-full relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div><div className="h-auto w-[100%] img_box1 ">
        <img
          src="/images/man-fg03.webp"
          alt=""
          className="h-auto md:h-[831px] w-[100%] relative"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 left-0 object-cover img_hover h-full w-full hidden 2xl:block "
        />
        <div className="h-[116px]  relative flex  justify-between sm:px-10 px-6">
          <div className="flex justify-center flex-col">
            <h2 className="sm:text-3xl text-xl">syabaan clear</h2>
            <p className="sm:text-xl text-sm">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] 2xl:w-[237px] lg:w-[170px] border w-[71px] sm:rounded-[50px] rounded-full relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div><div className="h-auto w-[100%] img_box1 ">
        <img
          src="/images/man-fg04.webp"
          alt=""
          className="h-auto md:h-[831px] w-[100%] relative"
        />
        <img
          src="/images/man-mask01.svg"
          alt=""
          className="active absolute top-0 left-0 object-cover img_hover h-full w-full hidden 2xl:block "
        />
        <div className="h-[116px]  relative flex  justify-between sm:px-10 px-6">
          <div className="flex justify-center flex-col">
            <h2 className="sm:text-3xl text-xl">syabaan clear</h2>
            <p className="sm:text-xl text-sm">日中美容液 シャバーン クリア</p>
          </div>

          <button className="check_btn h-[71px] 2xl:w-[237px] lg:w-[170px] border w-[71px] sm:rounded-[50px] rounded-full relative my-5 ">
            <span>Check</span>
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default ProductList;
