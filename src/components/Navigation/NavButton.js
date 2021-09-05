import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavButton = ({ name, id, isActive, handleNavButtonClick }) => {
  return (
    <button
      key={name}
      onClick={() => {
        handleNavButtonClick();
        const navBarOffset = 64;
        const topOfElement =
          document.getElementById(id).offsetTop - navBarOffset;
        window.scroll({ top: topOfElement, behavior: "smooth" });
      }}
      className={classNames(
        isActive
          ? "bg-purple-600 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "block px-3 py-2 rounded-md text-base font-medium"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {name}
    </button>
  );
};

export default NavButton;