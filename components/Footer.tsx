import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex h-[13rem] w-full flex-col items-center justify-center gap-10 bg-gray-100"
    >
      <div className="flex items-center justify-center gap-8">
        <a href="https://github.com/aliff6406">
          <Image
            className="duration-250 transition ease-in-out hover:-translate-y-2"
            src="/github.svg"
            alt="github"
            width={42}
            height={42}
          ></Image>
        </a>
        <a href="https://www.linkedin.com/in/aliffamir/">
          <Image
            className="duration-250 transition ease-in-out hover:-translate-y-2"
            src="/linkedin.svg"
            alt="linkedin"
            width={42}
            height={42}
          ></Image>
        </a>
      </div>
      <p className="text-sm text-gray-500">
        Copyright &copy; 2024 Aliff Amir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
