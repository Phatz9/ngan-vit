/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>
        เว็ปไซด์ Green Energy นี้เป็นส่วนหนึ่งของโครงงานวิชา I30202 (IS) และ
        ว32292 (การออกแบบและเทคโนโลยี 2)
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;โดยมีวัตถุประสงค์เพื่อมุ่งเน้นการให้ข้อมูลความรู้เกี่ยวกับ
        Green Energy ภายในโรงเรียนสตรีวิทยา 2
      </h1>
      <div className="container flex items-center justify-center gap-8 px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <h1>
              ในปัจจุบันมีการนำ Green Energy มาใช้เป็นพลังงานหมุนเวียนมากขึ้น
              เช่น พลังงานลม แสงอาทิตย์ และน้ำ
              ซึ่งในการเปลี่ยนพลังงานที่มาจากธรรมชาติโดยตรงให้เป็นพลังงานไฟฟ้าที่สามารถนำมาใช้ในครัวเรือนได้นั้น
              มาจากเทคโนโลยีหลักๆที่พบเห็นได้บ่อย 3 อย่างด้วยกันได้แก่
              1.กังหันลม 2.แผงโซล่าเซลล์ 3.กังหันน้ำ
              ซึ่งแตกต่างจากในอดีตที่มีการใช้ เชื้อเพลิงฟอสซิลและน้ำมัน
              ในปริมาณมากซึ่งเป็นผลเสียต่อสิ่งแวดล้อม
              และผลจากการใช้พลังงานที่มีอยู่อย่างจำกัดมากไปทำให้พลังงานเหล่านั้นค่อยๆลดน้อยลง
              หรือหมดไป
            </h1>
            <br></br>
            <Image
              src={"/kh1.jpg"}
              alt="Kang han water 1"
              width={999}
              height={999}
              priority={true}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src={"/kh2.jpg"}
              alt="Kang han water 2"
              width={999}
              height={999}
              priority={true}
            />
          </div>
          <h1>
            ภายในโรงเรียนสตรีวิทยา2 มีการนำ Green Energy
            มาใช้ทดแทนพลังงานไฟฟ้าภายในโรงเรียน
            เพื่อลดปัญหามลพิษและลดค่าใช้จ่ายในการซื้อพลังงานไฟฟ้ามาใช้ในโรงเรียน
            โดย Green Energy ที่ถูกนำมาใช้ในโรงเรียนสตรีวิทยา2 ได้แก่
            พลังงานแสงอาทิตย์ (Solar Energy)
            โดยมีเทคโนโลยีที่เปลี่ยนพลังงานแสงอาทิตย์มาเป็นพลังงานไฟฟ้า เรียกว่า
            แผงโซล่าเซลล์ (Solar Cell)
            แผงโซล่าเซลล์ทำงานโดยการแปลงไฟฟ้ากระแสตรงที่ได้รับมาจากดวงอาทิตย์โดยตรงมาเป็นไฟฟ้ากระแสสลับ
            เพื่อนำมาใช้ต่อภายในโรงเรียน การนำเทคโนโลยี Green Energy
            (กรณีนี้กล่าวถึงแผงโซล่าเซลล์ที่มีอยู่ภายในโรงเรียน)
            มาใช้ก็มีทั้งข้อดีและข้อเสีย
            ในส่วนของข้อดีก็คือการที่ลดมลภาวะต่างๆที่ส่งผลเสียต่อสิ่งแวดล้อมได้
            และข้อเสียก็คือ
            ต้องใช้ต้นทุนค่อนข้างสูงในการซื้อเทคโนโลยีดังกล่าวมาใช้
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-20">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image
              src="/kanghanfix.png"
              alt="Image 1"
              width={300}
              height={200}
            />
          </div>
          <p className="mx-auto max-w-xs text-center">
            กังหันน้ำชัยพัฒนา คือ
            เครื่องกลเติมอากาศแบบทุ่นลอยหมุนช้าสำหรับบำบัดน้ำเสีย
            สารอินทรีย์หรือสิ่งปฏิกูลต่างๆ
            ในน้ำจะถูกย่อยสลายด้วยจุลินทรีย์ซึ่งมีอยู่ 2 ชนิด ได้แก่
            จุลินทรีย์ที่ใช้ออกซิเจน (aerobic bacteria)
            และจุลินทรีย์ที่ไม่ใช้ออกซิเจน (anaerobic bacteria)
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/solar.png" alt="Image 2" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            โซล่าเซลล์ (solar cell) หรือที่เรียกกันว่า เซลล์โฟโตโวลตาอิก
            (Photovoltaic cell)
            คือการผลิตไฟฟ้าจากแสงที่ตกกระทบวัตถุที่สามารถเปลี่ยนพลังงานแสงเป็นพลังงานไฟฟ้าได้
            หรือ ไฟฟ้าที่มาจากเเสงนั่นเอง
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image src="/turb.png" alt="Image 3" width={300} height={200} />
          </div>
          <p className="mx-auto max-w-xs text-center">
            กังหันลม คือ
            เครื่องจักรกลที่สามารถรับและแปลงพลังงานจลน์จากการเคลื่อนที่ของลมให้เป็นพลังงานกลได้
            ชื่อในภาษาอังกฤษของกังหันลมได้แก่ wind turbine, wind generator, wind
            power unit (WPU), wind energy converter
            ซึ่งจะแตกต่างกับกังหันลมยุคเก่าที่ใช้คำว่า windmill
          </p>
        </div>
      </div>
      <br></br>
      <br></br>
      <h1>
        “การที่เราต้องการจะเปลี่ยนแปลงอะไรสักอย่าง
        บางที่เราก็ต้องยอมแลกบางสิ่งเพื่อไปสู่การเปลี่ยนแปลงที่ดีกว่าเดิม”
      </h1>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );
}
