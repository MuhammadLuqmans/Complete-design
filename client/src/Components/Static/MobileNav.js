import { AppBar, Toolbar ,Typography} from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme)=>({
toolBar_nav:{
    padding:"13px 20px",
    display:"flex",
    backgroundColor:"#fff",
},
nev_mobile_text:{
    color:"#000",
    fontWeight:"700",
    letterSpacing:"0.03em",
    fontFamily:"Roboto Slab",
    textTransform:"UpperCase",
    marginLeft:"15px",
    fontSize:"20px",
    [theme.breakpoints.down("xs")]:{
        fontSize:'16px',
        marginLeft:"8px",
    }
},
nav_box:{
    display:"flex",
    alignItems:"center",
    flexGrow:1,
},
main_images:{
    width:"90px",
    [theme.breakpoints.down("xs")]:{
        Width:'60px'
    }
}
}))

const MobileNavbar = () => {
    const classes = myStyles()
    return(
        <div>
        <Toolbar >
        <AppBar className={classes.toolBar_nav}>
        <div style={{display:'flex'}}>
        <div className={classes.nav_box}>
        <img src='./assets/Navbar/weber-logo.svg' alt="weber" className={classes.main_images} />
        <Typography className={classes.nev_mobile_text}>Weber Grills</Typography>
        </div>
        <img src="./assets/Navbar/toggel.svg" alt="toggel" width="25" />
        </div>
        </AppBar>

        </Toolbar>
        </div>
    )
}

export default MobileNavbar;