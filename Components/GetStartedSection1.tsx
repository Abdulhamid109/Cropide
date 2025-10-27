import React from 'react'
import Navbar from './Navbar'
import { RiScrollToBottomFill } from 'react-icons/ri'

const GetStartedSection1 = () => {
    return (
        <div className='bg-[url(/bgimage.jpg)] bg-cover h-screen w-screen text-black'>
            {/* <div className='focus:inset-0 focus:bg-black focus:opacity-30 '></div> */}
            {/* <div
          className="absolute inset-0 bg-cover bg-center z-0"></div> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <Navbar />
            <div className='relative top-[25vh] flex justify-center items-center flex-col'>
                <div className='text-6xl font-bold text-white '>Choose whats best for your Farm with</div>
                <div className='flex justify-center items-center text-8xl bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>
                    Cropide.
                </div>
                <div className='h-[10vh]'></div>
                <div className='text-3xl  bg-gradient-to-t from-green-100 font-bold to-white bg-clip-text text-transparent'>
                    An AI based Crop determining System build for Farmers
                </div>
                <div className='h-[10vh]'></div>
                <div className='flex justify-center items-center gap-3'>
                    <button className='p-2 bg-white/40 hover:bg-white/50 hover:scale-105 hover:transition-all hover:duration-200 backdrop-blur-2xl w-[10vw] shadow-2xl rounded-md font-thin'>About Us</button>
                    <button className='p-2 bg-white/40 hover:bg-white/50 hover:scale-105 hover:transition-all hover:duration-200 backdrop-blur-2xl w-[10vw] shadow-2xl rounded-md font-thin'>Get Started</button>
                </div>
                <div className='h-[10vh]'></div>
                <RiScrollToBottomFill color='white' size={30} className='p-1 animate-bounce' />
                <p className='text-white'>Scroll down to get more info...</p>
            </div>

        </div>
    )
}

export default GetStartedSection1