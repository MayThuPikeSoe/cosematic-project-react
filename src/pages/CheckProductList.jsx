const CheckProductList = () => {
  return (
    <section className="product h-auto py-24 px-9">
      <h1
        className="text-center py-[100px] text-6xl  "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Products
      </h1>
      <ul className="grid xl:grid-cols-4 sm:grid-cols-2  grid-cols-1 justify-center items-center gap-5 my-10 ">
        <li
          className="rounded-lg  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] button_hover justify-center flex flex-col items-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <a
            href=""
            className="h-[560px] flex flex-col py-10 w-full items-center"
          >
            <img
              src="/images/item-fg01.webp"
              alt=""
              className="w-[300px]  img"
            />
            <div className="mt-auto text-xl text-[#555353] px-5 w-full ">
              <h3>syabaan clear</h3>
              <p className="mb-5">日中美容液 シャバーン クリア</p>
              <div className="flex justify-between h-auto w-{100%]  ">
                <p className="flex justify-center items-center font-bold text-2xl">
                  ¥2,420 <small>Tax in</small>
                </p>
                <button className="arrow_btn h-[70px] w-[70px] border relative ">
                  <i className="fa-solid fa-arrow-right icon text-2xl"></i>
                </button>
              </div>
            </div>
          </a>
        </li>
        {/*card2  */}
        <li
          className="rounded-lg  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] button_hover justify-center flex flex-col items-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <a
            href=""
            className="h-[560px] flex flex-col py-10 w-full items-center"
          >
            <img
              src="/images/item-fg02.webp"
              alt=""
              className="w-[300px]  img"
            />
            <div className="mt-auto text-xl text-[#555353] px-5 w-full ">
              <h3>syabaan clear</h3>
              <p className="mb-5">日中美容液 シャバーン クリア</p>
              <div className="flex justify-between h-auto w-{100%]  ">
                <p className="flex justify-center items-center font-bold text-2xl">
                  ¥2,420 <small>Tax in</small>
                </p>
                <button className="arrow_btn h-[70px] w-[70px] border relative ">
                  <i className="fa-solid fa-arrow-right icon text-2xl"></i>
                </button>
              </div>
            </div>
          </a>
        </li>
        {/*card3 */}
        <li
          className="rounded-lg  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] button_hover justify-center flex flex-col items-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <a
            href=""
            className="h-[560px] flex flex-col py-10 w-full items-center"
          >
            <img
              src="/images/item-fg03.webp"
              alt=""
              className="w-[300px]  img"
            />
            <div className="mt-auto text-xl text-[#555353] px-5 w-full ">
              <h3>syabaan clear</h3>
              <p className="mb-5">日中美容液 シャバーン クリア</p>
              <div className="flex justify-between h-auto w-{100%]  ">
                <p className="flex justify-center items-center font-bold text-2xl">
                  ¥2,420 <small>Tax in</small>
                </p>
                <button className="arrow_btn h-[70px] w-[70px] border relative ">
                  <i className="fa-solid fa-arrow-right icon text-2xl"></i>
                </button>
              </div>
            </div>
          </a>
        </li>
        {/*card4 */}
        <li
          className="rounded-lg  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] button_hover justify-center flex flex-col items-center aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <a
            href=""
            className="h-[560px] flex flex-col py-10 w-full items-center"
          >
            <img
              src="/images/item-fg04.webp"
              alt=""
              className="w-[300px]  img"
            />
            <div className="mt-auto text-xl text-[#555353] px-5 w-full ">
              <h3>syabaan clear</h3>
              <p className="mb-5">日中美容液 シャバーン クリア</p>
              <div className="flex justify-between h-auto w-{100%]  ">
                <p className="flex justify-center items-center font-bold text-2xl">
                  ¥2,420 <small>Tax in</small>
                </p>
                <button className="arrow_btn h-[70px] w-[70px] border relative ">
                  <i className="fa-solid fa-arrow-right icon text-2xl"></i>
                </button>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div
        className="flex justify-center items-center product_btn aos-animate aos-init  "
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        <a className="sm:py-6 my-12 sm:px-32 py-4 px-20 border border-black rounded-[40px] bg-white view_btn ">
          View All Products
        </a>
      </div>
    </section>
  );
};

export default CheckProductList;
