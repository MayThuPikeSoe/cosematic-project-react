const BottomScrollbar = () => {
  return (
    <div className=" bg-white w-screen h-screen absolute bottom-20 p-0">
      <div className="flex justify-between items-center p-10">
        <div>
          <p>churuun </p>
          <p className="font-bold">
            ¥1,980 <span>Tax in</span>
          </p>
        </div>
        <div className=" relative z-40 w-[400px] h-20 px-20">
          <button className="add_btn w-full h-full border-black bg-white rounded-full font-bold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomScrollbar;
