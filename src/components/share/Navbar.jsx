'use client'
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'
import Link from 'next/link';
import { Button } from '@heroui/react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const path = usePathname()
    return (
        <div className='flex justify-between h-15 items-center px-5'>
            <div className="flex gap-2">
                <Image src={logo} alt='logo' height={30} width={30}/>
                <h3 className='font-bold text-lg'>pixgen.</h3>
            </div>

            <div className="flex gap-5">
                <Link className={`font-medium duration-1000 ${path === '/' && 'border-b pb-1 border-success'}`} href={'/'}>Home</Link>
                <Link className={`font-medium duration-1000 ${path === '/allphoto' && 'border-b pb-1 border-success'}`} href={'/allphoto'}>All Photo</Link>
                
            </div>

            <div className="flex gap-3">
                <Link className='font-medium ' href={'/signin'}><Button>Sign IN</Button></Link>
                <Link className='font-medium' href={'/signup'}><Button className={'bg-indigo-500'}>Sign UP</Button></Link>
            </div>
            
        </div>
    );
};

export default Navbar;