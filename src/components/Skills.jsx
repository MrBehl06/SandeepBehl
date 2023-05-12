import React from "react";
import { delay, motion } from "framer-motion";
import circle from "../assests/circle.png";
import skills from "../assests/skills.png";
import Spline from "@splinetool/react-spline";
import Design from "./Design";

const Skills = () => {
  return (
    <div className="container mx-auto h-auto flex flex-col items-center justify-center w-full mt-[250px] max-sm:mt-[100px] ">
      <div className="mb-8 max-sm:flex  max-sm:flex-col max-sm:items-center ">
        <h2 className="text-7xl max-sm:text-[45px] text-[#ccd6f6] text-center font-Poppins cursor-pointer hover:text-sky-400 font-bold mb-5">
          Skills and Technologies
        </h2>
        <hr className=" w-[850px] max-sm:w-[310px] ml-1 max-sm:ml-0 h-px my-[8px]  bg-gradient-to-r  from-sky-400 to-[#041C32] border-0 rounded " />
      </div>
      <div className=" w-[1000px] max-sm:w-auto h-auto flex  items-center  max-sm:items-start   justify-between max-sm:flex-col   mb-8 ">
        <div className="w-[500px] max-sm:w-auto h-auto pt-10 mb-20">
          <div className="flex flex-col ">
            <div className="relative mb-8 ">
              <h2 className="text-[20px] mt-2 max-sm:text-center mb-5 text-start cursor-pointer  font-Poppins text-[#8892b0] p-2">
                Front-End
              </h2>
              <div className="w-[500px] max-sm:w-[300px] max-sm:ml-[-55px] left-0 bg-[#8892b0] h-[10px] rounded absolute "></div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                transition={{ duration: 2, delay: 1 }}
                className=" bg-sky-400 max-sm:ml-[-55px] h-[10px] rounded absolute "
              ></motion.div>
            </div>
            <div className="relative mb-8  ">
              <h2 className="text-[20px] mt-2 mb-5 max-sm:text-center text-start cursor-pointer  font-Poppins text-[#8892b0] p-2">
                Back-End
              </h2>
              <div className="w-[500px] bg-[#8892b0] max-sm:ml-[-55px] max-sm:w-[300px] h-[10px] rounded absolute "></div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ duration: 2, delay: 1 }}
                className="w-[] bg-sky-400 h-[10px] max-sm:ml-[-55px] rounded absolute "
              ></motion.div>
            </div>
            <div className="relative mb-8 ">
              <h2 className="text-[20px] mt-2 mb-5 max-sm:text-center text-start cursor-pointer  font-Poppins text-[#8892b0] p-2">
                Programming
              </h2>
              <div className="w-[500px] bg-[#8892b0] max-sm:ml-[-55px] max-sm:w-[300px] h-[10px] rounded absolute "></div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "20%" }}
                transition={{ duration: 2, delay: 1 }}
                className=" bg-sky-400 h-[10px] max-sm:ml-[-55px] rounded absolute "
              ></motion.div>
            </div>
          </div>
        </div>
        <div className=" max:sm-hidden max-sm:w-[200px] h-[300px] w-[300px] flex items-center justify-center ">
           <Design/>
        </div>
      </div>
      <div className="w-[900px] max-sm:w-auto text-[20px] max-sm:leading-[30px] mt-8 max-sm:text-[15px] text-center cursor-pointer  font-Poppins text-[#8892b0] p-2">
        <p>
          My main area of expertise currently is in front-end web
          development(client side of the web). I am familiar with a lot of tech
          tools which I use in my projects. My interests, however, extend beyond
          web and I love building apps, taking part in competitive coding
          competitions and contributing to open-source.
        </p>
      </div>
    </div>
  );
};

export default Skills;
