import React from 'react';

const Plaing = () => {
  const planingdata = [
    { name1: "2 hours of exercises", playn: "BASIC PLAN" ,name2: "Free consultation to coaches", name3: "Access to The Community", price: "25", img: "./img/heartHealth.svg" },
    { name1: "5 hour of excercises", playn: "PREMIUM PLAN", name2: "Free consultation to coaches", name3: "Accessto minibar", price: "30", img: "./img/runing.svg" },
    { name1: "8 hours of excercises", playn: "PRO PLAN" ,name2: "Consultation of Private Coach", name3: "Free Fitness Merchandises", price: "45", img: "./img/dumbell.png" },
  ];

  return (
    <div className='h-full w-full bg-zinc-700 ' id='plan'>
      <div className="plans-container z-20">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
      </div>
      <div className="h1 flex items-center justify-center z-30 absolute left-16 top-[290%] gap-10 font-bold text-5xl">
        <h3 className='heding'><i>READY TO START</i></h3>
        <h3><i>YOUR JOURNEY</i></h3>
        <h3 className='heding'><i>NOW WITH US</i></h3>
      </div>
      <div className="plan px-28 p-4 align flex  gap-10 pt-28 relative z-30 items-center justify-center">
        {planingdata.map((plan, index) => (
          <div key={index} className="box h-[80vh] w-[28%] p-5 bg-[#656565]">
            <img className='h-[30px]' src={plan.img} alt="" />
            <h4 className='font-bold py-6'>{plan.playn}</h4>
            <h3 className='text-5xl font-bold'>${plan.price}</h3>
            <div className="text mt-7">
              <div className="textcontener mt-5 gap-4 flex">
                <img className='h-[15px] mt-1' src="./img/whiteTick.png" alt="" />
                <span>{plan.name1}</span>
              </div>
              <div className="textcontener mt-5 gap-4 flex">
                <img className='h-[15px] mt-1' src="./img/whiteTick.png" alt="" />
                <span>{plan.name2}</span>
              </div>
              <div className="textcontener mt-5 gap-4 flex">
                <img className='h-[15px] mt-1' src="./img/whiteTick.png" alt="" />
                <span>{plan.name3}</span>
              </div>
            </div>
            <div className="pimg flex mt-12 gap-4">
              <p>See more benefits</p>
              <img className='h-[22px] mt-[1px]' src="./img/rightArrow.png" alt="" />
            </div>
            <button className=' px-20 font-semibold py-[10px] bg-white text-black  mt-8 ml-5  '>Join Now</button>
          </div>
        ))}
        
      </div>
      
    </div>
  );
}

export default Plaing;
