import React from "react";
import Experience from "./Experience";

const Story = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
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
        <div className="col-span-7 lg:col-span-7 lg:h-96 lg:pl-4 mt-8 lg:mt-0">
          {/* Use the imported Experience component here */}
          {/* <Experience /> */}
          <div className="w-[500px] h-[500px] relative">
            <img
              src="/about-image.jpeg"
              alt="hero image"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
