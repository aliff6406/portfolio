import Link from "next/link";
import React from "react";

interface UnderlineButtonProps {
  text: string;
  href: string;
}
const UnderlineButton = ({ text, href }: UnderlineButtonProps) => {
  return (
    <Link
      href={href}
      className="Linkx-1 inline-block transform rounded-md text-gray-950 underline decoration-gray-400 decoration-4 underline-offset-4 transition-all duration-200 ease-in-out hover:bg-gray-200 hover:decoration-transparent"
    >
      {text}
    </Link>
  );
};

export default UnderlineButton;
