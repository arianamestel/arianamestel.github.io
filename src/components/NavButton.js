import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const NavButton = ({ name, href, isActive, handleNavButtonClick }) => {
  return (
    <a
      key={name}
      href={href}
      onClick={handleNavButtonClick}
      className={classNames(
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "block px-3 py-2 rounded-md text-base font-medium"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {name}
    </a>
  );
};

export default NavButton;
