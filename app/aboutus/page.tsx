"use client"
import Navbar2 from '@/Components/Navbar2'

const Aboutus = () => {
    return (
        <div className='relative h-screen w-screen overflow-auto'>
           
            <div
                className='fixed inset-0 bg-[url(/bgimage.jpg)] bg-cover bg-no-repeat bg-center -z-10'
            />
            
            <div className='fixed inset-0 backdrop-blur-lg bg-black/40 -z-10' />
            {/* Scrollable content */}
            <div className='relative z-10 h-screen w-screen overflow-y-auto'>
                <Navbar2 />
                <div className='flex flex-col justify-center items-center px-4 py-20 min-h-screen space-y-4'>
                    <h1 className='text-5xl p-5 text-center md:text-4xl font-bold text-white'>Revolutionizing Agriculture with AI</h1>
                    <div className='max-w-2xl'>
                        <h3 className='text-lg md:text-xl text-white'>
                            At <span className='font-sans bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>Cropide</span>, we believe in the power of technology to transform agriculture. Our mission is to empower farmers, agronomists, and agricultural enthusiasts with intelligent, data-driven solutions that simplify decision-making and maximize yields.
                        </h3>
                    </div>
                    <div className='max-w-2xl space-y-4'>
                        <p className='text-white text-base md:text-lg'>
                            <strong>How It Works</strong><br/>
                            With just a click, our AI-powered platform fetches your location and analyzes local soil and environmental conditions. Our advanced AI models assess key parameters like N, P, K, pH, temperature, and more to predict the most suitable crops for your soil. We then provide comprehensive crop insights, including historical background and current market trends, so you can make informed choices.
                        </p>
                        <p className='text-white text-base md:text-lg'>
                            <strong>Why Choose Us?</strong><br/>
                            We combine cutting-edge AI with real-world agricultural expertise to deliver actionable insights. Our goal is to make farming smarter, more sustainable, and more profitable—one click at a time.
                        </p>
                        <p className='text-white text-base md:text-lg'>
                            <strong>Join the Future of Farming</strong><br/>
                            Whether you’re a seasoned farmer or just starting out, <span className='font-sans bg-gradient-to-t from-green-400 font-bold to-white bg-clip-text text-transparent'>Cropide</span> is your trusted partner in cultivating success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;
