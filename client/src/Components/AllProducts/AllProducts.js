import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Grid ,Box } from '@material-ui/core'

const myStyles = makeStyles((theme) => ({
  header_bg: {
    background:"url(./assets/Allproducts/Allproducts.jpg)",
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
    alignItem:'center',
  },
  main_Header_Shop_content:{
    width:"1020px !important",
    color:"#fff",
    margin:"auto",
    paddingLeft:"16px",
    paddingRight:"16px",
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
    fontWeight:"650",
    lineHeight:"70px",
    marginTop:"0px",
    marginBottom:"10px",
    letterSpacing:'.03em',

    [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
    }
  },
}));

const ProductHeader = () => {
  const classes = myStyles()
  
  return (
    <div>
      <Grid item sx={12} className={classes.header_bg}>
      <div className={classes.background_Colors}>
      <Box className={classes.main_Header_Shop_content}>
      <p className={classes.small_head_text}>CHARCOAL, GAS, PELLET & MORE</p>
      <h2 className={classes.main_head_text}>Find the Perfect Weber <br /> Grill for Any Griller</h2>
      </Box>
      </div>
      </Grid>
    </div>
  );
};

export default ProductHeader;
