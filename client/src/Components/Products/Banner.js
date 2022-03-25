import React, { useState } from 'react'
import { Typography, Button, Modal, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme) => ({
    banner_product: {
        backgroundImage: 'url(./assets/Product/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    color_section:{
        backgroundColor:'#0a0a0a59',
        padding: '5% 3%',
        color:'#fff',
        textAlign: 'center'
    },
    model: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height:'60%',
        backgroundColor: '#000',
        boxShadow: 24,
        color: '#fff',
        [theme.breakpoints.down('sm')]:{
            width: '92%',
            height:'40%',
        }
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
    vedio_modal:{
        cursor:'pointer',
        marginTop:'30px'
    }
}))

const Banner = () => {

    const classes = myStyles()
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid item xs={12} className={classes.banner_product}>
                <Box className={classes.color_section}>
                    <p className={classes.Banner_text}>WEBER TRAVELER</p>
                    <Typography className={classes.Banner_title}>Wherever You Go,<br /> the <br />
                        Weber Traveler <br /> Will Follow</Typography>
                    {/*Model to show videos*/}
                    <img src='./assets/Product/vedio.svg' alt="vedio" onClick={handleOpen} className={classes.vedio_modal} />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className={classes.model}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LfryB59CgUA" title="YouTube video player" frameborder="none" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Box>
                    </Modal>
                </Box>
            </Grid>
        </div>
    )
}

export default Banner