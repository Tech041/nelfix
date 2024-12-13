import React from "react";
import MenuItems from "./MenuItems";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      {/* left side for menu */}
      <Link href={"/"} className="">
        <span className="text-2xl font-bold bg-amber-500 px-2 py-1 rounded-lg">
          Nelfix
        </span>
      </Link>

      {/* right side  */}

      <div className="flex gap-4">
        <MenuItems title="Home" address="/" Icons=<AiFillHome /> />
        <MenuItems
          title="About"
          address="/about"
          Icons=<BsFillInfoCircleFill />
        />
      </div>
    </div>
  );
};

export default Header;
