import Link from "next/link";
import React from "react";


const MenuItems = ({ title, address, Icons }) => {
  return <Link href={address} className="hover:text-amber-500">
    <p className="text-2xl sm:hidden">{Icons}</p>
    <p className="uppercase hidden sm:inline text-sm">{title}</p>
  </Link>;
};

export default MenuItems;
