import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Data, MeetData } from "./CardData";
// import HomeSlider from "./Slider";
import IconsCard from "./IconsCards";
import { IconsData } from "./IconsData";

const myStyles = makeStyles((theme) => ({
  Grill_Title: {
    fontSize: "38px",
    color: "#000",
    textAlign: "center",
    marginTop: "50px",
    fontWeight: "600",
    fontFamily: "Roboto Slab",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  Banner_card: {
    backgroundImage: "url(./assets/Banners/Ban.jpg)",
    maxWidth: "1200px",
    margin:"auto",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    textAlign: "right",
    color: "#fff",
    height: "570px",
    marginTop: "80px",
    alignItem: "center",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "400px",
    },
  },
  sub_title_item: {
    fontSize: "20px",
    fontWeight: 600,
  },
  title_items: {
    fontSize: "46px",
    fontWeight: 700,
    margin: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      fontWeight: "600",
    },
  },
  text_wrapper: {
    maxWidth: "800px",
    paddingTop: "180px",
    margin: "auto",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "120px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "80px",
    },
  },
  button_card_banner: {
    backgroundColor: "red",
    textAlign: "center",
    padding: "10px",
    width: 152,
    fontWeight: 700,
    letterSpacing: "0.09em",
    marginTop: "20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "brown",
    },
  },
  card_full_Grills: {
    maxWidth: "360px",
    boxShadow: "4px 4px 8px #f6f6f6",
    margin:"0px auto",
    borderRadius:3,
    overflow:'hidden',
    border:'1px solid #fff',
  },
  card_Image: {
    // width:"100%",
  },
  card_content: {
    padding: "20px 10px",
    color: "#000",
  },
  Grill_card_title: {
    fontSize: "26px",
    color: "#000",
    fontFamily: "Roboto Slab",
    fontWeight: 600,
    textDecoration: "none",
    transform: "4s",
    "&:hover": {
      color: "#000",
    },
  },
  Grill_card_discription: {
    fontWeight: 600,
    color: "#232323",
  },
  btn_header: {
    border: "1px solid red",
    background: "linear-gradient(red, red)",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "500",
    width: "152px",
    padding: "5px 0px",
    textTransform: "capitalize",
    fontSize: "16px",
    fontFamily: "Roboto Slab",
    letterSpacing: "0.05em",
    marginTop: "20px",
    position:'static',
  },
  Banner_card_two:{
    backgroundImage: "url(./assets/Banners/Bann2.jpg)",
    maxWidth: "1200px",
    margin:"auto",
    backgroundRepeat: "none",
    backgroundSize: "cover",
    textAlign: "left",
    color: "#fff",
    height: "570px",
    marginTop: "80px",
    alignItem: "center",
    [theme.breakpoints.down("md")]: {
      height: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "400px",
      width:"100%"
    },
  },
  Grills_sub_titles:{
    textAlign:"center",
    fontWeight:"600",
    fontSize:"16px",
    fontFamily:"Roboto Slab"
  },
  Icons_Card_section:{
    padding:"10px 16px",
    margin:"auto",
    textAlign:"center",
    marginTop:20,
    [theme.breakpoints.down('xs')]:{
      padding:"20px 0px",
    }
  },
 Card_Grid:{
   padding:"20px",
   [theme.breakpoints.down('sm')]:{
    padding:"20px 10px",
  },
   [theme.breakpoints.down('xs')]:{
     padding:"20px 0px",
   },
   
 },
 main_div_full_body:{
   maxWidth:"1200px",
   margin:"auto",
 },
 main_Links:{
   textDecoration:"none",
 },
 card_Content_line:{
   color:'#000',
   padding:'10px',
   fontSize:'14px',
   fontWeight:'bold',
   background:'#f6f6f6',
   opcity:'2',
   fontFamily:'Roboto Slab',
 }
}));

const Grills = () => {
  const classes = myStyles();
  return (
    <>
    <div className={classes.main_div_full_body}>
      <Typography className={classes.Grill_Title}>Find Your Grill</Typography>
      <Grid item xs={12}>
      </Grid>
      </div>
      <div className={classes.Banner_card}>
        <div className={classes.text_wrapper}>
          <h1 className={classes.sub_title_item}>
            TOOLS, COOKWARE, GEAR & MORE
          </h1>
          <h2 className={classes.title_items}>New Year, New Accessories​</h2>
          <Button variant="contained" className={classes.btn_header}>
            Shop Now
          </Button>
        </div>
      </div>
    <div className={classes.main_div_full_body}>

      <Typography className={classes.Grill_Title}>
        Our Favorite Picks
      </Typography>
      <Grid item container xs={12} className={classes.mainDiv}>
        {Data.map((data) => {
          return (
            <Grid
              item
              key={data.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.Card_Grid}
            >
              <div className={classes.card_full_Grills}>
                <div className={classes.card_Image}>
                  <img src={data.imageGrill} alt="mainCard" width="100%" />
                </div>
                <div className={classes.card_content}>
                  <Link to="#" className={classes.main_Links}>
                    <Typography className={classes.Grill_card_title}>
                      {data.title}
                    </Typography>
                  </Link>
                  <Typography className={classes.Grill_card_discription}>
                    {data.discription}
                  </Typography>
                </div>
                <Typography className={classes.card_Content_line}>
                   New Electronic and Gas Grills
                  </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
      </div>
      <div className={classes.Banner_card_two}>
        <div className={classes.text_wrapper}>
          <h1 className={classes.sub_title_item}>
          NEW GRILL?
          </h1>
          <h2 className={classes.title_items}>Register for the Full Weber Grill Experience​</h2>
          <Button variant="contained" className={classes.btn_header}>
            Rigster Now
          </Button>
        </div>
      </div>
    <div className={classes.main_div_full_body}>
      
      <Typography className={classes.Grill_Title}>
      From Our Backyard to Yours
      </Typography>
      <Typography className={classes.Grills_sub_titles}>Our best tips, tricks and recipes to keep you grilling.</Typography>
      <Grid item container xs={12} className={classes.mainDiv}>
        {MeetData.map((data) => {
          return (
            <Grid
              item
              key={data.id}
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className={classes.Card_Grid}
            >
              <div className={classes.card_full_Grills}>
                <div className={classes.card_Image}>
                  <img src={data.imageGrill} alt="mainCard" width="100%" />
                </div>
                <div className={classes.card_content}>
                  <Link to="#" className={classes.main_Links}>
                    <Typography className={classes.Grill_card_title}>
                      {data.title}
                    </Typography>
                  </Link>
                  <Typography className={classes.Grill_card_discription}>
                    {data.discription}
                  </Typography>
                </div>
                <Typography className={classes.card_Content_line}>
                   New Electronic and Gas Grills
                  </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
      <Typography className={classes.Grill_Title}>
      Why Buy From Weber
      </Typography>
      <Grid item container xs={12} >
      {IconsData.map(data=>{
        return(
      <Grid item xs={12} sm={6} md={3} key={data.id} className={classes.Icons_Card_section}>
      <IconsCard 
      Images={data.image}
      title={data.title}
      Disc={data.discription}
      Link={data.link}
      />
      </Grid>
        )
      })}
      </Grid>
    </div>
    </>
  );
};

export default Grills;

