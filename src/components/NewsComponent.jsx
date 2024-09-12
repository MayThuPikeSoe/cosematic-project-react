
const NewsComponent = () => {
  return (
    <div className="sm:pt-52 pt-28 pb-11 footer md:px-20 px:8 flex flex-col relative px-8">
      {" "}
      <div className="flex justify-between items-center md:flex-row flex-col">
        <h1 className="sm:text-8xl text-6xl">News</h1>
        <div className="flex justify-center items-center product_btn ">
          <a className="py-6 my-12 px-20 border border-black rounded-[40px] bg-white view_btn">
            View All Products
          </a>
        </div>
      </div>
      <ul className="flex flex-col w-[100%] mb-14">
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5  md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0">
            銀座ロフトイベントのお知らせ
          </a>
          <div className="date">Mar 13. 2024</div>
        </li>
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5  md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0">
            能登半島地震の影響によるお荷物のお届けについて
          </a>
          <div className="date">Jan 05. 2024</div>
        </li>
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5 md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0">
            makeumor店頭販売開始キャンペーン
          </a>
          <div className="date">Dec 27. 2023</div>
        </li>
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5  md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0">
            【makeumor】OPEN記念ノベルTEA終了のお知らせ
          </a>
          <div className="date">Dec 26. 2023</div>
        </li>
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5  md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0">
            年末年始休業のお知らせ
          </a>
          <div className="date">Dec 22. 2023</div>
        </li>
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5  md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0">
            4,000円(tax in)以上購入またはsyabaan clear + churuun
            set購入で送料無料
          </a>
          <div className="date w-40 md:w-64 text-start lg:text-end">
            Dec 18. 2023
          </div>
        </li>
        <li className="flex justify-between border-b-[1px] border-black lg:py-10 py-5  md:text-2xl text-xl font-medium lg:flex-row flex-col">
          <a href="#" className="pb-4 md:pb-0 ">
            昼の日中美容液「syabaan」・夜のシートマスク「churuun」12月19日（火）12:00より公式サイトにて発売
          </a>
          <div className="date w-40 md:w-64 text-start lg:text-end">
            Dec 11. 2023
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NewsComponent;
