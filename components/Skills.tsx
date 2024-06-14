"use client";

import React, { useState } from "react";
import { skills } from "@/data";

const Skills = () => {
  const [filter, setFilter] = useState("All Skills");

  const filteredSkills = skills.filter(skill => {
    if (filter === "All Skills") return true;
    return skill.category === filter;
  });

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        Skills, languages, and tools <span className="text-purple">I've worked with</span>
      </h1>
      {/* Filter buttons */}
      <h2 className="flex justify-center gap-8 my-8 rounded-full">
        
        {["All Skills", "Fullstack", "DevOps", "ML/AI"].map(category => (
          <button
            key={category}
            className={`uppercase tracking-widest px-4 py-2 rounded text-3xl ${
              filter === category ? "bg-purple-600 text-white underline" : "bg-purple-200 text-white"
            }`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </h2>
      {/* Skills display */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
        {filteredSkills.map(({ id, name }) => (
          <div key={id} className="flex md:max-2-60 max-w-32">
            <div className="bg-violet-400 text-white rounded-full px-3 py-1 text-md text-center">
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
