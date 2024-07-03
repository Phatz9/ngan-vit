import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "~/server/common/get-server-auth-session";
import Review from "~/components/functions/review";

const CreateNewLink = () => {
  return (
    <div className="container mx-auto pt-6">
      <Review />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);
  
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default CreateNewLink;
