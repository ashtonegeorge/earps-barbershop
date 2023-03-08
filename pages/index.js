import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Map from '@/components/Map';

export default function Home() {
  return (
    <>
      <Head>
        <title>Earp's Barbershop</title>
        <meta name="description" content="Welcome to Earp's Barbershop on Main Street in Everett, PA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/earpslogo.jpg" />
      </Head>
      <>
        <Navbar />
        <div className='pt-48 h-[100vh]'>
          <div>content</div>
          <Map />
        </div>
      </>
    </>
  )
}
