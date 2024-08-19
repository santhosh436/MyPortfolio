import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    category: 'Frontend',
    name: 'Project One',
    tools: ['React.js', 'Tailwind CSS'],
    description: 'A frontend project using React and Tailwind CSS.',
    image: './images/backend.jpg',
    link: 'https://projectone.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },
  {
    id: 2,
    category: 'Backend',
    name: 'Project Two',
    tools: ['Spring Boot', 'MySQL'],
    description: 'A backend project using Spring Boot and MySQL.',
    image: './images/backend.jpg',
    link: 'https://projecttwo.com'
  },

  // Add more projects here...
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center p-6 lg:px-20">
      {/* Filter Buttons */}
      <div className="mb-8">
        {['All', 'Frontend', 'Backend', 'Design'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-2 sm:px-4 py-1 sm:py-2 font-semibold rounded ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-10">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="relative cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="transition-transform transform hover:scale-110 w- h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Project Detail View */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
            <button
              className="absolute top-4 right-4 text-black"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.name}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Tools & Technologies: {selectedProject.tools.join(', ')}
            </p>
            <p className="mb-4">{selectedProject.description}</p>
            <div className="flex justify-end space-x-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Visit
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
