"use client"
import Navbar2 from '@/Components/Navbar2'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RiScrollToBottomFill } from 'react-icons/ri'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog"
import axios, { AxiosError } from 'axios'






const Page = () => {

  const [lat, setlat] = useState<Number | null>(null);
  const [long, setlong] = useState<Number | null>(null);
  const [location, setLocation] = useState<String | null>('');

  const LocationAddressFetching = async () => {
    try {
      // https://cropide-backend.onrender.com/location?latitude=28.6139&longitude=77.2088
      console.log("latitude" + lat);
      console.log("longitude" + long);
      const response = await axios.post(`https://cropide-backend.onrender.com/location?latitude=${lat}&longitude=${long}`);
      if (response.status === 200) {
        console.log(lat);
        console.log(long);
      }
    } catch (error) {
      console.log("Failed to fetch the info");
      if (error instanceof AxiosError) {

      }
    }
  }

  useEffect(() => {
    console.log("This is working...")
    LatlongFetching();
  }, [])

  const LatlongFetching = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setlat(latitude);
          setlong(longitude);
        }, (error) => {
          console.error("Error getting location:", error.message);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

  }
  return (
    <div className='bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center h-screen w-screen '>
      <div className='inset-0 w-screen h-screen absolute backdrop-blur-lg bg-black/40'></div>



      <Navbar2 />



      <section className='absolute top-[15vh] '>
        <div className='flex flex-col justify-center items-center'>
          <div className='w-screen text-center text-xl p-7'>Welcome Tony,</div>
          <div className='mt-10 text-4xl flex flex-col justify-center items-center gap-2'>
            Know your soil, grow the best!
            <p className='flex flex-col justify-center items-center gap-2'>
              We help you choose the perfect crop for your field with <p className='text-6xl font-sans bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>Cropide.</p>
            </p>
          </div>
          <div className='relative top-[10vh]'>Just Click on the "Start" button and let our AI model Give you the best result for your Soil</div>
          <button className='relative top-[18vh] backdrop-blur-2xl shadow-2xl shadow-black bg-black/20 hover:bg-black/40 hover:scale-105 hover:transition-all hover:duration-300  p-4 text-xl rounded-md '>
            <Dialog onOpenChange={LocationAddressFetching}>
              <DialogTrigger>Start the Show</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Full filling your Request</DialogTitle>
                  <DialogDescription>
                    Our AI Modals are ready for helping you by providing which the information based on the Soil
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

          </button>
          <div className='relative top-[26vh] flex flex-col justify-center items-center text-xs'>
            <RiScrollToBottomFill color='white' size={30} className='p-1 animate-bounce' />
            <Dialog >
              <DialogTrigger>
                Click here for understanding the process
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Full filling your Request</DialogTitle>
                  <DialogDescription>
                    Our AI Modals are ready for helping you by providing which the information based on the Soil
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>


      </section>


      {/* displaying the result will be donw using pop up */}

      {/* displaying the process of Selection shown using POP Up */}
    </div>
  )
}

export default Page