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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='main font-libre'>
        
        <Landing />
        <Navbar className='navbar'/>
        
      </div>
    </>
  )
}
