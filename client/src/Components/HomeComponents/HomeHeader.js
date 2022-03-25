import { Grid ,Box ,Button } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grills from './Grills';


const myStyles = makeStyles((theme)=>({
    Home_Head_Container:{
        background:"url(./assets/Banners/home.jpg)",
        height:"550px",
        backgroundPosition:"center",
        backgroundSize:"cover",
        [theme.breakpoints.down('xs')]:{
            height:"350",
        },
        [theme.breakpoints.down('sm')]:{
            height:"440px",
        }
    },
    Home_Head_text:{
        backgroundColor:"#00000069",
        height:"550px",
        [theme.breakpoints.down('xs')]:{
            height:"350",
        },
        [theme.breakpoints.down('sm')]:{
            height:"440px",
        }
    },
    Header_Text:{
        color:"#fff",
        fontSize:"62px",
        fontWeight:"600",
        maxWidth:"700px",
        margin:"auto",
        textAlign:"center",
        padding:"0px 16px",
        paddingTop:"50px",
        marginBottom:"0px",
        [theme.breakpoints.down('sm')]:{
            fontSize:"46px",
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:"32px",
        },
    },
    btn_header:{
        border:"1px solid red",
        background:"linear-gradient(red, red)",
        borderRadius:"5px",
        color:"#fff",
        fontWeight:"500",
        width:"152px",
        padding:"9px 0px",
        textTransform:"capitalize",
        fontSize:"16px",
        fontFamily:"Roboto Slab",
        letterSpacing:"0.05em",
        position:'static'
    },
    text:{
        marginBottom:"0px",
    },
    main_button_box:{
        display:"flex",
        width:"340px",
        marginTop:"20px",
        justifyContent:"space-between",
        margin:"auto",
        [theme.breakpoints.down('xs')]:{
            display:"block",
        },
    },
    Home_slider:{
        maxWidth:"1200px",
        padding:"20px",
        margin:"auto",
    },
}))

const HomeHeader = () => {
    const classes = myStyles()
    
    return(
        <>
        <div className={classes.Home_Head_Container}>
        <Grid className={classes.Home_Head_text}>
        <Box className={classes.Header_Text}>
        <p className={classes.text}>Everything You Need<br /> to Fire Up Your New<br /> Grill​</p>
        <div className={classes.main_button_box}>
        <div>
        <Button variant='contained' className={classes.btn_header}>Recipies</Button>
        </div>
        <br />
        <div>
        <Button variant='contained' className={classes.btn_header}>Grill Skills</Button>
        </div>
        </div>
        </Box>
        </Grid>
        </div>
        </>
    )
}
export default HomeHeader;