"use client"
import axios, { AxiosError } from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { LuArrowBigRight } from 'react-icons/lu'



interface SignupData {
    name: string;
    email: string;
    password: string;
    confirmPassword:string;
}
const Page = () => {

    const [data, setData] = useState<SignupData>({
        name: "",
        email: "",
        password: "",
        confirmPassword:""
    });
    // const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    
    const router = useRouter();

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup",data);
            if(response.status==200){
                toast.success(response.data.message);
                router.push('/login');
            }
        } catch (error) {
            console.log("Something went wrong..." + error);
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.error);
            }
        }finally{
            setLoading(false);
        }
    }
    const [error, setError] = useState<string>('');
    // const [disabledd, setdisabled] = useState<boolean>(false);
    return (
        <div className='bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center h-screen w-screen flex justify-center items-center'>

            <div className='inset-0 w-screen h-screen absolute backdrop-blur-lg bg-black/30'></div>

            <div className='rounded-md relative backdrop-blur-lg shadow-2xl shadow-black bg-black/40 p-5 flex flex-col justify-center items-center'>
                <div className='text-6xl m-2 text-center bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>Cropide</div>
                <div className='p-2 text-2xl mt-5 mb-4'>Create your Account!</div>
                <form onSubmit={handleSubmit} className=' flex flex-col justify-center items-center gap-2 p-2 w-[30vw]'>
                    <input type="text"
                        value={data!.name}
                        onChange={(e) => setData({ ...data!, name: e.target.value! })}
                        required placeholder='Enter your name' className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]' />
                    <input type="email"
                        value={data!.email}
                        onChange={(e) => setData({ ...data!, email: e.target.value! })}
                        required placeholder='Enter your Email' className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]' />
                    <input type="password"
                        required
                        value={data!.password}
                        onChange={(e) => setData({ ...data!, password: e.target.value! })}
                        placeholder='Enter your Password' className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]' />
                    <input type="password"
                        value={data?.confirmPassword}
                        onChange={(e) => {
                            const newConfirmPassword = e.target.value;
                            setData({...data!,confirmPassword:newConfirmPassword});

                            if (newConfirmPassword === data?.password) {
                                setError('Password match');
                                // setdisabled(false);
                            } else {
                                setError('Password does not match');
                                // setdisabled(true);
                            }
                        }}
                        required placeholder='Confirm Password' className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg rounded-md p-2 w-[25vw]' />
                    <p className='flex justify-start items-center text-red-400 '>{error}</p>
                    <button
                    disabled={loading}
                        type="submit" className='focus:outline focus:no-underline backdrop-blur-lg shadow-lg bg-black/40 hover:bg-black/50 rounded-md p-2 w-[25vw]' >
                            {loading?"loading...":"Signup"}
                        </button>
                </form>
                <div className='p-2'>
                    or
                </div>
                <div className='flex gap-1'>
                    Already have an account? <Link href={"/login"} className='text-blue-400 flex justify-center items-center'>Login <LuArrowBigRight /></Link>
                </div>

            </div>

        </div>
    )
}

export default Page