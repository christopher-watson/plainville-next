import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='index-container'>
      <Header name='Home' />
      <nav id="nav">
        <div className="nav-left">
          <Link href="/"><a className="nav-link">Home</a></Link>
          <Link href="/inside"><a className="nav-link">Inside Plainville</a></Link>
          <Link href="/departments"><a className="nav-link">Departments</a></Link>
          <Link href="/worship"><a className="nav-link">Places of Worship & Organizations</a></Link>
          <Link href="/schools"><a className="nav-link">Schools</a></Link>
        </div>
        <div className="nav-right">
          <Image src='/mass.png' width={267} height={162} layout='intrinsic' />
        </div>
      </nav>
      <main>
        <h1 className="display-4 fst-italic welcome">
          Welcome to Plainville, MA!
        </h1>
      </main>

      <footer>
        All Rights Reserved
      </footer>
    </div>
  );
}
