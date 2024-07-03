import { BiLinkExternal } from "react-icons/bi";
import { BsController  } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="fixed bottom-0 mt-6 mb-6 w-full text-gray-500">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <p>สร้างจากหัวใจ ❤️ โดย</p>
          <div className="flex items-center space-x-1">
            <a href="https://ayo.so/mean" rel="noreferrer">อะตอม ช้อป นาย หง หนึ่ง</a>
            <BiLinkExternal size={12} />
          </div>
        </div>
        <a href="https://spacegame-deluxe-edition.vercel.app/" target="_blank" rel="noreferrer">
          <BsController 
            size={20}
            className="transition-colors duration-100 hover:text-white"
          />
        </a>
      </div>
    </div>
  );
};