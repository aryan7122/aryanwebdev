import React from 'react'
// import './style.css'

const Home = () => {
    let urlgit = 'https://github.com/aryan7122';
    let urllin = 'https://www.linkedin.com/in/aryan-kushwaha-7dec2/';
    return (
        <div className=' body1  w-[100%] h-[100vh] bg-[#131313]'>
            <div className="  flex items-center  justify-start pl-48 w-full h-full">
                <div className='text-[2rem] text-start leading-relaxed	 '>

                    <span className='text-orange-400 '>
                        Hello
                    </span>
                    <span className='text-amber-300 pr-6'>
                        ,
                    </span>
                    <span className='text-slate-300'>
                        I am
                    </span>
                    <p className='text-white text-[2.2rem] text font-bold	'>
                        Aryan
                    </p>
                    <p className='text-white text-[2.2rem] font-bold	'>
                        Kushwaha
                    </p>
                    <p className=' text-[1.8rem] text-slate-500 leading-relaxed'>
                        A Young <span className='text-slate-400'>React JS</span> Developer
                    </p>
                    <p className=' text-[1.8rem] text-slate-500'>
                        with crazy from web design.
                    </p>

                    <p className='text-slate-600 text-2xl pt-8 flex  justify-start'>Find Me on</p>
                    <span>
                        <ul className='flex  justify-start '>
                            <li className='pr-8 text-white'>
                                <a href={urlgit}><i class="fa-brands fa-square-github"></i></a>
                            </li>
                            <li className='text-blue-800'>
                                <a href={urllin}><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                        </ul>
                        
                        {/* <div className='w-[100%] flex justify-center  '>
                            <button className='-l-gray-100 w-60 bg-slate-600 hover:bg-slate-500'>Hire Me</button>
                        </div> */}
                </span>
                </div>
                {/* <button><link rel="stylesheet" href="#" ><i class="fa-brands fa-github"></i></link></button> */}
            </div>
            {/* <div className=" border">

            </div> */}
        </div>
    )
}

export default Home
