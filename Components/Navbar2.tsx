import Link from 'next/link'
import React from 'react'

const Navbar2 = () => {
    return (
        <section className='flex justify-center items-center'>
            <nav className='fixed top-1 w-[80vw] list-none flex justify-between items-center h-fit  p-4 rounded-2xl shadow-black backdrop-blur-2xl bg-black/10  shadow-2xl'>
                <Link href={"/home"} className='bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent text-3xl'>Cropide</Link>
                <div className='flex gap-4'>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>My Results</li>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>About us</li>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>Contact</li>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>Soil-Kit demonstration</li>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>Profile</li>
                    <li className='hover:underline hover:text-red-600 hover:scale-105 hover:transition-all hover:duration-200 '>Logout</li>
                </div>
            </nav>
        </section>
    )
}

export default Navbar2