import React from "react";
import { useRef } from "react";
import location from "../assests/location.png";
import email from "../assests/email.png";
import phone from "../assests/phone-call.png";
import * as BsIcons from "react-icons/bs";

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oavbhqm', 'template_2tmd92j', form.current, '5JfGJy8XDtZ4yjtDH')
      .then((result) => {
          console.log(result.text);
          toast.success('Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }, (error) => {
          console.log(error.text);
          toast.error('Error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      });
  };

  return (
    <div className="container mx-auto  mb-8 h-auto w-full mt-[100px] max-sm:mt-[1px] flex max-sm:flex-col  items-center justify-center relative max-sm:static  ">
      
      <div className="w-[850px] h-[600px] max-sm:w-[350px] max-sm:h-[590px] bg-[#233E4E] rounded-md shadow-2xl">
      <form ref={form} className="flex max-sm:flex-col h-auto items-center justify-end max-sm:justify-center  mr-6 max-sm:mr-0 mt-10 "action=""
      onSubmit={sendEmail}>
          <div className="flex flex-col  items-start max-sm:items-center justify-center " >
            <div className="mb-8 mt-2 max-sm:text-center">
            <h2 className="text-white text-[30px] font-semibold">Get In Touch</h2>
            <h4 className="text-sky-400 text-[20px]">Feel Free to a line below</h4>
            </div>
           <div className=" flex flex-col justify-center max-sm:justify-center max-sm:items-center text-white/[0.3]">
            <input type="username" name="user_name" required    placeholder="Name"  className="w-[413px] px-4 max-sm:w-[320px] h-[47px] mb-2  rounded-md shadow-inner bg-[#ffffff]/[0.4]"/>
            <input type="email" name="user_email" autoComplete="new-password"  required placeholder="Email" className="w-[413px] px-4  h-[47px] mb-2 max-sm:w-[320px]  rounded-md shadow-inner bg-[#ffffff]/[0.4]"/>  
            <textarea type="text" name="message" autoComplete="new-password" required   placeholder="Message" className="w-[413px] px-4  h-[200px] mb-2 max-sm:w-[320px] placeholder:text-start rounded-md shadow-inner bg-[#ffffff]/[0.4]" />       
           
          <input type="submit"  value="Send"   className="w-[200px] h-[40px] cursor-pointer border mt-8  hover:bg-sky-400  border-sky-400 text-sky-400 font-Roboto text-[20px] rounded hover:text-white   hover:shadow hover:shadow-sky-400  "/>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
<ToastContainer />
          </div>
          </div>
      
     
      </form>
      </div>
     
    </div>
  );
};

export default Contact;
