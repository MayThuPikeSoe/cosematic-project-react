import React from "react";

const ProductList = () => {
  return (
    <div className="h-[500px]">
      <div className="img-list flex h-[400px] justify-between">
        <div>
          <img src="/images/man-fg01.webp" alt="" className="w-[100%]" />
          <img src="/images/man-mask01.svg" alt="" />
        </div>
        <img src="/images/man-fg02.webp" alt="" className="w-[100%]" />
      </div>
    </div>
  );
};

export default ProductList;
