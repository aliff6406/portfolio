import React from "react";
import Image from "next/image";

const PhotoCollage = () => {
  return (
    <div className="relative mb-20 flex items-center justify-center">
      {/* Left Image */}
      <div className="absolute left-[30%] z-10 -translate-x-full transform overflow-hidden rounded-2xl object-cover shadow-2xl">
        <Image src="/timmy.jpg" alt="Left Image" width={300} height={300} />
      </div>

      {/* Center Image */}
      <div className="relative z-20 overflow-hidden rounded-2xl object-cover shadow-2xl">
        <Image src="/profile.jpg" alt="Center Image" width={350} height={500} />
      </div>

      {/* Right Image */}
      <div className="absolute right-[35%] top-[15%] z-10 translate-x-full transform overflow-hidden rounded-2xl object-cover shadow-2xl">
        <Image src="/pastries.jpg" alt="Right Image" width={400} height={300} />
      </div>
    </div>
  );
};

export default PhotoCollage;
