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
          <Link href="#nav">Home</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#visit">Visit Plainville</Link>
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
        <Card
          src='/CCC.jpg'
          id='contact'
        // href='mailto:clintoncrocker@gmail.com'
        // atext='Click Here to Contact'
        >
          <h3 className='script blue'>Clinton C Crocker</h3>
          <ul>
            <li>Justice of the Peace</li>
            <li>Notary</li>
            <li>Constable</li>
          </ul>
          508-819-2100
          <br />
          <div className="mt-4 bottom">
            <a className='hover-link pink' href="mailto:clintoncrocker@gmail.com">Click Here to Contact</a>
          </div>
        </Card>

        <Card src='/map.png' left id='visit'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
        <br />
          <div className="mt-4">
            <a className='hover-link pink' href="https://www.google.com/maps/dir//Plainville,+MA/@42.0149388,-71.3692208,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89e46680f5d1b6b7:0xa5cdad2cf8538839!2m2!1d-71.3328331!2d42.0042655!3e0">Click Here to Visit!</a>

          </div>
        </Card>
      </main>

      <footer className='bold'>
        Plainville.com | All Rights Reserved
      </footer>
    </div>
  );
}
