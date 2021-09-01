import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavButton from "./NavButton";

const navigation = [
  { name: "About me", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
];

export const NavBar = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <Disclosure as="nav" className="bg-gray-800 shadow-lgx sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* hamburger for mobile */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center text-white">
                Ariana Mestel
              </div>

              <div className="flex-1 flex items-center justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-3">
                    {navigation.map((item, i) => (
                      <NavButton
                        key={item.name}
                        {...item}
                        isActive={activeButton === i}
                        handleNavButtonClick={() => setActiveButton(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item, i) => (
                <NavButton
                  key={item.name}
                  {...item}
                  isActive={activeButton === i}
                  handleNavButtonClick={() => setActiveButton(i)}
                />
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
