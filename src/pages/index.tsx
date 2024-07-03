// import Image from "next/image";
import { BsMenuButton, BsController } from "react-icons/bs";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SatelliteScene } from "~/components/SatelliteScene.jsx";
import Up from "~/motions/up";
import LinkRoute from "~/ui/linkRoute";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r pb-20 pt-20 transition-all duration-100">
      <Up>
        <h1 className="mb-2 text-3xl md:mb-5 md:text-6xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          เทคโนโลยีอวกาศ (Space Technology)
        </h1>
      </Up>
      <Up delay={0.2}>
        <h3 className="mb-6 text-2xl text-gray-400">
          เทคโนโลยีอวกาศคืออะไร? มีอะไรบ้าง? ไปดูกันเลยย!!
        </h3>
      </Up>
      <Up delay={0.4}>
        <div className="flex text-base">
          <LinkRoute href="/aboutx">
            <BsMenuButton className="mr-2" />
            อ่านข้อมูลรายละเอียด
          </LinkRoute>
          <LinkRoute href="https://spacegame-deluxe-edition.vercel.app/">
            <BsController className="mr-2" />
            เล่นเกมตอบคำถาม
          </LinkRoute>
        </div>
      </Up>
      <Up delay={0.6}>
        {/* <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/dlI1vFjVxBo?si=kDxRtDVln7eXWnOh"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */}
        <div className="h-[55vh] w-[55vw]">
          <Canvas
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <color attach="background" args={["#121212"]} />
            <Environment preset="studio" />
            <PerspectiveCamera makeDefault position={[18, 18, 18]} />
            <OrbitControls />
            <SatelliteScene />
            <ContactShadows />
          </Canvas>
        </div>
      </Up>
    </div>
  );
}
