import React, { useState } from 'react';
import image from "../assets/img.webp"

const LockScreen = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async(e)=>{
    console.log(name);
    e.preventDefault();
    if (name.trim() === '') {
      setError('Name is required');
      return;
    }
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        // Redirect to the next page
        window.location.href = '/home';
        console.log("sent")
      } else {
        setError('Failed to submit name');
      }
    } catch (err) {
      setError('Failed to submit name');
    }
  };

  return (
    <>
      <div className='lockscreen absolute bg-[url("https://mrwallpaper.com/images/hd/4k-ultra-hd-windows-forest-artwork-3vcnu451trkacmcd.jpg")] bg-cover bg-center flex blur-[2px] justify-items-center items-center h-[calc(100dvh)] w-[calc(100dvw)]'>
      </div>
      <div className='h-[calc(100dvh)] absolute w-[calc(100dvw)] content-center text-center'>

        <div className="login relative m-auto  w-[350px]  h-1/2">
          <img className='m-auto h-40 w-40 rounded-full' src={image} alt="dp" />

          
          
          <p className='text-white mt-1 font-thin text-4xl' >Lakshya Sharma</p>
          {/* <input className=' bg-[rgba(255,255,255,0.2)] text-white border-[rgba(255,255,255,0.8)] border-2' type="password" placeholder='Enter your name to continue' /> */}
          <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="text" placeholder='Enter your name to continue' name='name'
            className="w-full mt-3 p-1.5 bg-white bg-opacity-20  placeholder-opacity-100 placeholder-white text-white border-2 border-[rgba(255,255,255,0.6)] focus:outline-none" value={name}
                    onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" className=' my-3 p-1.5 px-7 bg-white bg-opacity-20  placeholder-opacity-100 placeholder-white text-white border-2 border-[rgba(255,255,255,0.6)] focus:outline-none' value="Sign in" />
          </form>

        </div>
      </div>
    </>
  );
};

export default LockScreen;
