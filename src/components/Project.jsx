import React from 'react'
import portfolio from "../assests/portfolio.png"
import hoobank from "../assests/HooBank.png"
const Project = () => {
  return (
    <>
     <div className='max-sm:flex max-sm:flex-col max-sm:items-center  '>
        <h2 className="text-7xl max-sm:text-[45px] text-center text-[#ccd6f6] font-Poppins cursor-pointer hover:text-sky-400  font-bold mb-5">
          Some Things I've Build
        </h2>
        <hr className=" w-[850px] max-sm:w-[300px]  mx-auto max-sm:mx-0 h-px my-[8px]  bg-gradient-to-r  from-sky-400 to-[#041C32] border-0 rounded " />
      </div>
      <div className="flex mt-8 relative shadow-3xl ">
        <div className=''>
          <img className="w-[850px] shadow-xl ml-1 h-[450px] max-sm:hidden  " src={portfolio} alt="" />
        </div>
        <div className='  max-sm:visible sm:invisible max-sm:rounded-xl   max-sm:mx-auto max-sm:bg-sky-400/[0.3] w-[320px] h-[420px]'>
        
        </div>
        <div className="absolute right-0 p-4  max-sm:left-0 max-sm:text-center text-end h-[450px] flex flex-col max-sm:items-center justify-center ">
          <div className="mb-2">
          <h4 className="text-[20px] max-sm:text-[15px] font-Roboto text-sky-400 ">Featured Project</h4>
          <h2 className="text-[60px] max-sm:text-[30px] text-[#ccd6f6] font-roboto
           font-semibold ">Portfolio</h2>
          </div>
          <div className="w-[670px] max-sm:w-[300px]  h-[148px] flex items-center  bg-sky-400/[0.2]  max-sm:bg-transparent  rounded p-2">
               <p className="text-center   text-[#ccd6f6] text-[20px] max-sm:text-[15px]  ">
               This portfolio shows a living and changing collection of records that reflect accomplishments, skills, experiences, and attributes.It also highlights samples of best work. 
The website contains many advanced features of CSS and structured with HTML and functioned with JavaScript.</p>
          </div>
          <div className="flex ml-14 max-sm:ml-0 p-4 w-[613px] items-end justify-between mt-5 text-[20px] max-sm:text-[10px] max-sm:w-[313px] font-Roboto text-sky-400 ">
          <h4>VS Code</h4>
          <h4>React</h4>
          <h4 >Tailwind</h4>
          <h4 >Framer-Motion</h4>
          <h4 >Vite</h4>
          </div>
        </div>
      </div>
      <div className="flex mt-8 relative shadow-3xl  ">
        <div className=''>
          <img className="w-[850px] shadow-xl ml-1 h-[450px] max-sm:hidden  " src={hoobank} alt="" />
        </div>
        <div className='  max-sm:visible sm:invisible max-sm:rounded-xl   max-sm:mx-auto max-sm:bg-sky-400/[0.3] w-[320px] h-[420px]'>
        
        </div>
        <div className="absolute right-0 p-4   max-sm:left-0 max-sm:text-center text-end h-[450px] flex flex-col max-sm:items-center justify-center ">
          <div className="mb-2">
          <h4 className="text-[20px] max-sm:text-[15px] font-Roboto text-sky-400 ">Featured Project</h4>
          <h2 className="text-[60px] max-sm:text-[30px] text-[#ccd6f6] font-roboto
           font-semibold ">HooBank</h2>
          </div>
          <div className="w-[670px] max-sm:w-[300px]  h-[148px] flex items-center  bg-sky-400/[0.2]  max-sm:bg-transparent  rounded p-2">
               <p className="text-center   text-[#ccd6f6] text-[20px] max-sm:text-[15px]  ">
               Developed a responsive banking application with React, offering various financial services.Utilized modern front-end tech such as React,Router etc.To build a dynamic and responsive UI,
focusing on user-centered design.</p>
          </div>
          <div className="flex ml-14 max-sm:ml-0 p-4 w-[613px] items-end justify-between mt-5 text-[20px] max-sm:text-[10px] max-sm:w-[313px] font-Roboto text-sky-400 ">
          <h4>VS Code</h4>
          <h4>React</h4>
          <h4 >Tailwind</h4>
          <h4 >Framer-Motion</h4>
          <h4 >Vite</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project