import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Grid ,Box } from '@material-ui/core'

const myStyles = makeStyles((theme) => ({
  header_bg: {
    background:"url(./assets/Grills/steel-insulated.jpg)",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    [theme.breakpoints.down('sm')]:{
        fontSize:"0px",
    },
  },
  background_Colors:{
    background:"#00000070",

  },
  main_Header_Shop_content:{
    maxWidth:"990px",
    color:"#fff",
    margin:"auto",
    paddingTop:"6em",
    paddingBottom:"10em",
    paddingLeft:"16px",
    paddingRight:"16px",
  },
  small_head_text:{
    fontSize:"20px",
    fontWeight:"600",
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
    [theme.breakpoints.down('sm')]:{
        fontSize:"2em",
    }
  }
}));

const GrillsHeader = () => {
  const classes = myStyles()
  
  return (
    <div>
      <Grid item sx={12} className={classes.header_bg}>
      <div className={classes.background_Colors}>
      <Box className={classes.main_Header_Shop_content}>
      <p className={classes.small_head_text}>SUMMIT KAMADO</p>
      <h2 className={classes.main_head_text}>Steel-Insulated <br /> Temperature Control</h2>
      <p>The innovative design allows for high heat grilling and all-day smoking at a consistent low heat, while minimizing the amount of charcoal burned during a cook.</p>
      </Box>
      </div>
      </Grid>
    </div>
  );
};

export default GrillsHeader;
