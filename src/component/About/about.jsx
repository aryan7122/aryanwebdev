import React from 'react'
import img from '../../img/homee/about.jpg'
import { SiTailwindcss } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { ImGit } from 'react-icons/im'

const About = () => {
  return (
    <div className=' w-[100%] min-h-[100vh] bg-[#010101] '>
      <div className='text-[#3000e9] text-[2.8rem] font-bold hover:underline'><h1>About Me</h1></div>
      <div className='text-[#ccc] text-[1rem] sm:text-[1.3rem] lg:text-[1.5rem] '><h3>Professional Profile - There Is All About Me</h3></div>
      <div className=" ">
        <div className=" p-0  m-0 sm:p-6 md:p-10 lg:p-20 xl:p-32  md:flex justify-center">


          <div className=" ml-2   text-start p-4 ">

            <div className=" flex ">

              {/* <div className="  cursor-pointer p-4 w-[300px] h-[300px] "> */}
              <div className="  ">
                <img src={img} alt=""
                  className=' relative border-[#000] border-[3px] rounded-lg w-[100%]  hidden md:block' />
              </div>
              {/* <div className="border-[0.1px] border-[#3c3c3c] p-32 pt-64 ">      </div> */}
              {/* </div> */}

              <div className="  ml-2 md:ml-8  text-[#ccc] text-[2.2rem]">
                <span className='text-[1.3rem] '>
                  <span className='bottom-3   pr-3 '>I'm</span>
                  <span>Aryan Kushwaha</span>
                <p className='w-[2%] h-1 bg-[#3000e9]'></p>
                </span>
                <div className="text-[#929292] text-[1rem] lg:text-[1.4rem] xl:text-[1.6rem] md:text-[1.2rem] sm:text-[1.1rem]">
                  <p className='pt-10 pr-4 lg:pr-10 xl:r-20'>I am a dedicated web developer specializing in frontend development. Currently pursuing my final year at Nehru Gram Bharati University in Prayagraj, Uttar Pradesh, I have actively worked on various web development projects. With expertise in HTML, CSS, and JavaScript.</p>
                  <p className='pt-5 pr-4 lg:pr-10 xl:r-20 hidden sm:block'> I am committed to crafting visually stunning websites that provide seamless user experiences and optimal performance. Passionate and driven, I constantly strive to expand my knowledge and skills in this dynamic field.</p>
                </div>
              </div>

            </div>

            <div className=" ml-0 pl-0    md:ml-8 w-full p-7 mt-2 md:mt-6  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 sm:grid-cols-1 xl:grid-cols-2  md:relative sm:w-[100%]   h-[100px]  ">
              <div className=" ">
                <h2 className='  flex text-[1.2rem] 2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem] '>
                  <span className="text-[#3000e9]"><i class="fa-solid fa-code"></i></span>
                  <span className="text-[#fff] pl-3 pr-4 ">Skills:</span>
                  <p className="flex pt-2 text-[1rem]  2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  text-[#059f17]  ">
                    <i class="fa-brands fa-html5 pr-2"></i>
                    <i class="fa-brands fa-css3-alt pr-2"></i>
                    <i class="fa-brands fa-bootstrap "></i>
                    <i class="fa-brands fa-square-js pl-2 pr-2"></i>
                    <i class="fa-brands fa-react pr-2"></i>
                    <i class="fa-brands fa-node"></i>
                    <span className='flex'>
                      <SiTailwindcss className='mr-2 ml-2' />
                      <SiExpress />
                      <SiMongodb />
                      <SiGithub />
                      <ImGit className='ml-2' />
                    </span>
                  </p>
                </h2>

                <h2 className='flex text-[1.2rem] 2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  '>
                  <span className="text-[#3000e9]"><i class="fa-solid fa-handshake"></i></span>
                  <span className="text-[#fff] pl-3 pr-4 ">Freelance:</span>
                  <span className="flex  text-[1.2rem]  2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  text-[#4b4b4b] mt-1 ">
                    Available
                  </span>
                </h2>

                <h2 className='flex text-[1.2rem]  2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem] '>
                  <span className="text-[#3000e9]"><i class="fa-solid fa-language"></i></span>
                  <span className="text-[#fff] pl-3 pr-4 ">Spoken Langages:</span>
                  <span className="flex  text-[1.2rem] 2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  text-[#4b4b4b]  mt-1">
                    Hindi, English
                  </span>
                </h2>

              </div>
              <div className=" ">
                <h2 className='flex text-[1.2rem]  2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem] '>
                  <span className="text-[#3000e9]"><i class="fa-solid fa-phone"></i></span>
                  <span className="text-[#fff] pl-3 pr-4 ">Phone:</span>
                  <span className="flex  text-[1.2rem] 2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  text-[#4b4b4b]  mt-1">
                    +91 6394311141
                  </span>
                </h2>

                <h2 className='flex text-[1.2rem]  2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem] '>
                  <span className="text-[#3000e9]"><i class="fa-solid fa-envelope"></i></span>
                  <span className="text-[#fff] pl-3 pr-4 ">Email:</span>
                  <span className="flex  text-[1.2rem] 2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  text-[#4b4b4b]  mt-1">
                    webdeveloperaryank@gmail.com
                  </span>
                </h2>

                <h2 className='flex text-[1.2rem]  2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem] '>
                  <span className="text-[#3000e9]"><i class="fa-solid fa-location-dot"></i></span>
                  <span className="text-[#fff] pl-3 pr-4 ">Address:</span>
                  <span className="flex  text-[1.2rem] 2xl:text-[3rem] xl:text-[2.6rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[1.5rem]  text-[#4b4b4b]  mt-1">
                    India, UtterPradesh
                  </span>
                </h2>
              </div>
            </div>

          </div>





        </div>
      </div>



    </div>
  )
}

export default About
