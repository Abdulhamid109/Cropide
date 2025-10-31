import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='z-50 flex justify-center list-none font-thin tracking-tight'>
            <nav className='z-50 p-4 bg-black/10 backdrop-blur-2xl border border-black/20 shadow-3xl shadow-black flex justify-between items-center rounded-xl w-[75vw] fixed top-1'>
                <Link href={'/'} className='text-3xl bg-gradient-to-t from-gray-400 font-bold to-black bg-clip-text text-transparent'>Cropide</Link>
                <div className='flex list-none gap-4'>
                    <Link href={"#Aboutus"} className='hover:underline hover:transition-all hover:duration-200 hover:scale-105'>About Us</Link>
                    <Link href={"#Contact"} className='hover:underline hover:transition-all hover:duration-200 hover:scale-105'>Contact</Link>
                    <Link href={"https://www.kaggle.com/code/niteshhalai/crop-recommendation-dataset"} className='hover:underline hover:transition-all hover:duration-200 hover:scale-105'>Dataset</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar