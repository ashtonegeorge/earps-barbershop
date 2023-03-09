import React from 'react';

import Image from 'next/image';

import Hours from './Hours';
import Map from './Map';
import Footer from './Footer';

const Landing = () => {
  return (
    <div className='z-0 overflow-x-hidden divide-y-4 divide-x-0 divide-slate-700' >

      <div className='h-[90vh] bg-stone-800 pt-16 '>

        <div className='flex w-full'>
          <Image
            src='/streetview.jpg'
            alt=''
            width='1000'
            height='200'
            className='w-[100vw]'
          />
        </div>

        <div className='flex text-stone-200 justify-evenly h-64 '>

          <div className='text-4xl my-auto w-1/4'>
            <h1>Your Hometown Barber</h1>
          </div>

          <div className='text-xl my-auto w-1/2'>
              <h1>Welcome to Earp's, an old fashioned barber shop with an <br/> old fashioned experience, run by Wyatt Pennbaker in his hometown. Next time you're due for a trip to the barber, come and learn why Earp's is 2022's voted "Best of the Best" barber by readers of the Bedford Gazette.</h1>
          </div>

        </div>

      </div>

      <Hours />

      <Map />
      
      <Footer />
                  

      
    
    </div>
  )
};

export default Landing;