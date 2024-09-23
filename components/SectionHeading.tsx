import React from "react";

const SectionHeading = ({
  intro,
  title,
  info,
  otherClasses,
}: {
  intro?: string;
  title: string;
  info?: string;
  otherClasses?: string;
}) => {
  return (
    <div
      className={`mb-10 flex flex-col items-center space-y-4 text-center ${otherClasses}`}
    >
      <div
        className={
          intro &&
          "inline-block rounded-lg bg-[#08090a] px-3 py-1 text-sm text-white"
        }
      >
        {intro}
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-[40rem] text-center text-[#737373] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        {info}
      </p>
    </div>
  );
};

export default SectionHeading;
