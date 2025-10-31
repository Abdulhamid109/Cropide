"use client"
import Navbar2 from '@/Components/Navbar2'
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog'
import { useRouter } from 'next/navigation'
import axios, { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { PersonStanding } from 'lucide-react'

const Page = () => {
    const router = useRouter();
    const [loading,setLoading] = useState<boolean>(false);
    const [name,setName] = useState<String|null>('');
    const [email,setEmail] = useState<String|null>('');

    const onLogout = async () => {
        try {
            const response = await axios.get("/api/auth/logout");
            if (response.status === 200) {
                console.log("Successfully logged out!!");
                setTimeout(() => {
                    toast.success(response.data.message);
                }, 500)
                router.push('/');
            }
        } catch (error) {
            console.log("Failed to logout..." + error);
            if (error instanceof AxiosError) {
                console.log("Something went wrong");
                toast.error(error.response?.data.error);
            }
        }
    }

    const onDelete = async() => {
        try {
            const response = await axios.delete('/api/pages/delete');
            if(response.status===200){
                console.log("Successfully deleted the account");
                setTimeout(()=>{
                    toast.success(response.data.message);
                },500)
                router.push('/');
            }
        } catch (error) {
            console.log("Delete account failed..." + error);
            if (error instanceof AxiosError) {
                console.log("Something went wrong");
                toast.error(error.response?.data.error);
            }
        }
    }


    const ProfileData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/pages/me");
      if (response.status === 200) {
        console.log("Name" + response.data.user.name);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
      }
    } catch (error) {
      console.log("Something went wrong..failed to predict" + error);
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    const fetchProfileData =async()=>{
        await ProfileData();
    } 
    fetchProfileData();
  },[])

    return (
        <div className='relative h-screen w-screen flex flex-col justify-center items-center'>
            <div
                className='fixed inset-0 bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center -z-10'
            />
            <div className='fixed inset-0 backdrop-blur-lg bg-black/40 -z-10' />
            <Navbar2 />
            <div className='backdrop-blur-2xl shadow-2xl shadow-black bg-black/10 rounded-xl p-8 border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20'>

                <div className='flex flex-col justify-center items-center gap-4'>
                    <Avatar className='w-[10vw] h-[18vh] ring-2 ring-white/20 transition-transform duration-300 hover:scale-105'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className='bg-black/30 text-white'><PersonStanding/></AvatarFallback>
                    </Avatar>
                    <div className='text-center'>
                        <div className='font-medium text-3xl text-white tracking-wide'>{loading?"loading...":name}</div>
                        <div className='font-light text-xl text-white/80 mt-1'>{loading?"loading...":email}</div>
                    </div>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <button className='backdrop-blur-2xl shadow-2xl shadow-black bg-black/40 rounded-md p-2 w-full'>
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
                        </button>
                        <button className='backdrop-blur-2xl shadow-2xl shadow-black bg-black/40 p-2 rounded-md w-full'>
                            <Dialog>
                                <DialogTrigger>Delete Your Account</DialogTrigger>
                                <DialogContent onInteractOutside={(e) => e.preventDefault()} className="p-6 max-w-lg [&>button]:hidden">
                                    <DialogHeader ><div className='w-full text-center font-bold'>Delete Your Account?</div></DialogHeader>
                                    <DialogTitle><p className='text-center font-thin'>Are you sure you want to Delete your account?</p></DialogTitle>
                                    <DialogFooter>
                                        <div className='flex justify-center items-center gap-2 w-full'>
                                            <button className='text-xs rounded-md p-2 hover:bg-gray-900  bg-gray-800'>
                                                <DialogClose>Cancel</DialogClose>
                                            </button>
                                            <button onClick={onDelete} className='text-xs rounded-md p-2 hover:bg-red-700 bg-red-400'>
                                                Delete
                                            </button>
                                        </div>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
