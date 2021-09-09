import React from "react";
import StockImage from "../../assets/background.jpg";

export const Description = () => {
  return (
    <div className="box-border">
      <div className="description mt-2 sm:mt-6 md:mt-8 text-bold">
        <h1 className="text-3xl sm:text-5xl md:text-7xl text-purple-600 white-text-shadow">
          Ariana Mestel
        </h1>
        <h3 className="text-2xl sm:text-4xl md:text-6xl text-white purple-text-shadow">
          Web Developer
        </h3>
      </div>
      <div className="shadow-white">
        <img src={StockImage} alt="computer" className="stockImg" />
      </div>
    </div>
  );
};

export default Description;
