import React from 'react'
import Link from 'next/link';

const Layout = (props) => {
  return (
    <>
      <div className="nav-bg">
        <nav id="layout-nav">
          <Link href="/"><a className="nav-link">Home</a></Link>
          <Link href="/inside"><a className={props.page == 'inside' ? "nav-link current-page" : "nav-link"}>Inside Plainville</a></Link>
          <Link href="/departments"><a className={props.page == 'departments' ? "nav-link current-page" : "nav-link"}>Departments</a></Link>
          <Link href="/worship"><a className={props.page == 'worship' ? "nav-link current-page" : "nav-link"}>Places of Worship & Organizations</a></Link>
          <Link href="/schools"><a className={props.page == 'schools' ? "nav-link current-page" : "nav-link"}>Schools</a></Link>
        </nav>
      </div>
      <main>
        {props.children}
      </main>
      <footer>
        All Rights Reserved
      </footer>
    </>
  )
}

export default Layout
