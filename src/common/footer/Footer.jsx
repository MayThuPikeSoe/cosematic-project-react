const Footer = () => {
  return (
    <div className="pt-52 pb-11 footer md:px-20 px:8 flex flex-col relative">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <h1 className="text-8xl">News</h1>
        <div className="flex justify-center items-center product_btn ">
          <a className="py-6 my-12 px-20 border border-black rounded-[40px] bg-white view_btn">
            View All Products
          </a>
        </div>
      </div>
      <table className="table-auto w-full mb-20 px-4">
        <tbody>
          <tr
            className="sm:text-2xl text-xl font-bold border-b-[1px] border-black py-8 md:h-32 h-10  hover:opacity-55 cursor-pointer aos-animate aos-init"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="300"
          >
            <td className="sm:line-clamp-none line-clamp-1 md:mt-12 mt-1 pl-6 md:px-0 ">
              銀座ロフトイベントのお知らせ
            </td>

            <td className="text-end lg:w-96 md:w-56 w-44 pr-6 md:pr-0 ">
              Mar 13. 2024
            </td>
          </tr>
          <tr
            className="sm:text-2xl text-xl font-bold border-b-[1px] border-black py-8 h-32 hover:opacity-55 cursor-pointer aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <td className="sm:line-clamp-none line-clamp-1 md:mt-12 mt-1 pl-6 md:px-0 ">能登半島地震の影響によるお荷物のお届けについて</td>
            <td className="text-end lg:w-96 md:w-56 w-44 pr-6 md:pr-0 ">Jan 05. 2024</td>
          </tr>
          <tr
            className="text-2xl font-bold border-b-[1px] border-black py-8 h-32 hover:opacity-55 cursor-pointer aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <td>makeumor店頭販売開始キャンペーン</td>
            <td className="text-end ">Dec 27. 2023</td>
          </tr>
          <tr
            className="text-2xl font-bold border-b-[1px] border-black py-8 h-32 hover:opacity-55 cursor-pointer aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="600"
          >
            <td>【makeumor】OPEN記念ノベルTEA終了のお知らせ</td>
            <td className="text-end ">Dec 26. 2023</td>
          </tr>
          <tr
            className="text-2xl font-bold border-b-[1px] border-black py-8 h-32 hover:opacity-55 cursor-pointer aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <td>年末年始休業のお知らせ</td>
            <td className="text-end ">Dec 22. 2023</td>
          </tr>
          <tr
            className="text-2xl font-bold border-b-[1px] border-black py-8 h-32 hover:opacity-55 cursor-pointer aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <td>
              4,000円(tax in)以上購入またはsyabaan clear + churuun
              set購入で送料無料
            </td>
            <td className="text-end ">Dec 18. 2023</td>
          </tr>
          <tr
            className="text-2xl font-bold border-b-[1px] border-black py-8 h-32 transition  hover:opacity-55 cursor-pointer aos-init aos-animate"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="900"
          >
            <td>
              昼の日中美容液「syabaan」・夜のシートマスク「churuun」12月19日（火）12:00より公式サイトにて発売
            </td>
            <td className="text-end ">Dec 11. 2023</td>
          </tr>
        </tbody>
      </table>
      <div className="membership flex  justify-between mb-32">
        <div
          className="aos-init aos-animate"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          <h1 className="text-7xl mb-7 font-medium">Membership</h1>
          <p className="font-bold">
            登録すると、最新コレクション、キャンペーン、最新情報などを受け取ることができます。
          </p>
          <div className="flex  items-start product_btn">
            <a className="py-6 my-12 px-32 border border-black rounded-[40px] bg-white view_btn all-pd_btn">
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
          className="flex justify-between gap-11 aos-init aos-animate"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="600"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <ul className=" text-xl font-medium  cursor-pointer">
            <li className="text-4xl font-medium mb-10">NAVIGATE</li>

            <li className="hover:opacity-55 transition">Top</li>
            <li className="hover:opacity-55 transition">Products</li>
            <li className="hover:opacity-55 transition">ABOUT</li>
            <li className="hover:opacity-55 transition">NEWS</li>
          </ul>
          <ul className=" text-xl font-medium  cursor-pointer">
            <li className="text-4xl font-medium mb-10">COMPANY</li>

            <li className="hover:opacity-55 transition">COMPANY</li>
            <li className="hover:opacity-55 transition">PRIVACY POLICY</li>
            <li className="hover:opacity-55 transition">TERMS OF SERVICE</li>
            <li className="hover:opacity-55 transition">FAQ</li>
            <li className="hover:opacity-55 transition">CONTACT</li>
            <li className="hover:opacity-55 transition">LAW</li>
            <li className="hover:opacity-55 transition">Cookie Preferences</li>
          </ul>
          <ul className=" text-xl font-medium  cursor-pointer">
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
      <div className="flex justify-end absolute bottom-0 w-[100vw] h-[19vw] -mt-36 pr-11 overflow-hidden ">
        <img
          src="/images/subscribe-fg.webp"
          alt=""
          className=" object-cover h-[39vw] w-[17vw] overflow-hidden"
        />
      </div>
      <p className="mt-auto text-4xl">©makeumor</p>
    </div>
  );
};

export default Footer;
