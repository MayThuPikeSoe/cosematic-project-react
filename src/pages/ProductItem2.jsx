import { useState } from "react";
import "../css/productItem.css";
import { Link } from "react-router-dom";
import productDetail from "../js/productDetail.js";
const ProductItem2 = () => {
  // setOrder => context api
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const openState = () => {
    setOpen(!open);
  };
  const openState1 = () => {
    setOpen1(!open1);
  };

  // setOrder()
  // navigate('/shop/cart')

  return (
    <div>
      <div className="flex">
        <div className="w-[50%]">
          <img
            src="/images/item-fg04.webp"
            alt=""
            className="aos-init aos-animate add-img"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          />
        </div>
        <div className="w-[50%] bg-gradient-to-br from-[#dccaf0] to-[#70d8eb] pt-[280px] px-10">
          <p>日中美容液 シャバーン クリア</p>
          <h1 className="sm:text-7xl text-5xl font-medium py-4">
            syabaan clear
          </h1>
          <h4 className="sm:text-4xl text-3xl font-medium">
            ¥2,420 <span className="font-bold">Tax in</span>
          </h4>
          <div onClick={openState}>
            <div className="border-b-2 border-gray-400 mt-12 mb-5 flex justify-between cursor-pointer">
              <h4 className="title mb-4 ">Product Summary</h4>
              <div className={`btn  ${open ? "open" : ""}`}></div>
            </div>
            <ul className={`product_menu  ${open ? "open" : " "}`}>
              <li>製品名：syabaan clear</li>
              <li>内容量：40ｇ</li>
              <li>製造国：韓国</li>
            </ul>
          </div>

          <div onClick={openState1}>
            <div className="border-b-2 border-gray-400 mt-12 mb-5 flex justify-between cursor-pointer">
              <h4 className="title mb-4 ">Cancel Policy</h4>
              <div className={`btn1  ${open1 ? "open1" : ""}`}></div>
            </div>
            <ul className={`product_menu  ${open1 ? "open1" : " "}`}>
              <li>
                ご注文手続完了後のお客様都合による返品・キャンセル・交換は、お受け
              </li>
              <li>
                ですることができません。十分にご検討いただいた上でご注文下さい。
              </li>
            </ul>
          </div>

          <Link to={`/product-detail/${productDetail.id}`}>
            <div className="flex justify-center mt-14 relative z-40 w-full h-20">
              <button className="add_btn w-full h-full border-black bg-white rounded-full font-bold">
                Add To Cart
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className=" h-[1100px]  bg-gradient-to-br from-[#dccaf0] to-[#70d8eb] overflow-hidden img_bg relative flex flex-col justify-center items-center z-50">
        <h1
          className="border-black text-5xl font-medium bg-transparent w-[600px] h-[130px] border rounded-[50%] text-center items-center flex justify-center text-gray-700 aos-init aos-animate"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Moisturizing
        </h1>
        <p
          className="text-xl text-center mt-6 aos-init aos-animate "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Protects skin from powerful UV rays with SPF50+PA＋＋ <br />
          ＋＋, a UV serum that does not dry out skin. <br />
          Can also be used as a makeup base!
        </p>
        <div className="flex justify-end mt-8 w-[100%] aos-init aos-animate">
          <div
            className="w-[700px]"
            data-aos="fade-left"
            data-aos-duration="4000"
          >
            <h2 className="text-4xl font-medium">日中の肌を継続的に保湿！</h2>
            <h5 className="text-2xl font-medium mt-8 mb-12">
              みずみずしいテクスチャーで、負担の少ないつけ心地を実現
            </h5>
            <p className="text-xl">
              紫外線から肌を守る、乾燥が気にならないUV美容液 <br />
              SPF50＋PA＋＋＋＋で強力な紫外線から肌を防御 <br />
              化粧下地としても使用可能
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[1100px] pl-20 bg-gradient-to-br from-[#dccaf0] to-[#70d8eb] overflow-hidden img_bg1 relative flex flex-col justify-center items-center z-50">
        <h1
          className="border-black text-5xl font-medium bg-transparent w-[600px] h-[130px] border rounded-[50%] text-center items-center flex justify-center text-gray-700 aos-init aos-animate"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Moisturizing
        </h1>
        <p
          className="text-xl text-center mt-6 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Protects skin from powerful UV rays with SPF50+PA＋＋ <br />
          ＋＋, a UV serum that does not dry out skin. <br />
          Can also be used as a makeup base!
        </p>
        <div className="flex justify-start mt-8 w-[100%]">
          <div
            className="w-[700px] aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="text-4xl font-medium">日中の肌を継続的に保湿！</h2>
            <h5 className="text-2xl font-medium mt-8 mb-12">
              みずみずしいテクスチャーで、負担の少ないつけ心地を実現
            </h5>
            <p className="text-xl">
              紫外線から肌を守る、乾燥が気にならないUV美容液 <br />
              SPF50＋PA＋＋＋＋で強力な紫外線から肌を防御 <br />
              化粧下地としても使用可能
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#dccaf0] to-[#70d8eb] h-auto text-center px-32 py-24 aos-init aos-animate">
        <h1 className="sm:text-7xl text-5xl font-bold">Ingredient</h1>
        <img
          src="/images/clear-ingredient.png"
          alt=""
          className="aos-init aos-animate img-animate"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <p
          className="text-start text-3xl mb-5 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          All Ingredients
        </p>
        <p
          className="text-start aos-animate aos-init"
          data-aos="fade-up"
          data-aos-duration="5000"
        >
          水、アジピン酸ジブチル、プロパンジオール、サリチル酸ブチルオクチル、エチルヘキシルトリアゾン、ポリメチルシルセスキオキサン、ジエチルアミノヒドロキシベンゾイル安息香酸ヘキシル、ナイアシンアミド、ドロメトリゾールトリシロキサン、メチレンビスベンゾトリアゾリルテトラメチルブチルフェノール、（カプリル酸／カプリン酸）ヤシアルキル、カプリリルメチコン、パンテノール、グリセリン、ＢＧ、ヒアルロン酸Ｎａ、１．２－ヘキサンジオール、（ＶＰ／エイコセン）コポリマー、ペンチレングリコール、ベヘニルアルコール、ポリアクリル酸アルキル（Ｃ１０－３０、ジステアリン酸ポリグリセリル－３メチルグルコース、（ジメチコン／ビニルジメチコン）クロスポリマー、デシルグルコシド、ジメチコノール、トリシロキサン、トロメタミン、カルボマー、（アクリレーツ／アクリル酸アルキル（Ｃ１０－３０））クロスポリマー、ステアロイルグルタミン酸Ｎａ、ポリアクリレートクロスポリマー－６、エチルヘキシルグリセリン、アデノシン、キサンタンガム、シアノコバラミン、ｔ－ブタノール、クエン酸、トコフェロール、加水分解エラスチン、加水分解コラーゲン、香料
        </p>
      </div>
      {/* how to use */}
      <div className="bg-gradient-to-br from-[#dccaf0] to-[#70d8eb] pb-5 pt-20">
        <h1
          className="text-center sm:text-8xl text-5xl mb-8 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          How To Use
        </h1>
        <div className="flex gap-12 px-24 py-10 justify-between ">
          <div className="flex flex-col mt-10">
            <div
              className="sm:text-8xl text-5xl flex gap-10 mb-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <h2>1</h2>
              <div className="mb-8">
                <h3 className="text-xl sm:text-4xl mb-8">
                  枝豆1粒分を目安に手に取ります
                </h3>
                <p className="text-xl">
                  少なかったら乾燥するし、多かったら化粧崩れの原因につながっちゃう・・・{" "}
                  <br />
                  まぁ、人の顔の大きさそれぞれだし、枝豆の大きさもそれぞれだし適量見つけてよ
                </p>
              </div>
            </div>
            <div
              className="sm:text-8xl text-5xl flex gap-10 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              <h2>2</h2>
              <div>
                <h3 className="text-xl sm:text-4xl mb-8">
                  枝豆1粒分を目安に手に取ります
                </h3>
                <p className="text-xl">
                  少なかったら乾燥するし、多かったら化粧崩れの原因につながっちゃう・・・{" "}
                  <br />
                  まぁ、人の顔の大きさそれぞれだし、枝豆の大きさもそれぞれだし適量見つけてよ
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center overflow-hidden bg-white border-black w-[452px] h-[452px] movie">
            <iframe
              width="1152"
              height="648"
              src="https://www.youtube.com/embed/eU7AT82xP_Q?controls=0&amp;autoplay=1&amp;mute=1&amp;playsinline=1&amp;disablekb=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;loop=1&amp;playlist=eU7AT82xP_Q"
              loading="lazy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="flex gap-8 mt-auto loop">
          <div className="flex">
            <p className="text-6xl w-96">make u more </p>
            <img src="/images/heart-icon.svg" alt="" className="pt-6" />
          </div>
          <div className="flex">
            <p className="text-6xl w-96">make u more </p>
            <img src="/images/heart-icon.svg" alt="" className="pt-6" />
          </div>
          <div className="flex">
            <p className="text-6xl w-96">make u more </p>
            <img src="/images/heart-icon.svg" alt="" className="pt-6" />
          </div>
          <div className="flex">
            <p className="text-6xl w-96">make u more </p>
            <img src="/images/heart-icon.svg" alt="" className="pt-6" />
          </div>
          <div className="flex">
            <p className="text-6xl w-96">make u more </p>
            <img src="/images/heart-icon.svg" alt="" className="pt-6" />
          </div>
        </div>
      </div>
      {/* product */}
      <section className="product h-auto py-24 px-9">
        <h1
          className="text-center py-[100px] text-3xl aos-init aos-animate font-medium sm:text-8xl "
          data-aos="fade-down"
          data-aos-duration="2000"
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
    </div>
  );
};

export default ProductItem2;
