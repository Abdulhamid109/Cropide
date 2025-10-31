'use client'
import Link from 'next/link'
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'





const Navbar2 = () => {

    const router = useRouter();

    const onLogout = async()=>{
        try {
            const response = await axios.get("/api/auth/logout");
            if(response.status===200){
                console.log("Successfully logged out!!");
                setTimeout(()=>{
                    toast.success(response.data.message);
                },500)
                router.push('/');
            }
        } catch (error) {
            console.log("Failed to logout..."+error);
            if(error instanceof AxiosError){
                console.log("Something went wrong");
                toast.error(error.response?.data.error);
            }
        }
    }
    return (
        <section className='z-11 flex justify-center items-center'>
            <nav className='fixed top-1 w-[80vw] list-none flex justify-between items-center h-fit  p-4 rounded-2xl shadow-black backdrop-blur-2xl bg-black/10  shadow-2xl'>
                <Link href={"/home"} className='bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent text-3xl'>Cropide</Link>
                <div className='flex gap-4'>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>My Results</li>
                    <Link href={"/aboutus"} className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>About us</Link>
                    <Link href={"/Contact"} className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>Contact</Link>
                    <Link href={"https://www.youtube.com/watch?v=qpVgidFJhVM"} className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>Soil-Kit demonstration</Link>
                    <li className='hover:underline hover:scale-105 hover:transition-all hover:duration-200'>Profile</li>
                    <li className='hover:underline hover:text-red-600 hover:scale-105 hover:transition-all hover:duration-200 '>
                        <Dialog>
                            <DialogTrigger>Logout</DialogTrigger>
                            <DialogContent onInteractOutside={(e) => e.preventDefault()} className="p-6 max-w-lg [&>button]:hidden">
                                <DialogTitle><p className='text-center'>Are you sure you want to logout?</p></DialogTitle>
                                <DialogFooter>
                                    <div className='flex justify-center items-center gap-2 w-full'>
                                        <button className='text-xs rounded-md p-2 hover:bg-gray-900  bg-gray-800'>
                                            <DialogClose>Cancel</DialogClose>
                                        </button>
                                    <button onClick={onLogout} className='text-xs rounded-md p-2 hover:bg-red-700 bg-red-400'>
                                        Logout
                                    </button>
                                    </div>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </li>
                </div>
            </nav>
        </section>
    )
}

export default Navbar2