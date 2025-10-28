"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { ArrowLeft, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const GetStartedSection2 = () => {
  return (
    <div id='Aboutus' className='h-screen w-screen bg-gradient-to-t from-[#80e656] to-gray-700 flex justify-center items-center gap-10'>
        <div className='w-[50vw] h-[50vh] flex justify-center items-center'>
          <DotLottieReact
        src='/Animation - 1706084188549.lottie'
        loop
        autoplay
        speed={10}
        />
        </div>

        <div className='w-[30vw] h-[30vw] flex flex-col justify-center items-center'>
          <div className='text-2xl'>About Us</div>
          <div className='font-thin tracking-tighter'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et modi incidunt, velit reprehenderit architecto quod iste sapiente adipisci quasi optio porro ullam cum repudiandae neque iure eos placeat nesciunt aliquam est ipsum veniam at. Facere, aliquid perspiciatis animi, magnam sed fuga nesciunt non tempore, accusantium atque architecto. Officiis, quaerat!
          </div>
          <Link className='gap-2 flex justify-center items-center p-3 hover:text-blue-700 hover:underline' href={""}>Dataset used <ArrowRightIcon/> </Link>
        </div>
    </div>
  )
}

export default GetStartedSection2