import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Header from "./Header";
import { Grid, Box, AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import GrillDropDown from "../GrillComponents/NavDropDown";

const myStyles = makeStyles((theme) => ({
  nav_Header_stickey: {
    background: "#fff",
  },
  wrapper_navbar: {
    top: 0,
    width:'100%',
  },
  main_Navbar_container: {
    maxWidth: "1380px",
    padding: "5px 20px",
    margin: "auto",
    textDecoration: "none",
    justifyContent: "space-between",
  },
  navbar_part_first: {
    justifyContent: "space-between",
    color: "#000",
    alignItems: "center",
    maxWidth: "63.5%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "70%",
    },
  },
  nav_link_text: {
    color: "#000",
    cursor: "pointer",
    fontWeight: "500",
    letterSpacing: "0.05em",
  },
  navbar_part2: {
    alignItems: "center",
    maxWidth: "35%",
    justifyContent: "end",
    [theme.breakpoints.down("md")]: {
      maxWidth: "25%",
    },
  },
  search_box: {
    backgroundColor: "#EDEDED",
    borderRadius: "6px",
    display: "flex",
    padding: "10px 8px",
    color: "#000",
    marginRight: "15px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  search_input: {
    backgroundColor: "#ededed",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  logIn_box: {
    display: "flex",
    fontSize: "14px",
    marginRight: "12px",
    color:'#000 !important',
  },
  icon_search: {
    display: "none",
    marginRight: "20px",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  links_nav: {
    textDecoration: "none",
  },
  Show_Drop_Down: {
    display: "none",
  },
  app_bar: {
    position: 'fixed',
    top: '0px',
    right:0,
    left:0,
    width:'100%',
    borderBottom:'1px solid #cfcccc',
    zIndex:1,
    backgroundColor:'#fff !important',
    transition:'2s',
  },
  Normal_nav:{
    position:'relative',
    right:0,
    left:0,
    width:'100% !important',
    backgroundColor:'#fff !important',
    boxShadow:'none',
  }
}));

const Navbar = () => {

  const classes = myStyles();
  const ShowDropDown = () => {
    var drop = document.getElementById('Grill');
    drop.style.display = "block";
    console.log('show')
  }

  const Close = () => {
    var drop = document.getElementById('Grill');
    drop.style.display = "none";
    console.log('no')
  }

  // scroll effect of navbar

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
      var myNav = document.getElementById("navbar");
      myNav.className = classes.app_bar;
    } else {
      var myNav = document.getElementById("navbar");
      myNav.className = classes.Normal_nav;
    }
  }
//end function

  return (
    <div>
      <div className={classes.nav_Header_stickey}>
        <div id="Grill" style={{ display: "none" }}>
          <GrillDropDown CloseBtn={Close} />
        </div>
        <Header />
        <Toolbar>
        <AppBar className={classes.Normal_nav} id="navbar">
          <div className={classes.wrapper_navbar}>
            <Grid item container xs={12} className={classes.main_Navbar_container}>
              <Grid item container className={classes.navbar_part_first}>
                <Link to="/">
                  <img
                    src="/assets/Navbar/weber-logo.svg"
                    alt="navbar"
                    width="90"
                  />
                </Link>
                <Link to="#" className={classes.links_nav}>
                  <p className={classes.nav_link_text} onClick={() => ShowDropDown()}>
                    Grills
                    <img src="./assets/Navbar/arrow.svg" alt="arrow" width="12" />{" "}
                  </p>
                </Link>
                <Link to="/add-products/addnew123" className={classes.links_nav}>
                  <p className={classes.nav_link_text}>
                    Accessories
                    <img src="./assets/Navbar/arrow.svg" alt="arrow" width="12" />{" "}
                  </p>
                </Link>
                <Link to="/all-products" className={classes.links_nav}>
                  <p className={classes.nav_link_text}>
                    Discover{" "}
                    <img src="./assets/Navbar/arrow.svg" alt="arrow" width="12" />
                  </p>
                </Link>
                <Link to="/plus" className={classes.links_nav}>
                  <p className={classes.nav_link_text}>
                    Recipes{" "}
                    <img src="./assets/Navbar/arrow.svg" alt="arrow" width="12" />
                  </p>
                </Link>
                <Link to="/" className={classes.links_nav}>
                  <p className={classes.nav_link_text}>
                    Parts & Support{" "}
                    <img src="./assets/Navbar/arrow.svg" alt="arrow" width="12" />
                  </p>
                </Link>
              </Grid>
              <Grid item container className={classes.navbar_part2}>
                <img
                  src="./assets/Navbar/search.svg"
                  alt="search"
                  width="20"
                  className={classes.icon_search}
                />

                <Box className={classes.search_box}>
                  <img src="./assets/Navbar/search.svg" alt="search" width="20" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className={classes.search_input}
                  />
                </Box>
                <Box className={classes.logIn_box}>
                 <Link to="/login"> <img src="./assets/Navbar/user.svg" alt="login_user" width="25" /></Link>
                  <p>Login / SignUp</p>
                </Box>
                <img src="./assets/Navbar/cart.svg" alt="cart" width="25" />
              </Grid>
            </Grid>
          </div>
        </AppBar>
        </Toolbar>
      </div>
    </div>
  );
};
export default Navbar;
