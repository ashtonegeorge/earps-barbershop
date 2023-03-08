import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-evenly sticky top-0 bg-stone-700'>
        <img 
            src='/earpslogowhite.png'
            alt=''
            className='w-24 h-24 ml-8'
        />
        <div className='w-full flex justify-end'>
          <h1 className='px-3'>text2</h1>
          <h1 className='px-3'>text3</h1>
          <h1 className='px-3'>text4</h1>
        </div>

    </div>
  )
}

export default Navbar