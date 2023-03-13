import React from 'react';

import Image from 'next/image';

import Hours from './Hours';
import Map from './Map';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className='z-0 overflow-x-hidden divide-y-4 divide-x-0 divide-slate-700' >

      <div className='h-[40vh] md:h-[50vh] lg:h-[65vh] xl:h-[85vh] bg-stone-800 pt-12 md:pt-16'>

        <div className='flex w-full'>
          <Image
            src='/streetview.jpg'
            alt=''
            width='1000'
            height='200'
            className='w-[100vw]'
          />
        </div>

        <div className='block md:flex text-stone-200 justify-evenly h-1/2 '>

          <div className='md:text-xl lg:text-2xl xl:text-4xl my-4 md:my-auto mx-auto md:mx-0 w-3/4 md:w-1/3 text-center md:text-left'>
            <h1 className='font-bold'>Your Hometown Barber</h1>
          </div>

          <div className='text-xs md:text-sm lg:text-lg xl:text-xl my-4 md:my-auto mx-auto md:mx-0 w-3/4 md:w-1/2'>
              <h1><p className='inline text-sm md:text-md lg:text-xl xl:text-2xl'>Welcome</p> to Earp's, an old fashioned barbershop with an old fashioned experience, run by Wyatt Pennabaker in his hometown. Next time you're due for a trip to the barber, come and learn why Earp's is 2022's voted "Best of the Best" barber by readers of the Bedford Gazette.</h1>
          </div>

        </div>

      </div>

      <Hours id='hours'/>

      <Map id='map'/>
      
      <Footer />
                  

      
    
    </div>
  )
};

export default Landing;