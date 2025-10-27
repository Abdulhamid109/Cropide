import React from 'react'

const GetStartedSection4 = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-t from-[#80e656] to-gray-700 flex flex-col justify-center items-center'>
        <div className="bg-white/10 mt-5 p-6 flex flex-col w-[40vw] backdrop-blur-xl shadow-lg shadow-black/40 rounded-2xl border border-white/10">
                <h2 className="text-3xl font-semibold text-white mb-5 text-center">Contact Us</h2>

                <input
                    type="text"
                    placeholder="Enter your Name"
                    className="p-3 mb-3 rounded-xl bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />

                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="p-3 mb-3 rounded-xl bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />

                <input
                    type="tel"
                    placeholder="Enter your Phone No"
                    className="p-3 mb-4 rounded-xl bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />

                <textarea
                    placeholder="Write your message..."
                    className="p-3 mb-5 rounded-xl bg-white/15 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-green-400 transition h-24 resize-none"
                />

                <button className="bg-gradient-to-r from-green-500 to-gray-500 text-white py-3 rounded-xl shadow-lg hover:scale-105 transition font-medium">
                    Submit
                </button>
            </div>
    </div>
  )
}

export default GetStartedSection4