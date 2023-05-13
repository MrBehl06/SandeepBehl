import React from 'react'
import location from "../assests/location.png";
import email from "../assests/email.png";
import phone from "../assests/phone-call.png";
import * as BsIcons from "react-icons/bs";

const Social = () => {
  return (
    <div className="flex  flex-col max-sm:invisible  justify-center left-16 max-sm:left-0  items-center w-[400px] max-sm:w-[380px]  h-[510px] bg-[#042739] shadow-2xl rounded-lg absolute">
        <div className=" mt-3 mb-8">
          <h2 className="text-white font-semibold text-[30px]">Contact</h2>
        </div>
        <div className=" text-white text-[20px]  mt-3 mb-8">
          <div className="flex mb-10">
            <img src={location} alt="" className="w-[40px] h-[40px] mr-5" />
            <h4>Pune,Mahrastra-411046</h4>
          </div>
          <div className="flex mb-10 ">
            <img src={email} alt="" className="w-[40px] h-[40px] mr-5" />
            <h4>sandeepbehl111@gmail.com</h4>
          </div>
          <div className="flex mb-10">
            <img src={phone} alt="" className="w-[40px] h-[40px] mr-5" />
            <h4>+91-8279267281</h4>
          </div>
        </div>
        <div className="flex w-[250px] justify-between items-center mb-3">
          <div>
            <BsIcons.BsInstagram color="white" size="2rem"  className="transition duration-150 ease-in-out hover:translate-y-[-2px] hover:rotate-45" />
          </div>
          <div>
            <BsIcons.BsGithub color="white" size="2rem"   className="transition duration-100 ease-in-out hover:translate-y-[-2px] hover:rotate-45"/>
          </div>
          <div>
            <BsIcons.BsLinkedin color="white" size="2rem"  className="transition duration-100 ease-in-out hover:translate-y-[-2px] hover:rotate-45"  />
          </div>
          <div>
            <BsIcons.BsFacebook color="white" size="2rem"  className="transition duration-100 ease-in-out hover:translate-y-[-2px] hover:rotate-45" />
          </div>
        </div>
      </div>
  )
}

export default Social