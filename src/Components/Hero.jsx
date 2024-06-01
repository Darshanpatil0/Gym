import { motion, spring } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <div className="h-full hero99  bg-zinc-700 align  w-full flex">
      <div className="left h-full w-full p-4">
        <div className="sidebar w-[32%] rounded-full relative p  mt-16 ml-4 h-[10%] flex items-center justify-center bg-[#2e3033]">
          <motion.div
            initial={{ x: "270%" }}
            animate={{ x: "0%" }}
            transition={{ duration: "2", type: "tween" }}
            className="h-[80%] rounded-full  absolute ml-2 left-0 w-[26%] bg-[#F48916] "
          ></motion.div>
          <div className="   z-20 town font-medium text-[1.1vw]">
            THE BEST FITNESS CLUB IN THE TOWN
          </div>
        </div>
        <div className="textheding">
          <h1 className="text-7xl z-20 mainheding font-semibold py-8 px-4 leading-[140%]">
            
            <div className="heding m-0    p-0 inline-block">
            
              SHAPE
            </div> YOUR <br />
            IDEAL BODY
            <p className=" sunheding text-lg  mt-4 ml-8">
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </p>
          </h1>
        </div>
        <div className="number h-[16%] num2 w-[60%] p-4 ml-4 flex items-center  justify-between ">
          <div className="text  flex   flex-col items-center ">
            <h1 className="text-2xl  mr-5">
              <CountUp start={100} end={140} duration={4} prefix="+" />
            </h1>
            <h3 className=" text-[#999998]">EXPERT COACHES</h3>
          </div>
          <div className="text flex  flex-col items-center">
            <h1 className="text-2xl mr-5">
              <CountUp start={800} end={974} duration={4} prefix="+" />
            </h1>
            <h3 className="text-[#999998]">MEMBERS JOINED</h3>
          </div>
          <div className="text flex  flex-col items-center">
            <h1 className="text-2xl mr-6">
              <CountUp start={0} end={50} duration={4} prefix="+" />
            </h1>
            <h3 className="text-[#999998]">FITNESS PROGRAMS</h3>
          </div>
        </div>
      </div>
      <div className="heroright  relative  h-full bg-zinc-800   w-[30%] ">
        <motion.div
          initial={{ right: "0" }}
          animate={{ right: "4rem" }}
          transition={{ duration: 3, type: "spring", delay: 0.1 }}
          className="hart h-[140px] p-4 relative  mt-[30%] ml-[70%]  w-[120px] rounded-md  bg-zinc-700"
        >
          <img className=" w-[2rem]   " src="./img/heart.png" alt="" />
          <p className="text-md mt-4 text-[#999998] font-bold">Heart Rate</p>
          <p className="mt-2 text-xl font-bold">116 BPM</p>
        </motion.div>
        <motion.div
        initial={{ left: "-26rem", top: "10px" }}
        animate={{ left: "-18rem", top: "10px" }}
          transition={{ duration: 3, type: "spring", delay: 0.1 }}
          className="crelers  gap-6 rounded-xl flex mt-[55%] move-div  w-fit bg-zinc-800  p-[1rem] "
        >
          <img className="3rem" src="./img/calories.png" tal="" />
          <p className="text-xl font-semibold">
            Calories <br />
            burned <br />
            220 kcal
          </p>
        </motion.div>

        <div className="bgground hide h-full  w-full">
          <motion.img
            initial={{ right: "12rem" }}
            whileInView={{ right: "18rem" }}
            transition={{ duration: 3, type: "spring", delay: 0.1 }}
            className="h-[70%]   w-[70%] right-[91%] top-[0] absolute"
            src=".\img\hero_image_back.png"
            alt=""
          />
        </div>

        <img
          className="hero-img object-cover"
          src="./img/hero_image.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
