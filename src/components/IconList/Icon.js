import React from "react";

export const Icon = ({ img, alt, name }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-xl">
      <p className="text-center mb-2">{name}</p>
      <img src={img} alt={alt} className="sm:h-36 h-16 mx-auto" />
    </div>
  );
};

export default Icon;
