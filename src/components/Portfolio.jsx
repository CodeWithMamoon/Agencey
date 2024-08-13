import React from 'react';

const projects = [
  { title: 'Project One', category: 'Web Design', image: '/src/assets/logo.png', description: 'Short description.' },
  // Add more projects...
];

const Portfolio = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <img src={project.image} alt={project.title} className="rounded-lg w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition duration-500 hover:opacity-100">
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              <p className="text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
