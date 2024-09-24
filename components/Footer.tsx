import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex h-[13rem] w-full flex-col items-center justify-center gap-10 bg-gray-100"
    >
      <div className="flex items-center justify-center gap-8">
        
        <Image src="/github.svg" alt="github" width={42} height={42}></Image>
        <Image
          src="/linkedin.svg"
          alt="linkedin"
          width={42}
          height={42}
        ></Image>
      </div>
      <p className="text-sm text-gray-500">
        Copyright &copy; 2024 Aliff Amir. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
