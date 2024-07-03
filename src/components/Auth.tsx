/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import { Button } from "~/ui";
import { signOut, useSession } from "next-auth/react";
import {
  BiBox,
  BiExit,
  BiHash,
  BiMessageSquareEdit,
  BiPlus,
} from "react-icons/bi";
import Link from "next/link";
import toast from "react-hot-toast";
import { Dropdown, DropdownItem } from "~/ui/dropdown";
import LinkRoute from "~/ui/linkRoute";
import { toastStyles } from "~/styles/toast";

export default function Auth() {
  const { data: session, status } = useSession();
  const [disabled, setDisabled] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleLogout = async () => {
    setDisabled(true);
    setClosing(true);
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      toast(
        "An error occurred while logout. Please create an issue about the problem.",
        {
          icon: "🤔",
          style: toastStyles,
        }
      );
    } finally {
      setDisabled(false);
      setClosing(false);
    }
  };

  if (status === "loading") {
    return (
      <Button className="ml-2" disabled isLoading loadingText="Loading..." />
    );
  }

  if (status === "unauthenticated") {
    return <LinkRoute href="/auth">Login</LinkRoute>;
  }

  return (
    <Dropdown
      title={session?.user.name}
      className="bg-transparent"
      icon={<BiHash size={18} />}
    >
      <Link href="/review">
        <DropdownItem icon={<BiPlus size={17} />}>Add a review</DropdownItem>
      </Link>
      {/* <Link href="/dash">
        <DropdownItem icon={<BiBox size={17} />}>Dashboard</DropdownItem>
      </Link> */}
      <a
        href="https://ayo.so/mean"
        target="_blank"
        rel="noreferrer"
      >
        <DropdownItem icon={<BiMessageSquareEdit size={17} />} external={true}>
          Report a bug
        </DropdownItem>
      </a>
      <DropdownItem icon={<BiExit size={17} />} onClick={handleLogout}>
         Logout
      </DropdownItem>
    </Dropdown>
  );
};