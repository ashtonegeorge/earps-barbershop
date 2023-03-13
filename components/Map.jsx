import React from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY,
    });
    
    if (!isLoaded) return <div>loading...</div>;
    
    return (

        <div className='block md:flex h-[60vh] md:h-[50vh] w-full bg-stone-700 justify-evenly' id='map'>
            <div className='my-8 md:my-auto w-full md:w-1/4'>
                <div className='lg:h-auto'>
                    <GoogleMap 
                        mapContainerClassName='map-container' 
                        zoom={17} 
                        center={{ lat: 40.011810, lng: -78.369540}}
                        options={{streetViewControl: false, fullscreenControl: false, mapTypeControl: false}}
                    >
                        {<Marker position={{ lat: 40.012110, lng: -78.370940}}/>}

                    </GoogleMap>
                </div>
                <h1 className='text-xs md:text-md text-center text-white'>Visit at 212 E Main St, Everett, PA 15537</h1>
            </div>
            <div className='my-8 md:my-auto mx-auto md:mx-0 w-3/4 md:w-1/3 text-white text-sm md:text-md lg:text-xl'>
                <h2>We are located on East Main Street in Downtown Everett, PA. Find us just east of the Truist, OIP intersection on the right. Street parking is available out front with overflow parking in the lot behind the barbershop.</h2>
            </div>

        </div>
        
  )
}

export default Map