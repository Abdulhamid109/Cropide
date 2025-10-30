"use client"
import axios, { AxiosError, AxiosResponse } from 'axios'
// import { ArrowBigRightDash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { LuArrowBigRight } from 'react-icons/lu'


interface data {
  email: string,
  password: string
}
const Page = () => {
  const [data, setData] = useState<data | null>({
    email: "",
    password: ""
  });

  const [loading,setLoading] = useState<boolean>(false);
  const router = useRouter();


  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login",data);
      console.log("data"+data);
      if(response.status===200){
        console.log("Successfully logged in..");
        toast.success(response.data.message);
        router.push('/home')
      }
    } catch (error) {
      console.log("Failed to perform the action"+error);
      if(error instanceof AxiosError){
        toast.error(error.response?.data.error)
      }
    //   toast.error("something went wrong... try again later");
    }finally{
        setLoading(false)
    }
  }


  return (
    <div className='bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-center items-center'>

      <div className='inset-0 w-screen h-screen absolute backdrop-blur-lg bg-black/30'></div>

      <div className='rounded-md relative backdrop-blur-lg shadow-2xl shadow-black bg-black/40 p-5 flex flex-col justify-center items-center'>
        <div className='text-6xl m-2 text-center bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>Cropide</div>
        <div className='p-2 text-2xl mt-5 mb-4'>Welcome Back !!</div>
        <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center gap-2 p-2 w-[30vw]'>
          <input
            type="email"
            required
            placeholder='Enter your Email'
            value={data!.email}
            onChange={(e) => setData({ ...data!, email: e.target.value })}
            // onInvalid={(e) => {
            //   e.currentTarget.setCustomValidity("Please enter the valid email")
            // }}
            // onInput={(e) => {
            //   e.currentTarget.setCustomValidity("ok");
            // }}
            className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]' />
          <input
            type="password"
            required
            value={data!.password}
            onChange={(e) => setData({ ...data!, password: e.target.value })}
            placeholder='Enter your Password'
            className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]'
            
          />
          <button
          type="submit" 
          className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg bg-black/40 hover:bg-black/50 rounded-md p-2 w-[25vw]' >
            {loading?"loading...":"Login"}
          </button>
        </form>
        <div className='p-2'>
          or
        </div>
        <div className='flex gap-1'>
          Don&apos;t have an account? <Link href={"/signup"} className='text-blue-400 flex justify-center items-center'>Signup <LuArrowBigRight /></Link>
        </div>
      </div>

    </div>
  )
}

export default Page