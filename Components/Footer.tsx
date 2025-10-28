import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-screen backdrop-blur-2xl bg-white/20 shadow-2xl shadow-black p-5'>
            <div className='flex justify-center items-center gap-1'>
                Made with ❤️ by <Link href={"https://abd-dev.vercel.app"}> Abdulhamid</Link>
            </div>
        </footer>
    )
}

export default Footer