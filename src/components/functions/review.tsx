import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiRocket } from "react-icons/bi";
import { Button } from "~/ui";

export default function Review() {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit() {
    toast(
      "Review added successfully!",
      {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#1D1D1D",
          color: "#fff",
        },
      }
    );
  }
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] rounded-lg bg-white">
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="px-9 py-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label className="mb-3 block text-base font-semibold text-[#07074D]">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="น้องนาย"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("Name")}
            />
          </div>

          <div className="mb-5">
            <label className="mb-3 block text-base font-semibold text-[#07074D]">
              Your review text
            </label>
            <textarea
              id="review_text"
              placeholder="พี่คนทำเว็ปหล่อมากครับ"
              className="w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("Review_text")}
            />
          </div>
          <Button type="submit" icon={<BiRocket size={18} />}>
            Submit Review
          </Button>
        </form>
      </div>
    </div>
  );
}
