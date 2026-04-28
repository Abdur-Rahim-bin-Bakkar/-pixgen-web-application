import { Button } from '@heroui/react';
import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-xl  shadow-2xl">
            <div className="p-10 space-y-5 text-white">
                <h1 className=' text-3xl md:text-5xl font-bold'>Turn Ideas into Stunning AI Art</h1>
                <p className='font-bold  text-lg'>Generate high-quality images from simple text prompts.

                </p>

                <div className="flex gap-5">
                    <Button className={'bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-white'}>Generate Now</Button>
                    <Button variant='outline' className={'text-white'}>View Pricing</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;