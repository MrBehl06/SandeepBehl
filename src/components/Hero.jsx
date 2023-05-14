import React from "react";
import { motion } from "framer-motion"
import resume from '../assests/resume.pdf'
const Hero = () => {
  return(
    <>
      <div className="container mx-auto  ">
        <div className="flex items-center justify-start    max-sm:pt-40  max-md:justify-between h-auto pt-64 w-full  ">
            <motion.div className=" text-left p-2 items-start max-sm:text-center " initial={{ x: -30,opacity:0.1 }} animate={{ x: 0,opacity:100, }} transition={{type: "spring", ease:"linear", delay: 0.1 }}>
              <h2 className="text-2xl  font-Poppins cursor-pointer  text-sky-400 semi-bold mb-5 " >Hi, my name is </h2>
              <motion.h1 className="text-7xl max-sm:text-[45px]  font-Poppins text-[#ccd6f6] cursor-pointer  font-bold mb-5 ">Sandeep Behl</motion.h1>
              <h1 className="text-7xl max-sm:text-[35px] max-sm:leading-[45px] text-[#8892b0]  font-Poppins cursor-pointer hover:text-sky-400 transi font-bold mb-5"> I build things for the web.</h1>
              <p className="max-w-[590px] text-[20px]  max-sm:text-[15px] max-sm:leading-[30px]  max-sm:w-auto   cursor-pointer  font-Poppins text-[#8892b0]">I'm front-end web developer, I am specialize in creating the visual and interactive elements of a website. I am passionate about staying up-to-date with the latest design trends and technologies to provide the best possible user experience.</p>
            </motion.div>
            
          </div>
          <div className="w-full max-sm:items-center max-sm:flex max-sm:justify-center " >
            <div className="w-[200px] h-[50px] mt-8 cursor-pointer border p-2 text-center hover:bg-sky-400  border-sky-400 text-sky-400 font-Roboto text-[20px] rounded hover:text-white   hover:shadow hover:shadow-sky-400  ">
            <a href="" className="p-2"  download={resume}>Resume</a>
            </div>
            </div>
        </div>
    </>
  )
};

export default Hero;
