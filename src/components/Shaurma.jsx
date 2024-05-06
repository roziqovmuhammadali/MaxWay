import React, { useState, useEffect } from "react";
import axios from "axios";
const Shaurma = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  useEffect(() => {
    axios
      .get("https://66349ced9bb0df2359a218d1.mockapi.io/products")
      .then((response) => {
        setProducts(response.data.slice(53, 55));
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi!", error);
      });
  }, []);

  const handleProductClick = (productId) => {
    setSelectedProductIds((prevSelectedProductIds) => {
      if (prevSelectedProductIds.includes(productId)) {
        return prevSelectedProductIds.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProductIds, productId];
      }
    });
  };

  const increment = (productId) => {
    setSelectedProductIds((prevSelectedProductIds) => {
      const index = prevSelectedProductIds.indexOf(productId);
      if (index !== -1) {
        const updatedSelectedProductIds = [...prevSelectedProductIds];
        updatedSelectedProductIds.splice(index, 1, productId);
        return updatedSelectedProductIds;
      }
      return prevSelectedProductIds;
    });
  };
  return (
    <div>
      <div className="sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px]">
        <h1 className="text-[38px] font-bold leading-8 pb-8 left-0">
          🌮Shaurma
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[304px] hover:shadow-3xl hover:shadow-gray-950 h-[379px] shadow-xl my-6 rounded-xl py-4 flex flex-col justify-center items-center"
            >
              <img
                src={product.productImage}
                alt="logo"
                className="w-full rounded-t-xl "
              />
              <div className="w-full h-full p-4 space-y-3">
                <h1 className=" text-[18px] font-bold">
                  {product.productName}
                </h1>
                <p className="font-normal text-[12px] leading-4 text-[#48535B] w-[256px] h-[17px] ">
                  {product.productdisc}
                </p>
                <div className="flex pb-6 items-center left-0 w-full justify-between space-y-8">
                  <div className="flex pt-7 items-center left-0 gap-1 pr-9">
                    <h1 className="font-bold text-[18px]">
                      {product.productPrice}
                    </h1>
                    <p>so'm</p>
                  </div>
                  <div className="relative mt-11 mb-10 items-center flex justify-items-center h-10">
                    {!selectedProductIds.includes(product.id) ? (
                      <button
                        className="bg-[#51267D] rounded-3xl w-[106px] h-10 text-white"
                        onClick={() => handleProductClick(product.id)}
                      >
                        Qo'shish
                      </button>
                    ) : (
                      <div className="mt-11 mb-10 items-center flex justify-items-center h-10">
                        <button
                          className="bg-[#51267D] rounded-l-3xl w-8 h-8 text-white"
                          onClick={() => decrement(product.id)}
                        >
                          -
                        </button>
                        <span className="px-2">
                          {
                            selectedProductIds.filter((id) => id === product.id)
                              .length
                          }
                        </span>
                        <button
                          className="bg-[#51267D] rounded-r-3xl w-8 h-8 text-white"
                          onClick={() => increment(product.id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shaurma;
