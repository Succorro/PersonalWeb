import React from "react";
import SkillTag from "./SkillTag";

function ProjectCard({ name, image, skills, link, description }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferer"
      className="block w-full group"
    >
      <article className="w-full transform transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col gap-4">
          {/* Image container with animated skills overlay */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-[250px] object-contain lg:object-cover "
            />

            {/* Skills overlay with slide-up animation */}
            <div
              className="
              absolute bottom-0 left-0 right-0 p-4
              transform translate-y-2 opacity-0
              group-hover:translate-y-0 group-hover:opacity-100
              transition-all duration-300 ease-in-out
            "
            >
              <div className="flex flex-wrap gap-2 mb-2">
                {skills.map(({ name, color }, index) => (
                  <div
                    key={index}
                    className="transform translate-y-4 transition-transform duration-300"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      animation: 'slideUp 0.3s forwards',
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <SkillTag name={name} color={color} />
                  </div>
                ))}
              </div>
            </div>

            {/* Hover overlay with subtle gradient */}
            <div className="
            absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          "/>
          </div>

          {/* Project name with hover effect */}
          <h3 className="
          px-4 text-2xl font-medium text-zinc-900
          transform transition-all duration-300
          group-hover:text-zinc-700
        ">
            {name}
          </h3>
          <p className="font-small text-zinc-700">{description}</p>
        </div>
      </article>
    </a>
  );
}

export default ProjectCard;