import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Card from '../components/Card';

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
          <div className="fst-italic welcome">
            Welcome to Plainville, MA!
          </div>
          <Image src='/mass.png' width={267} height={162} layout='intrinsic' />
        </div>
      </nav>
      <main>
        <div className="blockquote display-text">
          <span className="bold">Plainville, Massachusetts</span> was settled in 1661, at which time it was part of the town of <span className="bold">Dedham</span>. It became part of Wrentham in 1673, and was incorporated as a separate town in 1905. It is the youngest town in Norfolk County.
        </div>
        <Card src='/map.png'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad tempore blanditiis? Aliquam accusamus magnam alias rerum delectus distinctio quasi.
        <br />
          <div className="mt-4">
            <a href="https://www.google.com/maps/dir//Plainville,+MA/@42.0149388,-71.3692208,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89e46680f5d1b6b7:0xa5cdad2cf8538839!2m2!1d-71.3328331!2d42.0042655!3e0">Click Here to Visit!</a>

          </div>
        </Card>

        <Card src='/map.png' left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad tempore blanditiis? Aliquam accusamus magnam alias rerum delectus distinctio quasi.
        <br />
          <div className="mt-4">
            <a href="https://www.google.com/maps/dir//Plainville,+MA/@42.0149388,-71.3692208,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89e46680f5d1b6b7:0xa5cdad2cf8538839!2m2!1d-71.3328331!2d42.0042655!3e0">Click Here to Visit!</a>

          </div>
        </Card>
      </main>

      <footer>
        All Rights Reserved
      </footer>
    </div>
  );
}
