import React from "react";

export const PortfolioItem = ({ href, name, img, description }) => {
  return (
    <>
      <div className="w-4/5 m-auto pr-4">
        <div className="relative text-center">
          <a href={href} target="_blank" rel="noreferrer">
            <img
              src={img}
              alt={name}
              className="shadow-xl h-full	w-full relative block"
            />
            <div className="portfolioOverlay hover:opacity-100 flex">
              <button className="m-auto bg-white hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                Visit site
              </button>
            </div>
          </a>
        </div>
      </div>
      <div className="my-auto">
        <a href={href} target="_blank" rel="noreferrer">
          <p className="mb-1 text-purple-600 text-xl hover:underline">{name}</p>
        </a>
        <p>{description}</p>
      </div>
    </>
  );
};

export default PortfolioItem;
