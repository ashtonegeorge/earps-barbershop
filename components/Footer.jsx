import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between align-middle h-32 md:h-72 bg-stone-800 md:px-24 px-0'>
            <div className='flex'>
                <div className='my-auto'>

                    <Image 
                        src='/earpslogowhite.png'
                        alt="Earp's Barbershop"
                        width='100'
                        height='100'
                        className='w-3/4 md:w-full ml-2 md:ml-0'
                    />

                </div>

                <div className='my-auto w-1/2 text-xs sm:text-sm md:text-lg text-white'>

                    <h2>212 E Main St</h2>
                    <h2>Everett, PA 15537</h2>
                    <h2>(814) 585-0221</h2>

                </div>
            </div>
            <div className='my-auto'>
                <Link
                    href='https://www.facebook.com/EarpsBarberShop'
                >
                    <Image 
                        src='/fb.jpg'
                        alt='Check out our Facebook'
                        width='100'
                        height='100'
                        className='w-1/2 md:w-full'
                    />
                
                </Link>
            </div>
            
        </div>
        <div className='flex h-12 w-[100vw] bg-stone-900 text-white'>
            <p className='my-auto ml-[5vw] w-full text-left text-xs md:text-sm lg:text-md'>Copyright © 2023 Ashton George, All rights reserved.</p>
        </div>
    </div>
    
  )
}

export default Footer