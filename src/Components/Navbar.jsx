import React from 'react';
import { Link } from 'react-scroll';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='h-[7vw] nav w-full border-b-2 border-zinc-800 flex p-4 items-center justify-between'>
            <div className="left h-full w-56 p-4">
                <img src="./img/logo.png" alt="" />
            </div>
            <div className="center">
                <div className="links hide w-[100%] text-[16px] cursor-pointer gap-7 text flex items-center justify-around">
                    <Link to="home" smooth={true}  className="text2 font-[500]">Home</Link>
                    <Link to="progems" smooth={true}  className="text2 font-[500]">Programs</Link>
                    <Link to="whyus" smooth={true}  className="text2 font-[500]">Why us</Link>
                    <Link to="plan" smooth={true}  className="text2 font-[500]">Plans</Link>
                    <Link to="why" smooth={true}  className="text2 font-[500]">Testimonials</Link>
                </div>
            </div>
            <i className=' hidden'>

                    <CiMenuFries />
            </i>
            <div className="rightbtn hide mr-12 px-5 py-2 rounded-md bg-white text-black">
                <button className='font-semibold'>Join Now</button>
            </div>
        </div>
    );
};

export default Navbar;
