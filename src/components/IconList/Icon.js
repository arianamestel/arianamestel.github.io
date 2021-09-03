import React from "react";

export const Icon = ({ img, alt }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-xl">
      <img src={img} alt={alt} className="sm:h-36 h-16 mx-auto" />
    </div>
  );
};

export default Icon;
