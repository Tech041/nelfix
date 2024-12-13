import React from "react";
import NavbarItem from "./NavbarItems";


const Navbar = () => {
  return (
    <div className="flex bg-purple-600 text-white p-4 lg:text-lg justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
