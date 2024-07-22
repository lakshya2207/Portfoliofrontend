import React, { useState, useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchIntro } from '../redux/introSlice';
const FileExplorer = ({ intro, onMinimize, onMaximize, onClose }) => {
  const path = window.location.href + "/aboutme";
  const [isMaximized, setIsMaximized] = useState(false);
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onMaximize;
  };
  // const dispatch = useDispatch();
  // const { data: intro, isLoading, isError } = useSelector((state) => state.name);
  
  // useEffect(() => {
  //   dispatch(fetchIntro());
  // }, [dispatch]);
  const parsedSkills = intro && intro.skills ? JSON.parse(intro.skills.replace(/\\"/g, '"').replace(/^"|"$/g, '')) : {};

  return (
    <div className={`border border-gray-700 text-white rounded-md shadow-lg bg-[#252525] fixed ${isMaximized ? 'w-[100vw] h-full' : 'h-4/6 sm:w-[50vw] h-[50vh]'}`}>
      <div className="relative headingbar flex justify-between items-center bg-black text-white ">
        <div className='w-1/4 justify-between flex
         '>
          <img src="./images/file.png" className='h-5' alt="icon" />
          <div className='whitespace-nowrap' >About Me</div>
        </div>
        <div className="flex space-x-2 content-center text-center">
          <button onClick={onMinimize} className="minimize-btn text-3xl px-2 hover:bg-slate-900">-</button>
          <button onClick={handleMaximize} className="maximize-btn text-3xl px-2 hover:bg-slate-900">□</button>
          <button onClick={onClose} className="close-btn text-3xl px-2 hover:bg-slate-900">×</button>
        </div>
      </div>
      <div className=' relative content flex h-full'>
        <div className={`bg-[#404040] text-[#404040]  w-1/5 ${isMaximized ? 'h-[95%]' : 'h-[88.5%]'} hidden sm:block`}>
          <h1>aboutme</h1>
        </div>
        <div className={`relative w-full sm:w-4/5  ${isMaximized ? 'h-[98%]' : 'h-[88.5%]'}` }>
          <div className='urldiv border-[1px] border-slate-200'>
            <p className='truncate'>{path}</p>
          </div>

          <div className="h-[96%] sm:h-[90%] p-10 overflow-y-auto ">
            <div className=" flex justify-between  ">
              <div className=' content-center'>
                <h2 className="text-4xl font-mono">{intro.name}</h2>
                <h3 className=' text-2xl text-pink-600 mt-2 ml-1 font-light'>{intro.role}</h3>
              </div>
              <img className=' h-1/5 w-1/5 rounded-full' src="./images/me.jpg" alt="profilephoto" />

            </div>

            <p className='leading-6 py-2 sm:text-xl'>{intro.description}</p>


            <h2 className="text-xl font-bold mt-4">Skills</h2>
            <div className={`grid ${isMaximized ? 'sm:grid-cols-2' : 'grid-cols-1'} p-5`}>
              <div>
                <h3 className="text-lg font-semibold mt-0">Languages</h3>
                <p className='text-cyan-400'>{parsedSkills.Languages}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-2">Technologies and Frameworks</h3>
                <p className='text-cyan-400'>{parsedSkills.TechnologiesandFrameworks}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-2">Databases</h3>
                <p className='text-cyan-400'>{parsedSkills.Databases}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mt-2">Tools and Platforms</h3>
                <p className='text-cyan-400'>{parsedSkills.ToolsandPlatforms}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default FileExplorer;
