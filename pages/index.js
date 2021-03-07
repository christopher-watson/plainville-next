import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Plainville, MA</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav>
        {/* <Image 
          src='/wave.svg' 
          layout='responsive'
          width={600}
          height={400}
          priority/> */}
          Plainville.com
      </nav>
      <main>
        <h1 className='title'>
          Welcome to <span className='blue'>Plainville.com</span>
        </h1>

        <img className='tools' src="/tools.png" alt="Toolbox" />

        <p className='description'>
          We're under construction right now. Check back again soon!
        </p>
      </main>

      <footer>
        All Rights Reserved
      </footer>
    </div>
  );
}
