import React from "react";

export const PortfolioItem = ({
  href,
  name,
  img,
  description,
  leftAligned = false,
}) => {
  const containerClass = leftAligned
    ? "flex flex-wrap md:flex-nowrap mb-10"
    : "flex flex-row-reverse flex-wrap md:flex-nowrap mb-10";
  const imageClass = leftAligned ? "w-4/5 mx-auto" : " w-4/5 mx-auto";
  return (
    <div className={containerClass}>
      <div className="md:w-1/2">
        <div className={imageClass}>
          <div className="relative text-center">
            <a href={href} target="_blank" rel="noreferrer">
              <img
                src={img}
                alt={name}
                className="shadow-xl h-full	w-full relative block mb-5"
              />
              <div className="portfolioOverlay hover:opacity-100 flex">
                <button className="m-auto bg-white hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border-2 border-purple-500 hover:border-transparent rounded">
                  Visit site
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 my-auto">
        <a href={href} target="_blank" rel="noreferrer">
          <p className="mb-1 text-purple-600 text-xl hover:underline">{name}</p>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
