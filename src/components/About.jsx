import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import photo from "../assests/photo.png"
const About = () => {

  return (
    <motion.div className="container mx-auto flex max-sm:flex-col justify-between  h-auto w-full mt-[280px] max-sm:mt-[100px] ">
       <div className="relative w-[500px] h-[500px] max-sm:flex max-sm:items-center max-sm:justify-center max-sm:w-auto max-sm:h-auto">
       <div className="w-[400px] h-[400px]  ml-5  max-sm:w-[200px] max-sm:h-[200px]   bg-[#38BDF8]/[0.3]">
        </div>        
        <div>
         <img src={photo} alt="" srcset="" className="absolute top-[-43.6px]  left-[-40px] max-sm:left-20  max-sm:top-[17px]  max-sm:w-[200px] max-sm:h-[200px] z-20" />
        </div>
        <div className="w-[400px] h-[400px] max-sm:w-[200px] max-sm:h-[200px] border-2 top-8 left-14 max-sm:left-20  max-sm:top-[16px]  absolute border-sky-400 ">
        </div>
        </div>
      <div className=" max-sm:text-center  max-sm:mt-8  ">
        <div className="max-sm:flex  max-sm:flex-col max-sm:items-center">
          <motion.h2   className="text-7xl text-[#ccd6f6] max-sm:text-[45px] font-Poppins cursor-pointer hover:text-sky-400 transi font-bold mb-5">
            About Me
          </motion.h2>
          <hr className=" w-[450px] max-sm:w-[220px] ml-1 h-px my-[8px] max-sm:mt-[-10px]  bg-gradient-to-r  from-sky-400 to-[#041C32] border-0 rounded "/>
          {/* Line */}
        </div>
        <motion.div  className="w-[800px] max-sm:w-auto  max-sm:text-[15px] max-sm:leading-[30px]  text-[20px] cursor-pointer  font-Poppins text-[#8892b0] p-2">
          <p className="mb-5">
            Welcome to my website! My name is
            <span className="text-sky-400 font-Roboto mr-1"> Sandeep Behl</span>
            and I am a web developer. I specialize in designing and developing
            dynamic websites that are both visually appealing and functional.
          </p>
          <p className="mb-5">
            My approach to web development is to create websites that are
            user-friendly and responsive, ensuring that they look great on all
            devices.
          </p>
          <p className="mb-5"> 
            I am passionate about web development and am constantly learning new
            technologies and techniques to stay up-to-date with the latest
            trends. Browse my portfolio and contact me to discuss your web
            development needs.
          </p>
        </motion.div>
      </div>

     
    </motion.div>
  );
};

export default About;
