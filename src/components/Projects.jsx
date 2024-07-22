import React, { useState, useEffect } from 'react';

const Projects = ({ onMinimize, onMaximize, onClose }) => {
  const path = window.location.href + "/projects";
  const [isMaximized, setIsMaximized] = useState(false);
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onMaximize;
  };


  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_PROJECT_API);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className={`border border-gray-700 text-white rounded-md shadow-lg bg-[#252525] fixed ${isMaximized ? 'w-[calc(100dvw)] h-full' : 'h-4/6 sm:w-[50vw] h-[50vh]'}`}>
      {/* heading bar */}
      <div className="relative headingbar flex justify-between items-center bg-black text-white ">
        <div className='w-1/4 justify-between flex
         '>
          <img src="./images/file.png" className='h-5' alt="icon" />
          <div >Projects</div>
        </div>
        <div className="flex space-x-2 content-center text-center">
          <button onClick={onMinimize} className="minimize-btn text-3xl px-2 hover:bg-slate-900">-</button>
          <button onClick={handleMaximize} className="maximize-btn text-3xl px-2 hover:bg-slate-900">□</button>
          <button onClick={onClose} className="close-btn text-3xl px-2 hover:bg-slate-900">×</button>
        </div>




        {/* content window */}
      </div>
      <div className=' relative content flex h-full'>
        {/* blank body */}
        <div className={`bg-[#404040] text-[#404040] hidden sm:block w-1/5 ${isMaximized ? 'h-[95%]' : 'h-[88.5%]'}`}>
          <h1>projects</h1>
        </div>

        {/* main body */}
        <div className={`relative  sm:w-4/5  ${isMaximized ? 'h-[98%]' : 'h-[88.5%]'}`}>
          <div className='urldiv border-[1px] border-slate-200'>
            <p className='truncate'>{path}</p>
          </div>
          <div className=" h-[90%] p-5 sm:p-10 overflow-y-auto ">
            <div className={``}>
              {/* {console.log(projects+import.meta.env.VITE_PROJECT_API)} */}


              <h1 className='text-2xl sm:text-4xl'>Main Projects :</h1>
              <div className={`grid ${isMaximized ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4 p-4  `}>
                {projects.map((project) => (project.type === "main" &&
                  <>
                    <div key={project._id} className="bg-[#121212] rounded-lg shadow-md overflow-hidden">
                      <div className="flex justify-center items-center overflow-hidden">
                        <div className="flex justify-center items-center w-full ">
                          <img src={`${project.images[0]}`} alt={project.name} className="${isMaximized ? '' : ''}" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.split(',').map((tech, index) => (
                            <div key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg text-sm">
                              {tech.trim()}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between  text-pink-600 mt-2">
                          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Source Code
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>

              <h1 className='text-2xl sm:text-4xl'>Practice Projects :</h1>
              <div className={`grid ${isMaximized ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4 p-4  `}>
                {projects.map((project) => (project.type === "practice" &&
                  <>
                    <div key={project._id} className="bg-[#121212] rounded-lg shadow-md overflow-hidden">
                      <div className="flex justify-center items-center overflow-hidden">
                        <div className="flex justify-center items-center w-full ">
                          <img src={`${project.images[0]}`} alt={project.name} className="${isMaximized ? '' : ''}" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.split(',').map((tech, index) => (
                            <div key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg text-sm">
                              {tech.trim()}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between  text-pink-600 mt-2">
                          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Source Code
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <h1 className='text-2xl sm:text-4xl'>Fun /Tried & Failed Projects :</h1>
              <div className={`grid ${isMaximized ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-4 p-4  `}>
                {projects.map((project) => (project.type === "fun" &&
                  <>
                    <div key={project._id} className="bg-[#121212] rounded-lg shadow-md overflow-hidden">
                      <div className="flex justify-center items-center overflow-hidden">
                        <div className="flex justify-center items-center w-full ">
                          <img src={`${project.images[0]}`} alt={project.name} className="${isMaximized ? '' : ''}" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.split(',').map((tech, index) => (
                            <div key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-lg text-sm">
                              {tech.trim()}
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between  text-pink-600 mt-2">
                          <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Source Code
                          </a>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            Demo
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;
