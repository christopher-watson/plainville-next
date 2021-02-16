import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Plainville, MA</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
        Built by
        <a
          href='https://christopherwatson.co'
          target='_blank'
          rel='noopener noreferrer'>
          : Christopher Watson
        </a>
      </footer>
    </div>
  );
}
