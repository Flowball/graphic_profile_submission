"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleRouteClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex gap-20 2xl:gap-36  text-xl font-light transition-all ease-in-out">
          <li className="hover:border-b-8 hover:border-[#FFDE00]">SPÅRA</li>
          <li>REGISTRERA</li>
          <li>KONTAKT</li>
        </ul>
      </nav>
      {/* OVERFLOW PROBLEM */}
      <div className="z-50 md:hidden transition-all">
        {open ? (
          <XMarkIcon className="size-10" onClick={() => handleClick()} />
        ) : (
          <Bars3Icon className="size-10" onClick={() => handleClick()} />
        )}

        <nav
          className={`md:hidden absolute bg-[#edf7f6] w-full h-full right-[100%] transition-all ease-in-out ${
            open && "bg-[#edf7f6] left-0"
          }`}
        >
          <ul className="flex flex-col h-1/4 justify-between mt-20 px-6 gap-16">
            <Link href={"/spara"} onClick={() => handleRouteClick()} className="text-4xl block ">
              <li
                className={`inline-block ${
                  pathname === "/spara"
                    ? "border-b-8  border-[#FFDE00]"
                    : "border-b-8 border-transparent"
                }`}
              >
                SPÅRA
              </li>
            </Link>
            <Link href={"/registrera"} onClick={() => handleRouteClick()} className="text-4xl ">
              <li
                className={`inline-block ${
                  pathname === "/registrera"
                    ? "border-b-8  border-[#FFDE00]"
                    : "border-b-8 border-transparent"
                }`}
              >
                REGISTRERA
              </li>
            </Link>
            <Link href={"/kontakt"} onClick={() => handleRouteClick()} className="text-4xl ">
              <li
                className={`inline-block ${
                  pathname === "/kontakt"
                    ? "border-b-8  border-[#FFDE00]"
                    : "border-b-8 border-transparent"
                }`}
              >
                KONTAKT
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
