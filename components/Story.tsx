"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { cn } from "@/utils/cn";

const Story = () => {
  return (
    <div className="py-20 w-full">
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-8",
          "lg:min-h-[40vh]"
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        {/* Profile image and header container */}
        <div className="flex-none lg:w-1/3 flex flex-col items-center lg:items-start">
          {/* Heading */}
          <h1 className="heading mb-4 text-center lg:text-left w-full">
            More about <span className="text-purple">me...</span>
          </h1>

          {/* Profile image */}
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative mx-auto lg:mx-0">
            <img
              src="/about-image.jpeg"
              alt="hero image"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 text-center lg:text-left text-gray-400 lg:pl-8">
          <p className="mb-4">
            Back in 2016, I co-founded an e-commerce brand, diving headfirst into the world of sustainable fashion and innovative design. This journey not only ignited my passion for technology but also led me to enhance my skills in software development.
          </p>
          <p className="mb-4">
            Fast-forward to today, I’ve had the privilege of building software for a <b className="text-white-100">sustainable fashion company</b>, a renowned <b className="text-white-100">technology corporation</b>, and several <b className="text-white-100"> innovative startups</b>. My main focus these days is leveraging cutting-edge technologies to solve complex problems. At <b className="text-white-100">Dell Technologies</b>, I developed enterprise-level applications and designed scalable APIs that manage millions of requests daily. I most enjoy working in the sweet spot where technology and innovation meet — creating solutions that are not only efficient but also impactful.
          </p>
          <p className="mb-4">
            In my free time, I mentor high school students through the Girls Who Code Club and continually seek new challenges in <b className="text-white-100">AI and machine learning</b>. When I’m not at the computer, I’m often found exploring new sustainable fashion ideas, mentoring aspiring technologists, or enjoying the outdoors with family and friends.
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="mailto:darrelmschreiner@gmail.com">
                <MagicButton
                  title="Hire me"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
              <a href="/resume.pdf" download="Darrel_Schreiner_Resume.pdf">
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
