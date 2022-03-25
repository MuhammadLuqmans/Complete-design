import { makeStyles, Typography,Grid } from '@material-ui/core'
import React from 'react'
import Carousel from '../Sliders'

const myStyles = makeStyles((theme)=>({
    Slider_title:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'left',
        fontSize:'46px',
        fontFamily:'Roboto Slab',
    },
    ProSlider_wrapper:{
        padding:'6% 5%',
        background:'#000',
        height:'100%',
        display:'flex',
        alignItems:'center',
    },
    main_Grid:{
        margin:'auto',
        alignItems:'center',
    }
}))

function ProSlider() {
    const classes =  myStyles()
  return (
    <div className={classes.ProSlider_wrapper}>
    <Grid item container xs={12} className={classes.main_Grid}>
    <Grid item xs={12} sm={12} md={3} lg={3} >
    <Typography className={classes.Slider_title}>Explore the<br /> GENESIS<br /> E-435</Typography>
    </Grid>
    <Grid item xs={12} sm={12} md={9} lg={9} >
    <Carousel />
    </Grid>
    </Grid>
    </div>
  )
}

export default ProSlider