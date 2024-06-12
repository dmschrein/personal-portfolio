"use client";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section className="pb-20 pt-36 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Darrel",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Full Stack Developer",
                1000,
                "an AI/ML Engineer",
                1000,
                "a DevOps Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div>
            <p className="text-[#ADB&BE] text-base sm:text-lg mb-6 lg:text-xl">
              I'm a software engineer with extensive experience in developing
              enterprise-level applications and innovative solutions.
            </p>
          </div>
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
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[500px] h-[400px] relative">
            <img
              src="/about-image.jpeg"
              alt="hero image"
              width={300}
              height={500}
              className="rounded-full absolute w-[300px] h-[250px] lg:w-[400ox] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-8">
        <div className="col-span-5 place-self-center text-center sm:text-left  text-gray-400">
          <p>
            Back in 2016, I co-founded an e-commerce brand, diving headfirst
            into the world of sustainable fashion and innovative design. This
            journey not only ignited my passion for technology but also led me
            to enhance my skills in software development.
          </p>
          <br></br>
          <p>
            Fast-forward to today, I’ve had the privilege of building software
            for a <b className="text-white-100">sustainable fashion company</b>, a
            renowned <b className="text-white-100">technology corporation</b>, and
            several <b className="text-white-100"> innovative startups</b>. My main
            focus these days is leveraging cutting-edge technologies to solve
            complex problems. At <b className="text-white-100">Dell Technologies</b>, 
            I developed enterprise-level applications and designed scalable
            APIs that manage millions of requests daily. I most enjoy working in
            the sweet spot where technology and innovation meet — creating
            solutions that are not only efficient but also impactful.
          </p>
          <br></br>
          <p>
            In my free time, I mentor high school students through the Girls Who
            Code Club and continually seek new challenges in <b className="text-white-100">AI and machine
            learning</b>. When I’m not at the computer, I’m often found exploring
            new sustainable fashion ideas, mentoring aspiring technologists, or
            enjoying the outdoors with family and friends.
          </p>
        </div>
        <div className="col-span-7 lg:col-span-7 lg:overflow-y-auto lg:h-96 lg:pl-4 mt-8 lg:mt-0">

        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default About;
