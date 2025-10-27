import Link from 'next/link'
import React from 'react'

const GetStartedSection3 = () => {
    return (
        <div className='h-screen w-screen bg-gradient-to-b from-[#80e656] to-gray-700 flex flex-col justify-center items-center'>
            <div className='bg-black/10 p-3 backdrop-blur-2xl shadow-2xl shadow-black rounded-2xl'>
                <p className='text-center text-4xl font-bold p-3 underline'>3 Step Excecution</p>
                <div className='flex '>
                    <div className='p-4 '>
                        <p className='text-2xl'>Step 1</p>
                        <p className='font-thin'>Fetching the live location of the Candidate</p>
                    </div>
                    <div className='p-4 '>
                        <p className='text-2xl'>Step 2</p>
                        <p className='font-thin'>Feeding the realtime data based on the Geo-location with execution</p>

                    </div>
                    <div className='p-4 '>
                        <p className='text-2xl'>Step 3</p>
                        <p className='font-thin'>Showing of the result with dedicated Plant Name</p>

                    </div>
                </div>
            </div>
            <div className='h-[20vh] relative'></div>
            

            {/* <div className='h-[10vh]'></div> */}

        </div>
    )
}

export default GetStartedSection3