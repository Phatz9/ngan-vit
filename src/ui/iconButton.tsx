import React from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`flex text-white rounded-full hover:scale-110 transition duration-200 ease-in-out ${props.className}`}
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
