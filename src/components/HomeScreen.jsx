import React, { useState, useEffect } from 'react';
import FileExplorer from './FileExplorer';
import Contactme from './Contactme';
import Projects from './Projects';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const notify = () => toast.info("Maximize the window for better view !", {
//     position: "bottom-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light"
// });;

import { useDispatch, useSelector } from 'react-redux';
import { fetchIntro } from '../redux/introSlice';
const HomeScreen = () => {
    const dispatch = useDispatch();
    const { data: intro, isLoading, isError } = useSelector((state) => state.name);

    useEffect(() => {
        dispatch(fetchIntro());
    }, [dispatch]);

    const [openWindows, setOpenWindows] = useState({ FileExplorer: false, Projects: false, Contactme: false });
    const [minimizedWindows, setMinimizedWindows] = useState({ FileExplorer: false, Projects: false, Contactme: false });

    const openWindow = (name) => {
        setOpenWindows({ ...openWindows, [name]: true });
        setMinimizedWindows({ ...minimizedWindows, [name]: false });
    };

    const minimizeWindow = (name) => {
        setOpenWindows({ ...openWindows, [name]: false });
        setMinimizedWindows({ ...minimizedWindows, [name]: true });
    };

    const maximizeWindow = (name) => {
        setOpenWindows({ ...openWindows, [name]: true });
        setMinimizedWindows({ ...minimizedWindows, [name]: false });
    };

    const closeWindow = (name) => {
        setOpenWindows({ ...openWindows, [name]: false });
        setMinimizedWindows({ ...minimizedWindows, [name]: false });
    };

    const icons = [
        { name: 'About Me', image: './images/thispc.png' },
        { name: 'Contact Me', image: './images/contact.png' },
        { name: 'Projects', image: './images/projects.png' },
    ];
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        return `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    };

    const [currentDate, setCurrentDate] = useState(formatDate(new Date()));
    const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setCurrentDate(formatDate(now));
            setCurrentTime(formatTime(now));
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="absolute h-[calc(100dvh)] w-[calc(100dvw)] bg-[url('/wallpaper.jpg')] bg-cover bg-center">
            {/* Desktop Icons */}
            <div className="absolute top-0 left-0 p-2 grid grid-cols-1 gap-4">
                <button onClick={()=>{
                    openWindow('FileExplorer');
                    notify();
                }} className="flex flex-col items-center">
                    <img src={icons[0].image} alt={icons[0].name} className="h-8 w-8 z-1" />
                    {/* {intro.github} */}
                    <div className="text-white">{icons[0].name}</div>
                </button>
                <button onClick={() => { openWindow('Contactme') }} className="flex flex-col items-center">
                    <img src={icons[1].image} alt={icons[1].name} className="h-8 w-8 z-1" />
                    <div className="text-white">{icons[1].name}</div>
                </button>
                <button onClick={() => { openWindow('Projects') }} className="flex flex-col items-center">
                    <img src={icons[2].image} alt={icons[2].name} className="h-8 w-8 z-1" />
                    <div className="text-white">{icons[2].name}</div>
                </button>
                <button onClick={() => window.open(intro.github, '_blank')} className="flex flex-col items-center">
                    <img src="./images/github.png" alt="GitHub" className="h-8 w-8 z-1" />
                    <div className="text-white">GitHub</div>
                </button>
                <button onClick={() => window.open(intro.linkedin, '_blank')} className="flex flex-col items-center">
                    <img src="./images/linkedin.png" alt="LinkedIn" className="h-8 w-8 z-1" />
                    <div className="text-white">LinkedIn</div>
                </button>
                <button onClick={() => window.open(intro.resume, '_blank')} className="flex flex-col items-center">
                    <img src="./images/resume.png" alt="Resume" className="h-8 w-8 z-1" />
                    <div className="text-white">Resume</div>
                </button>

                {/* <button onClick={notify}>notify</button> */}
                {openWindows.FileExplorer && (
                    <FileExplorer
                        intro={intro}
                        onMinimize={() => minimizeWindow('FileExplorer')}
                        onMaximize={() => maximizeWindow('FileExplorer')}
                        onClose={() => closeWindow('FileExplorer')}
                    />
                )}

                {openWindows.Projects && (
                    <Projects
                        onMinimize={() => minimizeWindow('Projects')}
                        onMaximize={() => maximizeWindow('Projects')}
                        onClose={() => closeWindow('Projects')}
                    />
                )}
                {openWindows.Contactme && (
                    <Contactme
                        onMinimize={() => minimizeWindow('Contactme')}
                        onMaximize={() => maximizeWindow('Contactme')}
                        onClose={() => closeWindow('Contactme')}
                    />
                )}

            {/* <ToastContainer position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" /> */}
            </div>

            {/* Taskbar */}
            <div className="absolute bottom-0 left-0 w-full bg-gray-800  flex justify-between items-center">
                <div className='flex'>
                    {/* Start Button */}
                    <button onClick={() => {
                        window.location.href = '/'
                    }} className="bg-gray-800 text-white p-1 px-2  hover:bg-gray-600">
                        <img className='h-8 w-8  brightness-200 contrast-more:' src="./images/logo.png" alt="winlogo" />
                    </button>
                    {/* Taskbar Icons */}
                    <div className="flex ">
                        <div className="relative flex">
                            {/* <img className='bg-[#c7bca7] filter h-6 invert' src="./images/search.png" alt="search"  /> */}
                            <input
                                type="text"
                                className="bg-gray-700 text-white p-2 hidden sm:block w-72"
                                placeholder=" Type here to search"
                            />
                        </div>
                        <div className="flex space-x-1">
                            {/*  */}
                            {minimizedWindows.FileExplorer && (
                                <button onClick={() => maximizeWindow('FileExplorer')} className=" text-white bg-slate-600 p-2 px-3 hover:bg-gray-500"><img className='w-6' src="../images/file.png" alt="" /></button>
                            )}
                            {minimizedWindows.Projects && (
                                <button onClick={() => maximizeWindow('Projects')} className=" text-white bg-slate-600 p-2 px-3 hover:bg-gray-500"><img className='w-6' src="../images/projects.png" alt="" /></button>
                            )}
                            {minimizedWindows.Contactme && (
                                <button onClick={() => maximizeWindow('Contactme')} className=" text-white bg-slate-600 p-2 px-3 hover:bg-gray-500"><img className='w-6' src="../images/contact.png" alt="" /></button>
                            )}
                            {minimizedWindows.GitHub && (
                                <button onClick={() => maximizeWindow('GitHub')} className="text-white bg-slate-600 p-2 px-3 hover:bg-gray-500"><img className='w-6' src="./images/github.png" alt="" /></button>
                            )}
                        </div>
                    </div>
                </div>
                {/* Date and Time */}
                <div className="text-white text-center mr-3 text-xs">
                    <div>{currentTime}</div>
                    <div>{currentDate}</div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;