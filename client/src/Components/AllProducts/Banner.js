import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'


const myStyles = makeStyles((theme)=>({
    main_container:{
        width:'100%',
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'400px',
        display:'flex',
        alignItems:'center'
    }
}))

function Banner() {
    const classes = myStyles()
  return (
    <div className={classes.main_container}>
    <Grid item xs={12} >
    <h1>luqman</h1>
    <img src="./assets/Allproducts/logo.svg"  alt="banner" />
    </Grid>
    </div>
  )
}

export default Banner