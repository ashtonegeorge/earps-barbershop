import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='w-full h-16 fixed left-0 top-0 bg-stone-900'>
        <div className='flex justify-center align-middle text-white text-xl'>
            <h1 className='pt-4 px-4'>Home</h1>
            <h1 className='pt-4 px-4'>Gallery</h1>
            <Image 
                src='/earpslogoblue.png'
                alt=''
                className='w-32 h-28 self-center top-0 mx-8'
                width='200'
                height='200'
            />              
            <h1 className='pt-4 px-4'>Hours</h1>
            <h1 className='pt-4 px-4'>Map</h1>
        </div>
        

    </div>
  )
}

export default Navbar