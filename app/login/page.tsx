import { ArrowBigRightDash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { LuArrowBigRight } from 'react-icons/lu'

const page = () => {
  return (
    <div className='bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-center items-center'>
        
        <div className='inset-0 w-screen h-screen absolute backdrop-blur-lg bg-black/30'></div>

        <div className='rounded-md relative backdrop-blur-lg shadow-2xl shadow-black bg-black/40 p-5 flex flex-col justify-center items-center'>
            <div className='text-6xl m-2 text-center bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>Cropide</div>
            <div className='p-2 text-2xl mt-5 mb-4'>Welcome Back !!</div>
           <form className=' flex flex-col justify-center items-center gap-2 p-2 w-[30vw]'>
            <input type="email" required placeholder='Enter your Email' className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]'/>
            <input type="password" required placeholder='Enter your Password' className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]'/>
            <input type="submit" className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg bg-black/40 hover:bg-black/50 rounded-md p-2 w-[25vw]'/>
            </form> 
            <div className='p-2'>
                or
            </div>
            <div className='flex gap-1'>
                Don&apos;t have an account? <Link href={"/signup"} className='text-blue-400 flex justify-center items-center'>Signup <LuArrowBigRight/></Link>
            </div>
        </div>

    </div>
  )
}

export default page