import toast from "react-hot-toast";
import { BiLinkExternal } from "react-icons/bi";
import { BsController } from "react-icons/bs";

export default function Footer() {
  function onSubmit() {
    toast("นายฐานพัฒน์ เผือกทอง ม.6/9 เลขที่ 2\n นายธารัณย์ วารีรักษ์ ม.6/9  เลขที่ 3\n นายภัทร ลี้เลิศพันธ์ชัย ม.6/9 เลขที่ 4\n นายภควัฒน์ ทองอ้ม ม.6/9 เลขที่ 34\n นายเดชาธร กรุณาธรรม ม.6/9 เลขที่ 37", {
      icon: "👥",
      style: {
        borderRadius: "10px",
        background: "#1D1D1D",
        color: "#fff",
      },
    });
  }
  return (
    <div className="fixed bottom-0 mb-6 mt-6 w-full text-gray-500">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="flex items-center space-x-1">
            <a href="#" onClick={onSubmit}>
              สร้างจากหัวใจ ❤️ โดย อะตอม ช้อป นาย หนึ่ง หง
            </a>
            <BiLinkExternal size={12} />
          </div>
        </div>
        <a
          href="https://spacegame-deluxe-edition.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <BsController
            size={20}
            className="transition-colors duration-100 hover:text-white"
          />
        </a>
      </div>
    </div>
  );
}
