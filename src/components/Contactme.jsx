import React from 'react';


const ContactMe = ({ onMinimize, onMaximize, onClose }) => {
  const [isMaximized, setIsMaximized] = React.useState(false);
  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
    onMaximize();
  };

  return (
    <div className={`border border-gray-700 text-white rounded-md shadow-lg bg-[#252525] fixed ${isMaximized ? 'w-[100vw] h-full' : 'sm:w-[50vw] h-[50vh]'}`}>
      <div className="relative headingbar flex justify-between items-center bg-black text-white">
        <div className='w-1/4 flex justify-between'>
          <img src="./images/contact.png" className='h-5' alt="icon" />
          <p className='whitespace-nowrap'>Contact Me</p >
        </div>
        <div className="flex space-x-2 content-center text-center">
          <button onClick={onMinimize} className="minimize-btn text-3xl px-2 hover:bg-slate-900">-</button>
          <button onClick={handleMaximize} className="maximize-btn text-3xl px-2 hover:bg-slate-900">□</button>
          <button onClick={onClose} className="close-btn text-3xl px-2 hover:bg-slate-900">×</button>
        </div>
      </div>
      <div className='relative content flex h-full'>
        <div className={`bg-[#404040] text-[#404040] hidden sm:block w-1/5 ${isMaximized ? 'h-[95%]' : 'h-[88.5%]'}`}>
          <h1>contactme</h1>
        </div>
        <div className={`relative sm:w-4/5 ${isMaximized ? 'h-[98%]' : 'h-[88.5%]'}`}>
          <div className='urldiv truncate border-[1px] border-slate-200'>
            {window.location.href + "/contactme"}
          </div>
          <div className="h-[90%] p-10 flex flex-col items-center justify-center">
            <button
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
              onClick={() => window.open('tel:7906396246')}
            >
              <img src="./images/phone.png" alt="Phone" className="h-15 mr-2" /> Call Me
            </button>
            <button
              className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.open('mailto:lakshyasharma1928@gmail.com')}
            >
              <img src="./images/email.png" alt="Email" className="h-15 mr-2" /> Email Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
