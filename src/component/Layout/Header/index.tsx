import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

import DATA from '@/constant';
import { Buttons } from '@/component/UI/atoms';
import { Transition } from '@headlessui/react';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 150) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };
  }, []);

  return (
    <header
      className={`${
        scrollY ? 'fixed top-0 w-full z-50' : 'relative'
      } px-8 lg:px-20 xl:px-52 pt-12 flex flex-col`}
    >
      <div
        className={`${
          scrollY
            ? 'bg-blur'
            : 'bg-white/5 md:bg-transparent md:py-0 md:px-0'
        } flex flex-row justify-between py-4 px-8 rounded-md`}
      >
        <div className="flex flex-row items-center gap-2">
          <img src="./logo.svg" alt="" />
          <span className="text-white text-2xl font-bold">Collosal.</span>
        </div>
        <nav className="hidden md:flex my-auto">
          <ul className="flex flex-row gap-[50px]">
            {DATA.MENUS.map((menu) => (
              <li
                key={menu.id}
                className="text-white/80 hover:text-white transition whitespace-nowrap"
              >
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex">
          <Buttons
            type="button"
            color="white"
            label="Contact"
            size="small"
            style="light"
            onClick={() => console.log()}
          />
        </div>
        <button
          type="button"
          className="flex my-auto cursor-pointer md:hidden"
          onClick={() => setShowNav((prev) => !prev)}
        >
          <RxHamburgerMenu
            size={24}
            className={`${showNav ? 'text-cyan' : 'text-white/80'} transition`}
          />
        </button>
      </div>
      <Transition
        show={showNav}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <nav
          className={`${
            scrollY ? 'bg-blur' : 'bg-white/5 md:bg-transparent'
          } md:hidden p-10 rounded-md mt-3`}
        >
          <ul className="flex flex-col gap-[50px]">
            {DATA.MENUS.map((menu) => (
              <li
                key={menu.id}
                className="text-white/80 hover:text-white transition"
              >
                <Link to={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Transition>
    </header>
  );
};

export default Header;
