import { Typography, Grid, makeStyles } from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import React from 'react'

const myStyles = makeStyles((theme) => ({
    Blog_title: {
        color: '#000',
        fontWeight: '600',
        fontFamily: 'Roboto Slab',
        marginBottom:'20px',
    },
    wrapper: {
        maxWidth: '1380px',
        padding: '20px 4%',
        margin: 'auto',
        margin:'50px 0px',
    },
    bolg_text:{
        fontFamily:'Roboto Slab',
        fontWeight:400,
        lineHeight:'28px',
    }
}))

function Services() {
    const classes = myStyles()
    return (
        <div>
            <Grid item container xs={12} className={classes.wrapper}>
                <img src="./assets/Product/car.svg" alt="car" style={{ marginRight: '10px',marginBottom:'20px'}} />
                <Typography className={classes.Blog_title}>Free Shipping & Returns on Weber.com Orders $50+</Typography>
                <Typography className={classes.bolg_text}>Free Standard Ground shipping on small parcels and grills 70 lbs. via FedEx, with delivery within 5-8 business days, expedited options available. Free 30 day returns.<span style={{ fontWeight:'400',color:'gray' }}> Shipping Information & Return Policy</span></Typography>
            </Grid>
        </div>
    )
}

export default Services