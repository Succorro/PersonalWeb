import React from 'react'
import sliderData from '../data/sliderData';

const HomeGrid = () => {
  return (
    <div className="container mx-auto px-3 py-6">
      <div className="grid grid-cols-4 gap-4">
        {sliderData.map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 p-1 h-full flex items-center justify-center">
              <img
                src={tech.source}
                alt={tech.alt}
                className="w-10 h-12 object-contain"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HomeGrid