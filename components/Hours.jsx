import React from 'react';
import Image from 'next/image';

const Hours = () => {
  return (
    <div id='hours' style={{backgroundImage: `url(/barberpolebglg.jpg)`}}>

        <div className='h-[40vh] md:h-[50vh] block md:flex justify-evenly text-white w-full z-1'>
            
            <div className='w-3/4 md:w-1/4 text-sm md:text-xl my-8 md:my-auto mx-auto md:mx-0'>
                <h2>Hours are subject to change, notices are posted on our Facebook page. It can be found at the bottom of the site. Give us a like and let us know how we did!</h2>
            </div>            
            
            <div className='w-3/4 md:w-2/5 my-8 md:my-auto mx-auto md:mx-0'>
                <h1 className='md:text-xl lg:text-3xl xl:text-4xl'>Hours</h1>
                <div className='grid grid-cols-2 grid-rows-7 w-full text-xs md:text-sm lg:text-lg xl:text-2xl border border-black bg-stone-700 h-[60%]' >
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