import { useState } from "react";
import ConnectWallet from "./connect-wallet";

export default function Header() {
  const [activePopupMenu, setActivePopupMenu] = useState(false);
  return (
    <div className="flex w-full c items-center md:flex mt-8 justify-between">
      <div className="block" onClick={() => setActivePopupMenu(true)}>
        <a href="/">
          <img
            src="/images/logo1.svg"
            alt="Tender Finance"
            style={{
              height: 30,
            }}
          />
        </a>
      </div>
      <div className="hidden md:flex justify-center text-gray-400 font-nova-400">
        <a className="px-2 cursor-pointer hover:text-white  ">About</a>
        <a className="px-2 cursor-pointer hover:text-white  ">Roadmap</a>
        <a className="px-2 cursor-pointer hover:text-white  ">Partners</a>
        <a className="px-2 cursor-pointer hover:text-white  ">Team</a>
        <a className="px-2 cursor-pointer hover:text-white  ">Docs</a>
        <a className="px-2 cursor-pointer hover:text-white  ">Community</a>
      </div>
      <div>
        <div className="hidden md:inline-block mr-3">
          <ConnectWallet />
        </div>

        <div
          className={`md:hidden header__burg ${
            activePopupMenu ? "active" : ""
          }`}
          onClick={() => setActivePopupMenu(!activePopupMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`aside__menu__wrap container ${
          activePopupMenu ? "act" : ""
        }`}
      >
        <div
          className="aside__menu__bac"
          onClick={() => setActivePopupMenu(false)}
        ></div>
        <div className="aside__menu__container">
          <div className="flex justify-center flex-col text-gray-400 font-nova-400">
            <a className="px-2 cursor-pointer hover:text-white  ">About</a>
            <a className="px-2 cursor-pointer hover:text-white  ">Roadmap</a>
            <a className="px-2 cursor-pointer hover:text-white  ">Partners</a>
            <a className="px-2 cursor-pointer hover:text-white  ">Team</a>
            <a className="px-2 cursor-pointer hover:text-white  ">Docs</a>
            <a className="px-2 cursor-pointer hover:text-white  ">Community</a>
          </div>
        </div>
      </div>
    </div>
  );
}
