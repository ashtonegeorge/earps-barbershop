import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full h-16 fixed left-0 top-0 bg-stone-900'>
        <div className='flex justify-center align-middle text-white text-xl'>
            <Link href='/' className='pt-4 px-4'>Home</Link>
            <Link href='/' className='pt-4 px-4'>Gallery</Link>
            <Image 
                src='/earpslogoblue.png'
                alt=''
                className='w-32 h-28 self-center top-0 mx-8'
                width='200'
                height='200'
            />              
            <Link href='#hours' className='pt-4 px-4'>Hours</Link>
            <Link href='#map' className='pt-4 px-4'>Map</Link>
        </div>
        

    </div>
  )
}

export default Navbar