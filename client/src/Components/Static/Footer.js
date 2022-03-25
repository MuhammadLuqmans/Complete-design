import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';

const myStyles = makeStyles((theme)=>({
    Footer_wrapper:{
        maxWidth:'1380px',
        padding:"40px 20px",
        backgroundColor:"#fff",
        height:"400px",
        borderTop:"1px solid #d3d0d0",
        margin:'auto',
    },
    title_Links:{
        textDecoration:"none",
        fontSize:"20px",
        color:"#000",
        lineHeight:"36px"
    },
    Sub_Head_Links:{
        color:"#232323",
        lineHeight:"30px",
        textDecoration:"none",
    },
    sub_links_divs:{
        padding:"10px",
    },
    blow_menut_footer_End:{
        width:"100%",
        textAlign:"end",
        margin:"20px 0px",
    },
    footer_blow_menu_wrapper:{
        width:"40%",
        display:"flex",
        justifyContent:"space-between",
        marginTop:"20px",
        [theme.breakpoints.down('sm')]:{
            width:"50%"
        },
        [theme.breakpoints.down('xs')]:{
            display:"none"
        }
    },
    Sub_Footer_Links_menu:{
        textDecoration:"none",
        color:"#000",
        fontWeight:"10",
        fontSize:"14px",
    },
    wrapper_menu:{
        width:"100%",
        display:"flex",
        justifyContent:"end"
    }
}))

const MyFooter =()=>{
    const classes = myStyles()
    return(
        <div>
        <Grid item container xs={12} className={classes.Footer_wrapper}>
        <Grid item sx={12} sm={12} md={3}>
        <img src="./assets/Navbar/weber-logo.svg" alt="footer" width="120" />
        </Grid>
        <Grid item sx={12} sm={12} md={9} container className={classes.footer_text_links}>
        <Grid item sx={12} sm={6} md={3} className={classes.sub_links_divs}>
        
        <Link to="#" className={classes.title_Links}>Company</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>About Us</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Newsroom</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Investors</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Careers</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Weber Restaurants</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Weber Manufacturing</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Privacy Commitment</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Privacy Policy</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>CCPA Privacy Notice</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Legal Notice</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Accessibility Statement</Link><br />
        </Grid>
        <Grid item sx={12} sm={6} md={3} className={classes.sub_links_divs}>
        <Link to="#" className={classes.title_Links}>Customer Support</Link>
        <br />
        <Link to="#" className={classes.Sub_Head_Links}>Support</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Ask Us a Question</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>FAQs</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>iGrill Thermometer</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Store Finder</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Manuals & Schematics</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Shipping & Returns</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Register Your Grill</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Warranties</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Track Order</Link><br />
        </Grid>
        



        <Grid item sx={12} sm={6} md={3} className={classes.sub_links_divs}>
        <Link to="#" className={classes.title_Links}>Replacement Parts</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Gas Grill Parts</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Charcoal Grill Parts</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Find Parts by Serial Number</Link><br />
        </Grid>
        <Grid item sx={12} sm={6} md={3} className={classes.sub_links_divs}>
        <Link to="#" className={classes.title_Links}>Explore</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>eGift Card</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Accessories</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Grills</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Corporate Gifts</Link><br />
        <Link to="#" className={classes.Sub_Head_Links}>Military Program</Link><br />
        </Grid>
        </Grid>
        <div className={classes.wrapper_menu}>
        <div className={classes.footer_blow_menu_wrapper}>
        <div className={classes.blow_menut_footer}>
        <Link to="#" className={classes.Sub_Footer_Links_menu}>Contect Us</Link>
        </div>
        <div className={classes.blow_menut_footer}>
        <Link to="#" className={classes.Sub_Footer_Links_menu}>Privacy Policy</Link>
        </div>
        <div className={classes.blow_menut_footer}>
        <Link to="#" className={classes.Sub_Footer_Links_menu}>Legal Notice</Link>
        </div>
        </div>
        </div>
        <div className={classes.blow_menut_footer_End}>
        <Link to="#" className={classes.Sub_Footer_Links_menu}>
        © 2022 Weber. All Rights Reserved.</Link>
        </div>
        </Grid>
        </div>
    )
}

export default MyFooter