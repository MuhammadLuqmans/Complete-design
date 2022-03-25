import React, { useState } from 'react'
import { Typography, Button, Modal, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme) => ({
    banner_product: {
        marginTop:'50px',
        backgroundImage: 'url(./assets/Product/banner2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    color_section:{
        backgroundColor:'#0a0a0a59',
        padding: '5% 3%',
        color:'#fff',
        textAlign: 'center'
    },
    Banner_text:{
        fontFamily:'Roboto, sans-serif',
        fontWeight:'bold',
        fontSize:'20px',
        [theme.breakpoints.down('sm')]:{
            fontSize:'16px',
            lineHeight:'26px',
        }
    },
    Banner_title:{
        fontSize:'48px',
        fontWeight:'bold',
        fontFamily:'Roboto Slab',
        lineHeight:'62px',
        [theme.breakpoints.down('sm')]:{
            fontSize:'28px',
            lineHeight:'36px',
        }
    },
    banner_btn:{
        background:'red !important',
        color:'#fff',
        fontWeight:'bold',
        fontFamily:'Roboto, sans-serif',
        marginTop:'30px',
        padding:'10px 25px',
    },
    myNewBanner:{
        backgroundImage: 'url(./assets/Product/banner3.png)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        margin:'60px 0px',
        textAlign:'center',
    },
    banner_box:{
        backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
    },
    content_padding:{
        padding:'38px 30px 25px',
    },
    banner_content:{
        color:'#fff',
        fontFamily:'Roboto slab',
        fontWeight:'bold',
        fontSize:'32px',
        marginTop:'4px',
        lineHeight:'48px',
        wordBreak:'break-word'
    }
}))

const Banner2 = () => {

    const classes = myStyles()
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid item xs={12} className={classes.banner_product}>
                <Box className={classes.color_section}>
                    <p className={classes.Banner_text}>NEED SOME GRILLING INSPIRATION?</p>
                    <Typography className={classes.Banner_title}>The Possibilities<br /> Are Endless With<br /> Our Top Recipes</Typography>
                        <Button variant='contained' className={classes.banner_btn}>More Info</Button>
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.myNewBanner}>
            <Box className={classes.banner_box}>
            <Box className={classes.content_padding}>
            <img src='./assets/Product/comments.svg' className={classes.banner_img} alt="banner" />
            <Typography className={classes.banner_content}>Hear From Other Grillers</Typography>
            </Box>
            </Box>
            </Grid>
        </div>
    )
}

export default Banner2