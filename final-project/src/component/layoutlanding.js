
import Navbar from './navbar'
import PreviousMap from 'postcss/lib/previous-map'
import React from 'react'
import Footer from './footer'

const LayoutLanding = (props) => {
  return(
    <>
<Navbar/>
{props.children}
<Footer/>
    </>
  )
}

export default LayoutLanding 