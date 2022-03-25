import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Grid ,Box } from '@material-ui/core'

const myStyles = makeStyles((theme) => ({
  header_bg: {
    background:"url(./assets/Allproducts/plus.jpg)",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    [theme.breakpoints.down('sm')]:{
        fontSize:"0px",
    },
  },
  background_Colors:{
    background:"#00000070",
    height:'550px',
    display:'flex',
    alignItem:'left',
    justifyContent:'start !important'
  },
  main_Header_Shop_content:{
    maxWidth:"500px !important",
    color:"#fff",
    marginBottom:'0px',
    height:'400px',
  },
  small_head_text:{
    fontSize:"20px",
    fontWeight:"600",
    letterSpacing:'.13em',
    marginBottom:"10px",
    [theme.breakpoints.down('sm')]:{
        fontSize:"16px",
    }
  },
  main_head_text:{
    fontSize:"3.5em",
    fontWeight:"700",
    lineHeight:"70px",
    marginTop:"0px",
    marginBottom:"10px",
    letterSpacing:'.03em',
    [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
    }
  },
  content:{
      fontSize:'16px',
      fontWeight:'900',
      color:'#fff',
      letterSpacing:'0.09em',
      fontFamily: "Poppins, sans-serif",
  },
  max_width:{
      maxWidth:'1380px !important',
      padding:16,
      marginTop:'6%',
      marginLeft:'9%',
  }
}));

const PlusHeader = () => {
  const classes = myStyles()
  
  return (
    <div>
      <Grid item sx={12} className={classes.header_bg}>
      <div className={classes.background_Colors}>
      <div className={classes.max_width}>
      <Box className={classes.main_Header_Shop_content}>
      <p className={classes.small_head_text}>POWER ON, CONNECT, AND GRILL</p>
      <h2 className={classes.main_head_text}>Weber Pulse <br /> Electric Grill</h2>
      <p className={classes.content}>Simply plug in, power on, and allow the electronic temperature control to preheat to the desired temperature while the integrated Weber Connect smart technology provides precision grilling that delivers great results every time.</p>
      </Box>
      </div>
      </div>
      </Grid>
    </div>
  );
};

export default PlusHeader;
