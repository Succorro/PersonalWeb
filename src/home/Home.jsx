import React from "react";
import { Mail, User } from "lucide-react"

import Header from "./Header";
import ProjectCard from "./ProjectCard";
import HomeSlider from "./HomeSlider";
import AboutModal from "./AboutModal";

import projectsData from "../data/projectsData";
import HomeGrid from "./HomeGrid";

export const Home = () => {
  const [isAboutOpen, setIsAboutOpen] = React.useState(false);

  return (
    <div className="">
      {/* Mobile Header - Only visible on mobile */}
      <div className="lg:hidden flex flex-row justify-center items-end sticky top-0 z-40 bg-white border-b border-zinc-200">
        <div className="p-2 mr-7">
          <Header />
        </div>
        <div className="flex flex-row gap-4 mb-2">
          <a href="https://www.linkedin.com/in/soysteven/" target="_blank" rel="noopener noreferrer">
            <img className="w-7" src="/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/Succorro" target="_blank" rel="noopener noreferrer">
            <img className="w-7" src="/github.svg" alt="github" />
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row p-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-[31%] lg:fixed lg:h-screen bg-white">
          <div className="flex flex-col h-full">
            {/* Header - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block">
              <Header />
            </div>

            {/* Bio - Hidden on mobile */}
            <p className="lg:block my-8 text-base leading-6 tracking-wide text-zinc-900">
              👋 I'm Steven, a software engineer who builds meaningful software
              solutions that bridge the gap between business needs and user experience.
            </p>

            <div className="hidden lg:flex lg:flex-row justify-evenly align-center max-lg:mb-10">
              <a href="https://www.linkedin.com/in/soysteven/" target="_blank" rel="noopener noreferrer">
                <img className="w-10" src="/linkedin.svg" alt="linkedin" />
              </a>
              <a href="https://github.com/Succorro" target="_blank" rel="noopener noreferrer">
                <img className="w-10" src="/github.svg" alt="github" />
              </a>
            </div>
            <hr className="hidden lg:block my-8 h-px bg-black/20" />

            {/* Skills slider - Hidden on desktop */}
            <div className="lg:hidden flex flex-wrap gap-1 text-xs leading-loose text-zinc-900/70">
              <HomeSlider />
            </div>

            {/* Skills block - Hidden on mobile */}
            <div className="hidden lg:block h-[40vh]">
              <HomeGrid />
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
          <section className="">
            <div className="flex flex-col">
              {projectsData.map((project, index) => (
                <div key={project.id}>
                  <ProjectCard {...project} />
                  {index < projectsData.length - 1 && (
                    <hr className="my-12 h-px bg-black/20" />
                  )}
                </div>
              ))}

            </div>
          </section>
          <section className="p-0 lg:p-8">
            <div className="flex flex-col gap-12">
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