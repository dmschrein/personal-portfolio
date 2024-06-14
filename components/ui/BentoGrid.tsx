"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["MongoDB", "Python", "Golang"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "darrelmschreiner@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
    className={cn(
      "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex space-x-4",
      className
    )}
    style={{
      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
  >
    {img && (
      <div className="relative w-1/3 h-full p-5">
        <img
          src={img}
          alt={img}
          className={cn(
            imgClassName,
            "object-cover object-center rounded-full w-full h-full"
          )}
        />
      </div>
    )}
    <div className="flex flex-col justify-between p-5 lg:p-10 w-2/3">
      <div className="font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10">
        {description}
      </div>
      <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
        {title}
      </div>
      {id === 2 && <GlobeDemo />}
      {id === 3 && (
        <div className="flex gap-1 lg:gap-5 w-fit">
          <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 pt-4">
            {leftLists.map((item, i) => (
              <span
                key={i}
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
            <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
          </div>
          <div className="flex flex-col gap-3 md:gap-3 lg:gap-8 pb-4">
            <span className="lg:py-4 lg:px-3 py-6 px-3 rounded-lg text-center bg-[#10132E]" />
            {rightLists.map((item, i) => (
              <span
                key={i}
                className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
      {id === 6 && (
        <div className="mt-5 relative">
          <div className="absolute -bottom-5 right-0">
            <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
          </div>
          <MagicButton
            title={copied ? "Email copied" : "Copy my email"}
            icon={<IoCopyOutline />}
            position="left"
            otherClasses="!bg-[#161a31]"
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  </div>
  );
};
