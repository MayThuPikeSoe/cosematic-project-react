import { useState } from "react";
import "../css/productItem.css";
const ProductItem = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const openState = () => {
    setOpen(!open);
  };
  const openState1 = () => {
    setOpen1(!open1);
  };
  return (
    <div>
      <div className="flex">
        <div className="w-[50%]">
          <img src="/images/item1.jpg" alt="" />
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
          <div className="flex justify-center mt-14 relative z-40">
            <button className="add_btn w-96 h-14 border-black bg-white rounded-2xl font-bold">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className=" h-screen w-[100%] bg-gradient-to-br from-[#dccaf0] to-[#70d8eb] img_bg relative flex flex-col justify-center items-center z-50">
        <h1 className="border-black text-5xl font-medium bg-transparent w-[600px] h-[130px] border rounded-[50%] text-center items-center flex justify-center text-gray-700">
          Moisturizing
        </h1>
        <p className="text-xl text-center mt-6">
          Protects skin from powerful UV rays with SPF50+PA＋＋ <br />
          ＋＋, a UV serum that does not dry out skin. <br />
          Can also be used as a makeup base!
        </p>
        <div className="flex justify-end mt-8 w-[100%]">
          <div className="w-[700px]">
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
    </div>
  );
};

export default ProductItem;
