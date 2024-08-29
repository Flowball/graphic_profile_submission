import Image from "next/image";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex">
      <Image
        src={"/pak_logo.svg"}
        height={500}
        width={500}
        alt="logotype"
        className="fill-red-300"
      />
      <NavBar />
    </header>
  );
}
