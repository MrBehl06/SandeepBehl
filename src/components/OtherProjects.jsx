import React from "react";
import { projectData } from "../constants/navLinks";
import { useState } from "react";
const OtherProjects = () => {
  const [length, setLength] = useState("h-[370px]");
  
  const [val, setVal] = useState("More");
  const changeLength = () =>{
    if(length==="h-[370px]"){
        setLength("h-auto");
        setVal("Less");
    }
    else{
        setLength("h-[370px]");
        setVal("More");
    }
  }    
  return (
    <>
      <div className="container mx-auto  h-auto w-full mt-[150px] max-sm:mt-18 max-sm:mb-10 flex flex-col items-center justify-center ">
        <div className="flex  flex-col items-center mb-8 ">
          <h2 className="text-7xl max-sm:text-[45px] text-[#ccd6f6] font-Poppins cursor-pointer hover:text-sky-400  font-bold mb-5">
            Other Projects
          </h2>
          <hr className=" w-[570px] max-sm:w-[300px] ml-16 max-sm:ml-0 max-sm:mx-auto h-px my-[8px]  bg-gradient-to-r  from-sky-400 to-[#041C32] border-0 rounded " />
        </div>
        <div className={`grid grid-cols-3 gap-y-3.5 p-2 max-sm:grid-cols-1 w-[1100px] max-sm:w-auto ${length} overflow-hidden `}>
          {projectData.map((obj) => {
            const { title, description, tech, icons } = obj;
            return (
              <div className="w-[350px] max-sm:w-[320px] h-[350px] bg-[#233E4E] transition ease-in-out delay-150 shadow-md hover:shadow-sky-400 flex items-center rounded-xl hover:translate-y-[-2px]  " key={obj.id}>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>{icons[0].icon1}</div>
                    <div className="flex ">
                      {icons[0].icon2}
                      {icons[0].icon3}
                    </div>
                  </div>
                  <div className="font-Roboto mb-4 ">
                    <h2
                      className="text-[30px] max-sm:text-[25px] text-[#ccd6f6] font-semibold hover:text-sky-400 cursor-pointer "
                    >
                      {title}
                    </h2>
                    <p className=" text-[18px] w-full text-[#6C7F8A]  ">
                      {description}
                    </p>
                  </div>
                  <div className="flex  w-auto  text-[18px] max-sm:text-[15px] font-Roboto text-sky-400 ">
                    {tech.map(({ id, title }) => (
                      <h4 className="mr-4" key={id}>
                        {title}
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <button  className="w-[200px] h-[40px] border mt-8  hover:bg-sky-400  border-sky-400 text-sky-400 font-Roboto text-[20px] rounded hover:text-white   hover:shadow hover:shadow-sky-400  " onClick={changeLength} >
            Show {val}
          </button>
        </div>
      </div>
    </>
  );
};

export default OtherProjects;
