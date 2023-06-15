import React from 'react';

const Projects = ({ title, language, image,linkgithub,live }) => {
  return (
    
    <div className="border rounded-md overflow-hidden border-black w-auto h-fit m-4 over shadow-slate-600 shadow-md">
      <div className='overflow-hidden'>
        <img src={image} alt="" className='hover:scale-110' />
      </div>
      <div className='text-[#cccccc] font-bold text-[1.5rem] cursor-pointer'>
        <p className='flex justify-start pl-4 hover:underline p-1'>
          {title}
        </p>
      </div>
      <div className='flex'>
        <span className='text-[#cccccc] cursor-pointer hover:text-[#3000e9] border border-[#3000e9] rounded-full p-2 bg-[#]  flex justify-start ml-4'>
          {language}
        </span>
      </div>
      <div className='flex justify-between m-2 p-2'>

        <a href={linkgithub}> <button className='border rounded-md w-20 hover:text-[#131313] active:text-[#ccc] active::border-[#131313]   hover:border-[#cccc] border-black bg-[#3000e9] text-[#cccccc] p-2 '><i className="fa-solid fa-code animate-pulse"></i>        </button></a>
        <a href={live}>  <button className='border rounded-md w-20 hover:text-[#131313]  active:text-[#ccc] active::border-[#131313]  hover:border-[#cccc] border-black bg-[#3000e9] text-[#cccccc] p-2'><i className="fa-solid fa-up-right-from-square animate-pulse"></i></button></a>
        
      </div>
    </div>


  );
}

export default Projects;
