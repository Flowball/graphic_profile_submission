"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const navItems = [
    { title: "spåra", link: "/spara" },
    { title: "registrera", link: "/registrera" },
    { title: "kontakt", link: "/kontakt" },
  ];

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
          {navItems.map((navItem) => (
            <Link href={navItem.link} key={navItem.link}>
              <li
                className={`cursor-pointer p-2 ${
                  pathname === `${navItem.link}` ? "bg-[#FFDE00]" : "hoverTransition"
                }`}
              >
                {navItem.title.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
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
          <ul className="flex flex-col h-1/4 justify-between mt-20 px-6 gap-10">
            {navItems.map((navItem) => (
              <Link
                href={navItem.link}
                onClick={() => handleRouteClick()}
                className="text-4xl block "
              >
                <li
                  className={`inline-block p-2 ${pathname === `${navItem.link}` && "bg-[#FFDE00]"}`}
                >
                  {navItem.title.toUpperCase()}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
