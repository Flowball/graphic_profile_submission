import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 overflow-hidden ">
      <Link href={"/"}>
        <Image
          src={"/pak_logo.svg"}
          height={200}
          width={200}
          alt="logotype"
          className="fill-red-300 size-16 "
        />
      </Link>
      <NavBar />
      <LoginButton />
    </header>
  );
}
