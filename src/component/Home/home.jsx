import React from 'react'
import './style.css'
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Typewriter from "typewriter-effect";
// import img from '../../img/homee/imgg.png'


const Home = () => {
    // let urlgit = 'https://github.com/aryan7122';
    // let urllin = 'https://www.linkedin.com/in/aryan-kushwaha-7dec2/';

    const menuItemClickHandler = (section) => {
        // setIsOpen(false); // Close the mobile menu when a section is clicked

        if (section === "hireme") {
            window.scrollTo({ top: window.innerHeight * 4, behavior: "smooth" });
        }
    };

    return (
        <div className='  w-[100%] h-[100vh] bg-[#060606] ' >
            <div className=" z-[0]   ">
                
                <div className=' absolute  z-[2] sm:w-[90%] md:w-[60%]   xl:w-[60%] h-fit  mt-64 text-[2rem] text-start leading-relaxed ml-24 	' >
                    <span class="absolute  flex h-44 w-44 z-0">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccc] opacity-20 "></span>
                        {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
                    </span>
                    <span className='text-[#ccc] animate-ping duration-700 text-[2.5rem]'>
                        Hi
                    </span>
                    <span className='text-[#ccc] pl-3 ext-[3rem]'>
                        There! I'm
                    </span>

                    {/* <h1 className='text-white text-[3.2rem] text font-bold	 '>
                        FRONT END WEB DEVELOPER
                    </h1> */}
                    <span className='h1 text-white sm:text-[3rem] xl:text-[5.6rem] lg:text-[4rem]  md:text-[3.5rem]'>

                        <Typewriter
                            options={{
                                strings: ['UI/UX Desiner', 'React Web Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                    {/* <p className='text-white text-[2.2rem] font-bold	'>
                        
                    </p> */}
                    <p className='w-[70%] text-[1.6rem] text-slate-500 leading-relaxed mt-4 mb-4'>
                        A Young <span className='text-slate-400'>React JS</span> Developer
                        with crazy from web design. Passionate React JS Developer User Responsive Design. Let's Bring Your Vision to Life!
                    </p>


                    {/* <p className='text-slate-600 text-2xl pt-8 flex  justify-start'>Find Me on</p> */}
                    <span>
                        {/* <ul className='flex  justify-start '>
                            <li className='pr-8 text-white'>

                                <a href={urlgit}><i class="fa-brands fa-square-github animate-bounce "></i></a>
                            </li>
                            <li className='text-blue-800'>
                                <a href={urllin}><i class="fa-brands fa-linkedin animate-bounce"></i></a>
                            </li>
                        </ul> */}

                        <div className=' flex justify-start  ' onClick={() => menuItemClickHandler("hireme")}>
                            <span class="absolute mt-4 flex h-4 w-4  ">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccc] opacity-60 "></span>
                                <span class="relative inline-flex rounded-full h-4 w-4 bg-[#3000e9]"></span>
                            </span>
                            <button className='border  boder-[#ccc] pl-4 pr-4 pt-2 pb-2 w-42 mt-6 text-[#ccc] hover:text-[#3000e9] hover:border-[#3000e9]  '>
                                Hire Me!
                            </button>
                        </div>
                    </span>
                </div>
                <div className="flex  z-0 justify-end " >
                    {/* <img src={img} alt="" className='' /> */}
                    <div className='body3'>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
