import React from 'react';

const Testimonial = () => {
  return (
    <div className="bg-zinc-700 text-white flex pt-16     p-8 h-[80%]" id='why'>
      <div className="max-w-6xl gap  ml-6    ">
        <div className="flex items-center align gap-[50vh] justify-between">
          <div>
            <div className="text-orange-500 text-md font-semibold mb-8 uppercase">Testimonials</div>
            <h2 className="text-6xl font-bold mt-4 leading-[90px] mb-5    uppercase"><span className='heding '>What They</span><br />Say About Us</h2>
            <p className="pararafe t">
            I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!
            </p>
            <div className="text-[#f48915]  font-bold   m-4">JOHN KEVIN - COACH</div>
          </div>
          <div className="relative left-16">
            <div className='w-[17rem]    h-[20rem] z-10 object-cover  border-2 border-orange-500'></div>
            <img className=' absolute  p-4  z-20 top-2 left-2 w-[17rem] object-cover h-[20rem] ' src="./img/t-image1.png" alt="" />
            <div className="absolute bgkt -bottom-2 -right-0  top-6 w-[16rem] h-[18rem]   transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Testimonial;
