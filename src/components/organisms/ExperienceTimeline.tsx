"use client";

import React from "react";
import { Experience } from "@/types/experience";

type ExperienceTimelineProps = {
  experiences: Experience[];
  className?: string;
};

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gray-800"></div>

      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`mb-12 relative flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Timeline dot */}
          <div className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-teal-400 border-4 border-gray-900"></div>

          {/* Content */}
          <div className="md:w-1/2 pl-6 md:pl-0 md:pr-12">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-teal-400 font-medium">{exp.period}</span>
              </div>
              <h4 className="text-gray-300 mb-4">{exp.company}</h4>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-teal-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Spacer for the other side */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
