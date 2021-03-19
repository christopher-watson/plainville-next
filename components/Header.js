import React from 'react'
import Head from 'next/head';

const Header = (props) => {
  return (
    <Head>
      <title>Plainville, MA | {props.name}</title>
      <link rel='icon' href='/favicon.ico' />
      {/* <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" /> */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
    </Head>
  )
}

export default Header