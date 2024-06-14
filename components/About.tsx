"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        More about <span className="text-purple">me...</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="col-span-5 flex justify-center lg:justify-start">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src="/about-image.jpeg"
              alt="hero image"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="col-span-7 text-gray-400 text-center lg:text-left">
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
              <a href="mailto:darrelmschreiner@gmail.com">
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

export default About;
