"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams?.get("genre");
  return (
    <div>
      <Suspense>
        <Link
          className={`${
            genre === param
              ? "underline underline-offset-8 decoration-amber-500 rounded-lg"
              : ""
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </Suspense>
    </div>
  );
};

export default NavbarItem;
