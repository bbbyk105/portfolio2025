"use client";

import React, { useEffect } from "react";
import { Experience } from "@/types/experience";
import AOS from "aos";
import "aos/dist/aos.css";

type ExperienceTimelineProps = {
  experiences: Experience[];
  className?: string;
};

const ExperienceTimeline = ({
  experiences,
  className = "",
}: ExperienceTimelineProps) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      mirror: false,
    });

    // Refresh AOS on window resize
    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Timeline line with fade-in animation */}
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-gray-800"
      ></div>

      {experiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`mb-12 relative flex flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Timeline dot with zoom-in animation */}
          <div
            data-aos="zoom-in"
            data-aos-delay={300 + index * 100}
            className="absolute left-[-8px] md:left-1/2 md:transform md:translate-x-[-50%] w-4 h-4 rounded-full bg-teal-400 border-4 border-gray-900"
          ></div>

          {/* Content with fade animations based on position */}
          <div className="md:w-1/2 pl-6 md:pl-0 md:pr-12">
            <div
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-delay={400 + index * 100}
              className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-teal-900/20 hover:-translate-y-1"
            >
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
                    data-aos="fade-up"
                    data-aos-delay={500 + i * 50 + index * 100}
                    className="inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-teal-400 rounded-full transform transition-all duration-300 hover:bg-gray-700"
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
