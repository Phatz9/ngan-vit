/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>
        เทคโนโลยีอวกาศ
        เป็นการศึกษาดาราศาสตร์และห้วงอวกาศที่อยู่นอกเหนืออาณาเขตของโลก
        เพื่อการเรียนรู้และการทำความเข้าใจต่อจักรวาล ปรากฏการณ์ และดวงดาวต่าง ๆ
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ยังรวมไปถึงการศึกษาค้นคว้าเพื่อพัฒนานวัตกรรมและเทคโนโลยีต่าง
        ๆ ที่เป็นประโยชน์แก่มนุษยชาติ
      </h1>
      <div className="container flex items-center justify-center gap-8 px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <h1>
              เทคโนโลยีอวกาศ (Space Technology) หมายถึง การนำองค์ความรู้ วิธีการ
              และเครื่องมือทางวิทยาศาสตร์มาประยุกต์ใช้ในการศึกษาดาราศาสตร์และห้วงอวกาศที่อยู่นอกเหนืออาณาเขตของโลกอย่างเหมาะสม
              ทั้งเพื่อการเรียนรู้และการทำความเข้าใจต่อจักรวาล ปรากฏการณ์
              และดวงดาวต่าง ๆ
              ยังรวมไปถึงการศึกษาค้นคว้าเพื่อพัฒนานวัตกรรมและเทคโนโลยีต่าง ๆ
              ที่เป็นประโยชน์แก่มนุษยชาติ ไม่ว่าจะเป็นการสำรวจทรัพยากรธรรมชาติ
              การสร้างเครือข่ายติดต่อสื่อสาร หรือ การเตือนภัยพิบัติต่าง ๆ
            </h1>
            <br></br>
            <Image
              src={"/JamesWebb.webp"}
              alt="James Webb Space Telescope"
              width={999}
              height={999}
              priority={true}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src={"/ISS.jpg"}
              alt="International Space Station"
              width={999}
              height={999}
              priority={true}
            />
          </div>
          <h1>
            ในทางวิทยาศาสตร์ “อวกาศ” (Space) หมายถึง
            อาณาบริเวณของท้องฟ้าที่อยู่สูงเหนือพื้นโลกในระดับน้ำทะเลตั้งแต่ 100
            กิโลเมตรขึ้นไป โดยมีเส้นแบ่งขอบเขตของชั้นบรรยากาศกับอวกาศที่เรียกว่า
            “เส้นคาร์มัน” (Karman Line) ซึ่งเป็นขอบเขตสมมติ (Imaginary Boundary)
            ที่ถูกกำหนดขึ้นจากการที่ชั้นบรรยากาศในบริเวณนี้
            มีอากาศเบาบางมากจนไม่สามารถทำให้เกิดแรงยกใต้ปีกที่เพียงพอสำหรับการบินของเครื่องบินได้อีก
            อวกาศจึงเป็นเขตพื้นที่สุญญากาศที่ประกอบไปด้วยฝุ่นผง ก๊าซ
            และโมเลกุลของสสารต่าง ๆ
            รวมไปถึงรังสีอีกมากมายที่ดำรงอยู่ระหว่างวัตถุท้องฟ้าต่าง ๆ
            (Astronomical Object) ในจักรวาล
          </h1>
        </div>
      </div>
      <h3 className="mb-6 text-2xl">เทคโนโลยีอวกาศที่สำคัญประกอบด้วย</h3>
      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/Satellite.png"
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <p className="mx-auto max-w-xs text-center">
            ดาวเทียม (Satellite) :
            อุปกรณ์ที่ถูกส่งขึ้นไปโคจรรอบโลกผ่านการติดตั้งบนจรวดหรือยานขนส่งอวกาศ
            เพื่อปฏิบัติการทางวิทยาศาสตร์ในด้านต่าง ๆ ทั้งการถ่ายภาพจากดาวเทียม
            ตรวจวัดสภาพอากาศ และการสื่อสารโทรคมนาคม
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/Rocket.png" alt="Image 2" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            จรวด (Rocket) :
            ยานพาหนะที่เป็นส่วนประกอบสำคัญในการส่งดาวเทียมหรือยานสำรวจออกสู่อวกาศ
            ทำให้จรวดจำเป็นต้องมีเครื่องยนต์พลังสูงที่สามารถเพิ่มความเร็วและมีแรงขับเคลื่อนที่เพียงพอต่อการเอาชนะแรงโน้มถ่วงของโลกหรือที่เรียกว่า
            “ความเร็วหลุดพ้น” (Escape Velocity) ซึ่งมีความเร็วอยู่ที่ 11.2
            กิโลเมตรต่อวินาที
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/Shuttle.png" alt="Image 3" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            ยานขนส่งอวกาศหรือกระสวยอวกาศ (Space Shuttle) :
            ระบบยานพาหนะที่ถูกพัฒนาขึ้นมาเพื่อใช้ส่งดาวเทียมหรือยานอวกาศแทนการใช้จรวด
            เนื่องจากจรวดมีค่าใช้จ่ายสูงและมักพังเสียหายเมื่อตกลงสู่พื้น
            ทำให้ไม่สามารถนำกลับมาใช้ใหม่ได้เหมือนยานขนส่งอวกาศ
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/Station.png" alt="Image 3" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            สถานีอวกาศ (Space Station) :
            สถานีหรือสิ่งก่อสร้างขนาดใหญ่ที่เคลื่อนที่โคจรรอบโลก
            ด้วยความเร็วกว่า 27,000 กิโลเมตรต่อชั่วโมง เช่น สถานีอวกาศเมียร์
            (Mir Space Station) ของรัสเซีย และสถานีอวกาศนานาชาติ (International
            Space Station) ที่ใช้เป็นห้องปฏิบัติการทางวิทยาศาสตร์ในด้านต่าง ๆ
            ขณะลอยตัวอยู่เหนือพื้นโลกกว่า 400 กิโลเมตร
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/Manned.png" alt="Image 3" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            ยานอวกาศที่มีมนุษย์ควบคุม (Manned Spacecraft)
            เป็นยานขนาดใหญ่ที่สามารถรองรับการใช้งานของมนุษย์
            ขณะดำรงชีวิตอยู่ในอวกาศ อย่างเช่น ยานอะพอลโล 11 (Apollo 11)
            ที่นำมนุษย์ไปยังดวงจันทร์เป็นครั้งแรกในปี 1969
            ยานอวกาศที่มีมนุษย์ควบคุม
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/UnManned.png" alt="Image 3" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            ยานอวกาศที่ไม่มีมนุษย์ควบคุม (Unmanned Spacecraft)
            เป็นยานขนาดเล็กที่มีระบบสมองกลทำหน้าที่ควบคุมการทำงาน
            โดยยานอวกาศประเภทนี้
            มักทำหน้าที่สำรวจดาวเคราะห์และห้วงอวกาศอันห่างไกล
            เป็นการปฏิบัติภารกิจแทนมนุษย์
            เนื่องจากเวลาที่ต้องใช้ในการเดินทางอันยาวนานและปัจจัยในการดำรงชีวิตในอวกาศที่ยากลำบาก
            เช่น ยานแคสสินี (Cassini) ที่เดินทางไปสำรวจดาวเสาร์ ยานกาลิเลโอ
            (Galileo) ที่เดินทางไปสำรวจดาวพฤหัสบดี
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <a href="https://www.nstda.or.th/spaceeducation/space-technology/">
        ที่มาข้อมูล: https://www.nstda.or.th/spaceeducation/space-technology/
      </a>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
}
