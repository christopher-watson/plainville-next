import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='index-container'>
      <Header name='Home' />
      <nav id="nav">
        <div className="list">
          <Link href="/"><a className="nav-link top">Home</a></Link>
          <Link href="/inside"><a className="nav-link top">Inside Plainville</a></Link>
          <Link href="/departments"><a className="nav-link top">Departments</a></Link>
          <Link href="/worship"><a className="nav-link bottom1">Places of Worship & Organizations</a></Link>
          <Link href="/schools"><a className="nav-link bottom2">Schools</a></Link>
        </div>
        <div className="logo">
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
