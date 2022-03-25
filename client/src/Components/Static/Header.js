import { Box, Grid, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const myStyles = makeStyles((theme)=>({
    header_banner_container:{
        maxWidth:"1290px",
        padding:"0px 20px",
        margin:"auto",
        fontSize:"14px",
        color:"#000",
        fontWeight:"600px",
        display:"flex-box",
        lineHeight:"10px",
    },
    header_bg:{
        background:"#EDEDED",
        padding:"0px"
    },
    banner_img_uni:{
        borderRadius:"50%",
        marginRight:"14px",
    },
    banner_img_uni_text:{
        display:"flex",
        alignItems:"center",
        flexGrow:1,
    },
    sub_banner_text1:{
        color:"#000",
        textDecoration:"none",
    },
    sub_banner_text2:{
        color:"#000",
        textDecoration:"none",
        marginLeft:"12px",
    }
    
}))

const Header = () => {
    const classes = myStyles()
    return(
        <div className={classes.header_bg}>
        <Grid item container xs={12} className={classes.header_banner_container}>
        <Box className={classes.banner_img_uni_text}>
        <img src="./assets/Navbar/us.png" alt="flag-aunited state" width="20" height="20" className={classes.banner_img_uni} />       
        <p>United States (EN)</p>
        </Box>
        <Box sx={{ display:"flex"}}>
        <Link href='/allproducts' ><p className={classes.sub_banner_text1}>Store Finder</p></Link>
        <Link href='#' ><p className={classes.sub_banner_text2}>Register Grill</p></Link>
        </Box>
        </Grid>
        </div>
    )
}

export default Header;