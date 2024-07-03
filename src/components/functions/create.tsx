import { useForm } from "react-hook-form";
import { type CreateLinkInput } from "~/schema/link.schema";
import { BiRocket } from "react-icons/bi";

import Button from "~/ui/button";
import Alert from "~/ui/alert";

export default function Create() {
  const { register, handleSubmit, formState: { errors }, } = useForm<CreateLinkInput>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: any) {
    console.log(values)
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="url">Enter the URL here:</label>
        <input
          id="url"
          type="text"
          placeholder="https://"
          className="mt-1 w-full rounded-md bg-midnightLight px-4 py-2 text-white focus:border-none"
          {...register("url", {
            required: {
              value: true,
              message: "Please enter a URL.",
            },
            minLength: {
              value: 8,
              message:
                "Please enter a valid URL. It should be at least 8 characters long.",
            },
            pattern: {
              value: /^https?:\/\//i,
              message:
                "Please enter a valid URL. It should start with https://.",
            },
          })}
        />
        {errors.url && <Alert className="mt-2">{errors.url.message}</Alert>}
      </div>
      <div className="mb-5">
        <label htmlFor="slug">Custom slug:</label>
        <p className="text-gray-500">https://slug.vercel.app/s/</p>
        <div className="mt-1 flex items-center justify-between">
          <input
            id="slug"
            type="text"
            placeholder="Custom slug"
            className="w-full rounded-md bg-midnightLight px-4 py-2 text-white focus:border-none"
            {...register("slug", {
              required: {
                value: true,
                message: "Please enter a custom slug or generate a random.",
              },
              pattern: {
                value: /^[a-zA-Z0-9_-]+$/i,
                message:
                  "Please enter a valid slug without blank spaces or special characters.",
              },
            })}
          />
        </div>
        {errors.slug && <Alert className="mt-2">{errors.slug.message}</Alert>}
      </div>
      <div className="mb-3">
        <label htmlFor="description">Description (optional):</label>
        <textarea
          id="description"
          className="mt-1 w-full rounded-md bg-midnightLight px-4 py-2 text-white focus:border-none"
          {...register("description")}
        />
      </div>
      <Button
        type="submit"
        icon={<BiRocket size={18} />}
      >
        Create your link
      </Button>
    </form>
  );
};

