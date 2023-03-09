import React from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY,
    });
    
    if (!isLoaded) return <div>loading...</div>;
    
    return (

        <div className='flex h-[75vh] w-full bg-stone-700 justify-evenly'>
            <div className='my-auto'>
                <div className='border-2 border-black h-[25.3rem]'>
                    <GoogleMap 
                        mapContainerClassName='map-container' 
                        zoom={19} 
                        center={{ lat: 40.011810, lng: -78.369540}}
                        options={{streetViewControl: false}}
                    >
                        {<Marker position={{ lat: 40.012110, lng: -78.370940}}/>}

                    </GoogleMap>
                </div>
                <h1 className='text-center text-white'>Visit at 212 E Main St, Everett, PA 15537</h1>
            </div>
            <div className='w-1/3 text-white text-xl my-auto'>
                <h2>We are located on East Main Street in Downtown Everett, PA. Find us just past the Truist, OIP intersection on the right. Street parking is available out front with overflow parking in the lot behind the barbershop.</h2>
            </div>

        </div>
        
  )
}

export default Map