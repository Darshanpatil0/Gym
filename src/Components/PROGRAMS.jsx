import React from 'react';

const PROGRAMS = () => {
  const data = [
    {
      img: './img/dumbell.png',
      Headers: 'Strength Training',
      paragrafe: 'In this program, you are trained to improve your strength through many exercises.'
    },
    {
      img: './img/runing.svg',
      Headers: 'Cardio Training',
      paragrafe: 'In this program, you are trained to do sequential moves in range of 20 until 30 minutes.'
    },
    {
      img: './img/F.svg',
      Headers: ' Fat Burning',
      paragrafe: 'This program is suitable for you who wants to get rid of your fat and fastnop fast lose their weight.'
    },
    {
      img: './img/heartHealth.svg',
      Headers: 'Health Fitness',
      paragrafe: 'This programs is designed for those who exercises only for their body fitness not body fast  building.'
    },
  ];

  return (
    <div className='min-h-[70vh] w-full  text-white bg-zinc-700' id='progems'>
      <div className="text4 h-[10%] text-5xl font-semibold gap-20 pt-24 w-full flex items-center justify-center">
        <i>
          <p>EXPLORE OUR</p>
        </i>
        <i>
          <span>PROGRAMS</span>
        </i>
        <i>
          <p>TO SHAPE YOU</p>
        </i>
      </div>
      <div className="card p-4 max-w-full mt-12 ml-6 mr-5 gap-5 flex align items-center">
        {data.map((item, index) => (
          <div key={index} className="cards2020 p-6 bg-[#808080]">
            <img className='h-[2rem] text-white object-cover' src={item.img} alt="" />
            <p className='text-xl mt-3 font-semibold'>{item.Headers}</p>
            <p className='text-md mt-4 font-medium'>{item.paragrafe}</p>
            <div className="join mt-3 flex gap-5">
              <p className='text-xl'>Join Now</p>
              <img className='h-[20px] mt-2' src="./img/rightArrow.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PROGRAMS;
