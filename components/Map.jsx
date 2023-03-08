import React from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Map = () => {
  
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY,
    });
    
    if (!isLoaded) return <div>loading...</div>;
    return (
        <div className='flex h-[50vh]'>
            <GoogleMap 
                mapContainerClassName='map-container' 
                zoom={19} 
                center={{ lat: 40.011810, lng: -78.369540}} 
            >
                {<Marker position={{ lat: 40.012110, lng: -78.370940}}/>}

            </GoogleMap>
            <h1 className='block'>Visit at 212 E Main St, Everett, PA 15537</h1>
        </div>
  )
}

export default Map