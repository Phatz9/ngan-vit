import { getServerAuthSession } from "~/server/common/get-server-auth-session";
import { toastStyles } from "~/styles/toast";
import { Button } from "~/ui";
import { type GetServerSideProps, type GetServerSidePropsContext } from "next";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsDiscord } from "react-icons/bs";

export default function Auth() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("discord", {
        callbackUrl: "/",
      });
    } catch (error) {
      toast(
        "An error occurred while logging in. Please create an issue about the problem.",
        {
          icon: "🤔",
          style: toastStyles,
        }
      );
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mt-16 flex flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-4xl">👋 Welcome</h1>
        <Button
          className="ml-4 bg-midnightLight"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleSignIn}
          isLoading={loading}
          loadingText="Loading..."
          icon={<BsDiscord size={17} />}
        >
          Login with Discord
        </Button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
