import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-4 rounded-tl-lg rounded-tr-lg  bg-[#30AC67] shadow-lg">
      <div className="flex justify-between">
        <div className="flex justify-around w-2/4">
          <FaXTwitter className="size-6" />
          <FaInstagram className="size-6" />
          <FaFacebookF className="size-6" />
        </div>
        <div className="flex justify-center w-2/4 items-center ">
          <Link href={"https://github.com/Flowball"} target="_blank" className="flex gap-2">
            <FaGithub className="size-6" />
            <p>Made by Oscar</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
