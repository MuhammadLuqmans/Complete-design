import React from 'react'
import Slider from '../Sliders'
import { makeStyles } from '@material-ui/core/styles'
import CardNav from './Nav'
import ProductDet from './ProductDet'
import ProSlider from './ProSlider'
import Services from './Services';
import Frequantly from './Frequantly'
import Banner from './Banner'
import Banner2 from './Banner2'
import SmallCarousel from './cardSlider'
import Reviews from './Reviews'


const myStyles = makeStyles((theme)=>({
  navbar_show:{
    display:'block',
    [theme.breakpoints.down('sm')]:{
      display:'none',
    }
  }
}))

function Product() {
  const classes = myStyles()
  return (
    <div>
    <div className={classes.navbar_show}>
    <CardNav />
    </div>
    <div style={{ maxWidth:'1380px',margin:'auto' }}>
    <ProductDet />
    <Services />
    </div>
    <ProSlider />
    <div style={{ maxWidth:'1380px',margin:'auto' }}>
    <Frequantly />
    </div>
    <Banner />
    <div style={{ maxWidth:'1380px',margin:'auto' }}>
    <SmallCarousel />
    </div>
    <Banner2 />
    <Reviews />
    </div>
  )
}
export default Product