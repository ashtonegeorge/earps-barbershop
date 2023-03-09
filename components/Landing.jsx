import React from 'react';

import Image from 'next/image';

import Map from './Map';

const Landing = () => {
  return (
    <div className='h-[100vh] flex justify-between z-0 pt-24 bg-stone-900'>
      <div className='flex'>
          <div>
            <Image 
              src='/barberstation.jpg'
              alt='Barber Station'
              width='500'
              height='500'
              className='p-0 m-0'
            />
          </div>
          <div className='text-2xl'>
            <h1>Welcome to Earp's, an old fashioned barber shop with an <br/> old fashioned experience run by Wyatt Pennbaker in his hometown.</h1>
          </div>
      </div>

        
        {/* <Map /> */}
    
    </div>
  )
};

export default Landing;