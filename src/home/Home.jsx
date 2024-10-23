import React from "react";
import { Mail, User } from "lucide-react"

import Header from "./Header";
import ProjectCard from "./ProjectCard";
import HomeSlider from "./HomeSlider";
import AboutModal from "./AboutModal";

import projectsData from "../data/projectsData";

export const Home = () => {
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);

  return (
    <div className="">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-zinc-200">
        <div className="p-4">
          <Header name="Steven Gutierrez" title="Software Engineer" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-[31%] lg:fixed lg:h-screen bg-white">
          <div className="flex flex-col h-full">
            {/* Header - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block">
              <Header name="Steven Gutierrez" title="Software Engineer" />
            </div>

            {/* Bio - Hidden on mobile */}
            <p className="lg:block my-8 text-base leading-6 tracking-wide text-zinc-900">
              👋 I'm Steven, a software engineer who builds meaningful software
              solutions that bridge the gap between business needs and user experience.
            </p>

            <div className="flex flex-ro justify-evenly align-center max-lg:mb-10">
              <a href="https://www.linkedin.com/in/soysteven/" target="_blank" rel="noopener noreferrer">
                <img className="w-10" src="/linkedin.svg" alt="linkedin" />
              </a>
              <a href="https://github.com/Succorro" target="_blank" rel="noopener noreferrer">
                <img className="w-10" src="/github.svg" alt="github" />
              </a>
            </div>
            <hr className="hidden lg:block my-8 h-px bg-black/20" />

            {/* Skills slider - Hidden on mobile */}
            <div className="hidden lg:flex lg:flex-wrap gap-3 text-xs leading-loose text-zinc-900/70">
              <HomeSlider />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-auto pb-16">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="flex-1 px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2"
              >
                <User size={18} />
                About
              </button>
              <a
                href="mailto:stevengmbv@gmail.com"
                className="flex-1 px-6 py-3 text-sm font-medium text-zinc-900 border border-zinc-900 rounded-lg hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Contact
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full  lg:ml-[40%] ">
          <section className="p-0 lg:p-8">
            <div className="flex flex-col gap-12">
              {projectsData.map((project, index) => (
                <div key={project.id}>
                  <ProjectCard {...project} />
                  {index < projectsData.length - 1 && (
                    <hr className="mt-12 h-px bg-black/20" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* About Modal */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  );
};

export default Home;