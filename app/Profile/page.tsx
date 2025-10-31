import Navbar2 from '@/Components/Navbar2'
import React from 'react'

const page = () => {
    return (
        <div className='relative h-screen w-screen'>
            <div
                className='fixed inset-0 bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center -z-10'
            />
            <div className='fixed inset-0 backdrop-blur-lg bg-black/40 -z-10' />
            <Navbar2 />
        </div>
    )
}

export default page