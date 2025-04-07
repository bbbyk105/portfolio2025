import React from "react";
import Link from "next/link";
import { Project } from "@/types/experience";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
    >
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-900 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-900/20"
        >
          <div className="aspect-video bg-gray-800 relative overflow-hidden">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail.url}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                No Thumbnail
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.skills.map((skill, i) => (
                <span
                  key={i}
                  className="inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-teal-400 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
