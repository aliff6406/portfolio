import Link from "next/link";
import React from "react";

const ConnectButton = ({
  title,
  icon,
  position,
  href,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  href: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button>
      <Link
        href={href}
        className={`inline-flex h-full w-full items-center justify-center gap-2 rounded-md bg-[#fff] px-8 py-2 text-sm font-light text-[#696969] shadow-[0_4px_14px_0_rgb(0,0,0,10%)] transition duration-200 ease-linear hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </Link>
    </button>
  );
};

export default ConnectButton;
