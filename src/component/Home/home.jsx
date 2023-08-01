import React from 'react'
import './style.css'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Typewriter from "typewriter-effect";
// import img from '../../img/homee/imgg.png'
import Resume from '../../img/Aryan_resume.pdf'

const Home = () => {
    let urlgit = 'https://github.com/aryan7122';
    let urllin = 'https://www.linkedin.com/in/aryan-kushwaha-7dec2/';

    const menuItemClickHandler = (section) => {
        // setIsOpen(false); // Close the mobile menu when a section is clicked

        if (section === "hireme") {
            window.scrollTo({ top: window.innerHeight * 4, behavior: "smooth" });
        }
    };

    return (
        <div className='   w-[100%] min-h-[100vh] body3' >
            <div className="  z-[0] h-[100vh]  w-[100%]  ">
                
                <div className='  absolute  z-[2]  text-start leading-relaxed  m-4  mt-[25%] sm:mt-[35%] md:mt-[30%] lg:mt-[20%] xl:mt-[10%]  ml-4 sm:ml-8 md:ml-12 lg:ml-24 xl:ml-28 2xl:ml-36' >
                    <span class="absolute  flex h-44 w-44 z-0">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccc] opacity-20 "></span>
                        {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
                    </span>
                    <span className='text-[#ccc] animate-ping duration-700 text-[1.8rem] lg:text-[2.2rem]  p-4'>
                        Hi
                    </span>
                    <span className='text-[#ccc]  text-[1.3rem] lg:text-[2rem]'>
                        There! I'm
                    </span>

                    {/* <h1 className='text-white text-[3.2rem] text font-bold	 '>
                        FRONT END WEB DEVELOPER
                    </h1> */}
                    <span className='h1 p-4 text-white  text-[1.5rem] sm:text-[1.6rem] xl:text-[3rem] lg:text-[3rem]  md:text-[2.5rem]'>
                        <Typewriter 
                            options={{
                                strings: ['React JS', 'JavaScript', 'Front End Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    {/* <p className='text-white text-[2.2rem] font-bold	'>
                        
                    </p> */}
                    <p className='w-full p-4 sm:w-[99%] md:w-[95%] lg:w-[50%] xl:w-[55%] text-[1rem] md:text-[1rem] xl:text-[1.2rem] text-slate-500 leading-relaxed  '>
                        A Young <span className='text-slate-400'>React JS</span> Developer
                        with crazy from web design. Passionate React JS Developer User Responsive Design. Let's Bring Your Vision to Life!
                    </p>


                    {/* <p className='text-slate-600 text-2xl pt-8 flex  justify-start'>Find Me on</p> */}
                    <span>
                        <ul className='flex pl-4  justify-start text-[2rem]'>
                            <li className='pr-8 text-[#ccc] '>

                                <a href={urlgit}><i class="fa-brands fa-square-github  animate-pulse lg:text-[3rem]"></i></a>
                            </li>
                            <li className='text-blue-800'>
                                <a href={urllin}><i class="fa-brands fa-linkedin animate-pulse lg:text-[3rem]"></i></a>
                            </li>
                        </ul>

                        <div className='     flex justify-start p-4  '>
                            <span class="absolute mt-1  h-4 w-4  ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccc] opacity-60 "></span>
                                <span class="relative animate-bounce inline-flex rounded-full h-4 w-4 -z-10 bg-[#3000e9]"></span>
                            </span>
                            <button onClick={() => menuItemClickHandler("hireme")}
                                className='border text-[1.2rem]  boder-[#ccc] pl-4 pr-4 pt-2 pb-2 w-42 mt-2 text-[#ccc] hover:text-[#3000e9] hover:border-[#3000e9]  '>
                                Hire Me!
                            </button>

                            <a href={Resume} >
                            <button 
                                className='ml-10 border text-[1.2rem]  boder-[#ccc] pl-4 pr-4 pt-2 pb-2 w-42 mt-2 text-[#ccc] hover:text-[#3000e9] hover:border-[#3000e9]  '>
                                <i class="fa-solid fa-download pr-2 animate-pulse"></i>
                                Resume
                            </button>
                            </a>
                        </div>
                    </span>
                </div>
                {/* <div className="flex  z-0 justify-end " >
                    <div className='body3'>

                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Home
