"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-20 2xl:gap-36  text-xl font-light transition-all ease-in-out">
          <li>SPÅRA</li>
          <li>REGISTRERA</li>
          <li>KONTAKT</li>
        </ul>
      </nav>
      <div className="">
        {open ? (
          <XMarkIcon className="size-10" onClick={() => handleClick()} />
        ) : (
          <Bars3Icon className="size-10" onClick={() => handleClick()} />
        )}
        <nav
          className={`md:hidden transition-all ease-in-out absolute top-0 w-full h-full  mt-20 left-0 bg-[#edf7f6] ${
            !open && "translate-x-[100%]"
          }`}
        >
          <ul className="flex flex-col h-1/4 justify-between mt-20 px-6">
            <Link href={"/spara"}>
              <li className="text-4xl">SPÅRA</li>
            </Link>
            <Link href={"/registrera"}>
              <li className="text-4xl">REGISTRERA</li>
            </Link>
            <Link href={"/kontakt"}>
              <li className="text-4xl">KONTAKT</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
