import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1nfrepg', 'template_yyxxhzc', form.current, '-faIlZiVYMVm6QEJU')
      .then(() => {
        console.log('SUCCESS!');
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };

  return (
    <div className="w-full h-[40%] bg-zinc-700">
      <div className="container h-full w-full flex items-center justify-between">
        <div className="right relative">
            <div className="line"></div>
          <div className="text text-5xl leading-[140%] ml-10 font-bold gap-5">
            <div>
              <span className="heding">READY TO</span>
              <span className="ml-8">LEVEL UP</span>
            </div>
            <div>
              <span className="ml-4">YOUR BODY</span>
              <span className="heding ml-8">WITH US?</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-32 bg-[#808080] p-4">
          <form ref={form} onSubmit={sendEmail} className="flex">
            <input name="from_name" className="bg-[#808080] outline-none text-white px-8 py-1 mr-2 w-full" placeholder="Enter your Email Address  " type="email" />
            <button type="submit" className="btn text-sm">Join_Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
