import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import Navigation from './navigation/Navigation'
import B1 from './baitap/b1/B1'
import B2 from './baitap/b2/B2'
import B3 from './baitap/b3/B3'
import B5 from './baitap/b5/B5'
import B6 from './baitap/b6/B6'
import B7 from './baitap/b7/B7'
import B8 from './baitap/b8/B8'

export default function page() {
  return (
    <div className='p-2'>
      {/* <Header></Header>
      <Main></Main>
      <Footer></Footer>
      <Navigation></Navigation> */}
      <B1></B1>
      <h1>bài 2</h1>
      <B2></B2>
      <h1>bài 3</h1>
      <B3></B3>
      <h1>bài 5</h1>
      <B5></B5>
      <h1>bài 6</h1>
      <B6></B6>
      <h1>bài 7</h1>
      <B7></B7>
      <h1>bài 8</h1>
      <B8></B8>
    </div>
  )
}