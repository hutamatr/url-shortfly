import React, { useState } from "react";

import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/icons/logo.svg";

const Navigation = () => {
  const [menuView, setMenuView] = useState<Boolean>(false);

  const menuViewHandler = () => {
    setMenuView((prevState) => !prevState);
  };

  const menuCLoseOnMobile = () => setMenuView(false);

  return (
    <nav className="flex flex-row items-center justify-between py-4 px-4">
      <img src={logo} alt="Shortly" />

      <div>
        <button className="sm:hidden" onClick={menuViewHandler}>
          {menuView ? (
            <MdClose className="h-6 w-6 text-neutral-grayish-violet" />
          ) : (
            <MdMenu className="h-6 w-6 text-neutral-grayish-violet" />
          )}
        </button>
      </div>

      <ul
        className={`absolute top-20 left-0 right-0 z-10 mx-auto flex min-h-[50vh] w-[85%] flex-col items-center gap-y-6 rounded-lg bg-primary-dark-violet p-6 text-center text-neutral-500 shadow-md duration-700 sm:static sm:top-0 sm:min-h-0 sm:w-auto sm:translate-x-0 sm:flex-row sm:items-center sm:gap-x-8 sm:bg-transparent sm:py-0 sm:opacity-100 sm:shadow-none ${
          menuView ? "" : "-left-[100vh] opacity-0"
        }`}
      >
        <div className="flex w-full flex-col items-center gap-y-6 gap-x-4 border-b-[.5px] border-b-neutral-grayish-violet pb-6 pt-2 sm:flex-row sm:border-b-0 sm:pb-0 sm:pt-0">
          <li
            className="navigation-list sm:text-neutral-grayish-violet"
            onClick={menuCLoseOnMobile}
          >
            Features
          </li>
          <li
            className="navigation-list sm:text-neutral-grayish-violet"
            onClick={menuCLoseOnMobile}
          >
            Pricing
          </li>
          <li
            className="navigation-list sm:text-neutral-grayish-violet"
            onClick={menuCLoseOnMobile}
          >
            Resources
          </li>
        </div>
        <li
          className="navigation-list sm:text-neutral-grayish-violet"
          onClick={menuCLoseOnMobile}
        >
          Login
        </li>
        <li
          className="navigation-list w-full rounded-full bg-primary-cyan py-2 sm:bg-transparent sm:text-neutral-grayish-violet"
          onClick={menuCLoseOnMobile}
        >
          Sign Up
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
