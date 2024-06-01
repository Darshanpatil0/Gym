import React from 'react';

const Why = () => {
  return (
    <div className="bg-zinc-700 pt-20 flex gap-2 px-8 align" id='whyus'>
      <div className="grid grid-cols-3 gap-4 w-1/2">
        <img src="./img/image1.png" alt="Image 1" className="row-span-2 object-cover h-[28rem] w-full" />
        <img src="./img/image2.png" alt="Image 2" className="col-span-2 object-cover h-[16rem] w-full" />
        <img src="./img/image3.png" alt="Image 3" className="object-cover h-[11rem] w-full" />
        <img src="./img/image4.png" alt="Image 4" className="object-cover h-[11.2rem] w-full" />
        <div className='  h-[11.2rem]   w-full'></div>
      </div>
      <div className="h-screen px-16  py-2 w-1/2">
        <h3 className=' font-bold  text-md  pb-5 text-[#F48915]'>SOME REASONS</h3>
        <h1 className=' text-5xl font-bold pb-1'><span className='heding'>WHY</span> CHOOSE US?</h1>
     
     
        <div className="imgh1  flex">
<div className="imgoch">

        <img className=' h-[30px] mt-[17px]  object-cover ' src="./img/tick.png" alt="" />
        <img className=' h-[30px] mt-[17px]  object-cover ' src="./img/tick.png" alt="" />
        <img className=' h-[30px] mt-[17px]  object-cover ' src="./img/tick.png" alt="" />
        <img className=' h-[30px] mt-[17px]  object-cover ' src="./img/tick.png" alt="" />
</div>

    <div className="text">
  <h2 className='  text-[1rem]  mt-4 p-1 px-4  font-bold'>OVER 140+ EXPERT COACHS</h2>
  <h2 className='  text-[1rem]  mt-4 p-1 px-4  font-bold'>TRAIN SMARTER AND FASTER THAN BEFORE</h2>
  <h2 className='  text-[1rem]  mt-4 p-1 px-4  font-bold'>1 FREE PROGRAM FOR NEW MEMBER </h2>
  <h2 className='  text-[1rem]  mt-4 p-1 px-4  font-bold'>RELIABLE PARTNERS</h2>
    </div>
        </div>

        <h3 className='  pt-3 pb-4 text-[#88898A] text-md font-bold'>OUR PARTNERS</h3>
        <div className="img flex gap-4">
          <img className='h-[30px]' src="./img/nb.png" alt="" />
          <img className='h-[30px]' src="./img/adidas.png" alt="" />
          <img className='h-[30px]' src="./img/nike.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Why;
  