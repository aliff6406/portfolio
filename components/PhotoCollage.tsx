import React from "react";
import Image from "next/image";

const PhotoCollage = () => {
  return (
    <div className="relative mb-20 flex flex-col items-center justify-center lg:flex-row lg:space-x-4">
      {/* Left Image */}
      <div className="absolute left-[30%] z-10 w-[30%] -translate-x-full transform overflow-hidden rounded-2xl object-cover shadow-2xl sm:w-[30%] md:w-[30%] lg:w-[40%]">
        <Image src="/timmy.jpg" alt="Left Image" width={1000} height={1000} />
      </div>

      {/* Center Image */}
      <div className="relative z-20 w-[50%] overflow-hidden rounded-2xl object-cover shadow-2xl sm:w-[45%] md:w-[40%] lg:w-[50%]">
        <Image
          src="/profile.jpg"
          className="object-cover"
          alt="Center Image"
          width={1000}
          height={1000}
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-[35%] top-[15%] z-10 w-[35%] translate-x-full transform overflow-hidden rounded-2xl object-cover shadow-2xl sm:w-[40%] md:w-[40%] lg:w-[50%]">
        <Image
          src="/pastries.jpg"
          alt="Right Image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default PhotoCollage;
