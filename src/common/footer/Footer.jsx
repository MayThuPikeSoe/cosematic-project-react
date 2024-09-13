const Footer = () => {
  return (
    <div className="sm:pt-52 pt-28 pb-11 footer md:px-20 px:8 flex flex-col relative px-8">
      <div className="membership flex  justify-between sm:mb-32 mb-10 2xl:flex-row flex-col  ">
        <div
          className="aos-init aos-animate mb-10"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          <h1 className="md:text-7xl text-5xl mb-7 font-medium">Membership</h1>
          <p className="font-bold">
            登録すると、最新コレクション、キャンペーン、最新情報などを受け取ることができます。
          </p>
          <div className="flex  items-start product_btn">
            <a className="md:py-6 py-4 my-12 md:px-32 px-20 border border-black rounded-[40px] bg-white view_btn all-pd_btn">
              Create Account
            </a>
          </div>
          <p className="font-bold">
            お客様は、上記に登録することにより、お客様は当社の個人情報保護方針に同意したことになります。
          </p>
          <p className="font-bold mt-4 ">
            <a
              href=""
              className="cursor-pointer underline decoration-slate-500 "
            >
              プライバシー
            </a>
            ポリシーを参照してください。
          </p>
        </div>
        <div
          className="flex md:justify-between gap-11 aos-init aos-animate justify-around "
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="600"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <ul className=" text-xl font-medium  cursor-pointer">
            <li className="sm:text-4xl text-2xl font-bold sm:font-medium mb-10">
              NAVIGATE
            </li>

            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              Top
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              Products
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              ABOUT
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              NEWS
            </li>
          </ul>
          <ul className=" text-xl font-medium  cursor-pointer">
            <li className="sm:text-4xl text-2xl font-bold sm:font-medium mb-10">
              COMPANY
            </li>

            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              PRIVACY POLICY
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              TERMS OF SERVICE
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              FAQ
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              CONTACT
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              LAW
            </li>
            <li className="hover:opacity-55 transition sm:text-2xl text-sm">
              Cookie Preferences
            </li>
          </ul>
          <ul className=" text-xl font-medium  cursor-pointer lg:block hidden">
            <li className="text-4xl font-medium mb-10">SOCIAL</li>

            <li className="">
              <a href="#">
                <i className="fa-brands fa-instagram mr-5 social_icon  hover:text-red-500 "></i>
                <span className="hover:opacity-55 "> Instagram</span>
              </a>
            </li>
            <li className=" ">
              <a href="#">
                <i className="fa-brands fa-x-twitter mr-5 social_icon hover:text-red-500 "></i>
                <span className="hover:opacity-55 ">X (Twitter)</span>
              </a>
            </li>
            <li className="  ">
              <a href="#">
                <i className="fa-brands fa-line mr-5 social_icon hover:text-red-500"></i>
                <span className="hover:opacity-55 ">Line</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center mb-9 gap-20">
        <i className="fa-brands fa-instagram mr-5 social_icon  hover:text-red-500 text-4xl"></i>
        <i className="fa-brands fa-x-twitter mr-5 social_icon hover:text-red-500 text-4xl"></i>
        <i className="fa-brands fa-line mr-5 social_icon hover:text-red-500 text-4xl"></i>
      </div>
      <div className="flex justify-end absolute bottom-0 w-[100vw] h-[19vw] -mt-36 pr-11 overflow-hidden  ">
        <img
          src="/src/images/subscribe-fg.webp"
          alt=""
          className=" object-cover sm:h-[39vw] sm:w-[17vw] h-[45vw] w-[20vw] overflow-hidden"
        />
      </div>
      <p className="mt-auto sm:text-4xl text-2xl">©makeumor</p>
    </div>
  );
};

export default Footer;
