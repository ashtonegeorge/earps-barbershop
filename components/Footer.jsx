import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
        <div className='flex justify-between align-middle h-72 bg-stone-800 px-24'>
            <div className='flex'>
                <div className='my-auto'>

                    <Image 
                        src='/earpslogowhite.png'
                        alt="Earp's Barbershop"
                        width='200'
                        height='200'
                        className=''

                    />

                </div>

                <div className='my-auto text-lg text-white'>

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
                        
                    />
                
                </Link>
            </div>
            
        </div>
        <div className='flex h-12 w-[100vw] bg-stone-900 text-white'>
            <p className='my-auto w-1/3 text-center'>Copyright © 2023 Ashton George, All rights reserved.</p>
        </div>
    </div>
    
  )
}

export default Footer