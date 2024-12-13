import React from "react";
import NavbarItem from "./NavbarItems";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <div className="flex bg-purple-600 text-white p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={<div>Loading ....</div>}>
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </Suspense>
    </div>
  );
};

export default Navbar;
