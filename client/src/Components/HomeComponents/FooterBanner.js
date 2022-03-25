import { Grid ,Box,Button,Link, Typography, TextField } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const myStyles = makeStyles((theme)=>({
    Footer_Background:{
        backgroundImage:"url(./assets/Banners/HomeFooter.webp)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover",
        padding:"40px 20px",
        marginTop:"40px",
    },
    Footer_wrapper:{
        color:"#fff",
        maxWidth:'1360px',
        margin:'auto',
        padding:'16px',
    },
    footer_title:{
        fontSize:"36px",
        fontWeight:"600",
        marginBottom:"8px",
        letterSpacing:"0.05em",
        [theme.breakpoints.down('sm')]:{
            fontSize:"28px",
        }
    },
    Input_footer:{
        backgroundColor:"#fff",
        borderRadius:5,
        padding:"5px 5px 5px 10px",
        maxWidth:"100%",
        justifyContent:"space-between",
    },
    input_Button:{
        backgroundColor:"red !important",
        color:"#fff",
        fontWeight:"600",
        padding:"10px 10px",
        width:"100%",
        border:"2px solid red",
        borderRadius:"5px",
    },
    input:{
        border:"none",
        fontSize:"16px",
        fontWeight:"500",
        color:"#000",
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            marginBottom:'10px',
        }
    },
    footer_Icons:{
        alignItems:"center",
        display:"flex",
        justifyContent:"space-between",
        paddingLeft:"50px",
        color:"#fff",
        fontSize:"30px",
        maxWidth:"500px",
        [theme.breakpoints.down('sm')]:{
            padding:0,
            marginTop:"25px",
        }
    },
    small_text:{
        fontSize:"14px",
        fontWeight:400,
        letterSpacing:"0.05em",
    },
    bold_text:{
        fontSize:"16px",
        fontWeight:600,
        color:"#fff",
        letterSpacing:"0.07em",
    },
    sub_text_of_title:{
        fontSize:"18px",
        marginBottom:"20px",
        fontWeight:"500",
    }
}))

const HomeFooter = () => {
    const classes = myStyles()
    return(
        <div  className={classes.Footer_Background}>
        <div className={classes.Footer_wrapper}>
        <h2 className={classes.footer_title}>Join Our Community</h2>
        <Typography className={classes.sub_text_of_title}>Email updates from our community of grill masters, food enthusiasts, and lovers of outdoor cooking.</Typography>
        <Grid item container xs={12}>
        <Grid item xs={12} sm={12} md={4}>
        <Box className={classes.Input_footer}>
        <Grid item container xs={12} style={{ justifyContent:'space-between', itemAlign:'center'}}>
        <Grid item xs={12} sm={9}>
        <TextField  type="text" label='Email Address' className={classes.input} />
        </Grid>
        <Grid item xs={12} sm={3}>
        <Button variant='contained' className={classes.input_Button}>Sign up</Button>
        </Grid>
        </Grid>
        </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Box className={classes.footer_Icons}>
        <a href="#" ><img src="./assets/Social/FaceBook.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/InstaGram.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/Printes.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/Twitter.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        <a href="#" ><img src="./assets/Social/Youtube.svg" alt="facebook icons" width="40" className={classes.Icons_all} /></a>
        </Box>
        </Grid>
        </Grid>
        <p className={classes.small_text}>This site is protected by re<Link className={classes.bold_text}><u>CAPTCHA</u></Link> and the</p>
        <p className={classes.small_text}>Google <Link className={classes.bold_text}><u>Privacy Policy</u></Link> and <Link className={classes.bold_text}><u>Terms of Service</u></Link> apply.</p>
        </div>
        </div>
    )
}
export default HomeFooter