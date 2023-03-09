import React from 'react';
import Image from 'next/image';

const Hours = () => {
  return (
    <div>
        <div className='absolute w-full z-0'>
            <Image
            
                src='/barberpolebglg.jpg'
                alt=''
                width='1000'
                height='200'
                className='w-full h-full'
            
            />
        </div>
        <div className='h-[50vh] flex justify-evenly text-white w-full z-1'>
            
            <div className='w-1/2 text-xl my-auto'>
                <h2>Hours are subject to change, notices are posted on our Facebook page. It can be found at the bottom of the site. Give us a like and let us know how we did!</h2>
            </div>            
            
            <div className='w-1/3 my-auto'>
                <h1 className='text-4xl'>Hours</h1>
                <div className='grid grid-cols-2 grid-rows-7 w-full text-2xl border border-black bg-stone-700 h-[60%]' >
                    <div className='divide-y-2 divide-black'>
                        <h2>Monday</h2>
                        <h2>Tuesday</h2>
                        <h2>Wednesday</h2>
                        <h2>Thursday</h2>
                        <h2>Friday</h2>
                        <h2>Saturday</h2>
                        <h2>Sunday</h2>
                    </div>
                    <div className='divide-y-2 divide-black'>
                        <h2>CLOSED</h2>
                        <h2>11:00 AM - 5:00 PM</h2>
                        <h2>9:00 AM - 3:00 PM</h2>
                        <h2>9:00 AM - 5:00 PM</h2>
                        <h2>9:00 AM - 5:00 PM</h2>
                        <h2>8:00 AM - 12:00 PM</h2>
                        <h2>CLOSED</h2>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hours