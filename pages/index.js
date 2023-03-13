import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Landing from '@/components/Landing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Earp's Barbershop</title>
        <meta name="description" content="Welcome to Earp's Barbershop on Main Street in Everett, PA." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main font-libre'>
        
        <Landing />
        <Navbar className='navbar'/>
        
      </div>
    </>
  )
}
