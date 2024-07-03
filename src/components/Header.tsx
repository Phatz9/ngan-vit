import Link from "next/link";
import { BiSun } from "react-icons/bi";
import Auth from "~/components/Auth";
import IconButton from "~/ui/iconButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full py-4">
      <div className="flex container pl-4 pr-4 md:pl-0 md:pr-0 items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center cursor-pointer text-white hover:text-gray-300 transition-all">
            <Image src="/sw2_logo.png" alt="Logo" width={100000} height={100000} className="h-9 w-9" />
            <h1 className="text-xl ml-2 mr-2">ANCHN - Space Technology</h1>
          </div>
        </Link>
        <div className="flex text-white items-center space-x-6">
          <Link href="/aboutx">About</Link>
          <Link href="/review">Review</Link>
          <Auth />
          <a
            href="https://ayo.so/mean"
            rel="noreferrer"
            target="_blank"
          >
            <IconButton icon={<BiSun size={23} />} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
