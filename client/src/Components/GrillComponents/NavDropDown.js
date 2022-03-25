import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Charcoal_Grills,
  Electric_Grills,
  GasGrills,
  Portable_Grills,
  Wood_Pellet,
} from "../Static/StaticData/NavbarGrils";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Typography } from "@material-ui/core";

// start functions

function TabPanel(props) {
  var { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// End Functions

const myStyles = makeStyles((theme) => ({
  Drop_wrapper: {
    background: "#fff",
    border: "1px solid gray",
    margin: "auto",
    zIndex: "9 !important",
    position: "absolute",
    right: 0,
    top: 101,
    left: 0,
    height: "90vh",
    width: "90vw",
  },
  Side_Bar_Menu: {
    padding: "20px",
    background: "#c1c0c08c",
    lineHeight: "30px",
    height: "80vh",
    textAlign: "left",
  },
  nav_side_bar_Links: {
    color: "#000",
    fontFamily: "Roboto Slab",
    fontWeight: "600",
    justifyContent: "start",
    textTransform: "capitalize",
    fontSize: "18px",
  },
  items_box: {
    color: "#000",
    background: "#fff",
    border: "1px solid gray",
    textAlign: "center",
    margin: "14px 7px",
    borderRadius: "5px",
    width: "130px",
    fontSize: "16px",
  },
  Image_Container: {
    marginTop: "20px",
    padding: "20px",
    border: "2px solid gray",
  },
  NavBanner_title: {
    marginBottom: "0px",
    padding: "0px 15px",
  },
  divider_title: {
    width: "95%",
    margin: "auto",
    marginTop: "0px",
  },
  main_div_Tabs: {
    display: "flex-box",
    textAlign: "left",
    background: "#fff",
    boxShadow: "2px 2px 6px gray",
  },
}));

const GrillDropDown = ({CloseBtn}) => {
  const classes = myStyles();
  let [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  var names;
  switch (value) {
    case 0:
      names = "Gas Grills";
      break;
    case 1:
      names = "Charcoal Grills";
      break;
    case 2:
      names = "Wood Pellet Grills";
      break;
    case 3:
      names = "Electic Grills";
      break;
    case 4:
      names = "Portable Grills";
      break;
  }

  return (
    <div>
    <AppBar>
      <div className={classes.Drop_wrapper}>
        <Grid item container xs={12}>
          <Grid item md={3}>
            <div className={classes.Side_Bar_Menu}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                className={classes.main_div_Tabs}
              >
                <Tab
                  className={classes.nav_side_bar_Links}
                  label="Gas Grills"
                />
                <Tab
                  className={classes.nav_side_bar_Links}
                  label="Charcoal Grills"
                />
                <Tab
                  className={classes.nav_side_bar_Links}
                  label="Wood Pellet Grills"
                />
                <Tab
                  className={classes.nav_side_bar_Links}
                  label="Electic Grills"
                />
                <Tab
                  className={classes.nav_side_bar_Links}
                  label="Portable Grills"
                />
              </Tabs>
            </div>
          </Grid>
          <Grid item container md={9}>
            <Grid item md={8}>
              <div className={classes.Dynamic_Container}>
                <h2 className={classes.NavBanner_title}>{names}</h2>
                <hr className={classes.divider_title} />

                <Box
                  sx={{
                    flexGrow: 1,
                    bgcolor: "background.paper",
                    display: "flex",
                    height: "100%",
                  }}
                > 
                <Link to='./grills' >
                <TabPanel value={value} index={0}>
                    <Grid item container xs={12} className={classes.map_data}>
                      {GasGrills.map((data) => {
                        return (
                          <Box className={classes.items_box} key={data.id} onClick={()=>CloseBtn()}>
                            <img src={data.images} alt="items" width="100" />
                            <p className={classes.items_text_titles}>
                              {data.titles}
                            </p>
                          </Box>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  </Link>
                  <TabPanel value={value} index={1}>
                    <Grid item container xs={12} className={classes.map_data}>
                      {Charcoal_Grills.map((data) => {
                        return (
                          <Box className={classes.items_box} key={data.id} onClick={()=>CloseBtn()}>
                            <img src={data.images} alt="items" width="100" />
                            <p className={classes.items_text_titles}>
                              {data.titles}
                            </p>
                          </Box>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Grid item container xs={12} className={classes.map_data} >
                      {Wood_Pellet.map((data) => {
                        return (
                          <Box className={classes.items_box} key={data.id} onClick={()=>CloseBtn()}>
                            <img src={data.images} alt="items" width="100" />
                            <p className={classes.items_text_titles}>
                              {data.titles}
                            </p>
                          </Box>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Grid item container xs={12} className={classes.map_data}>
                      {Electric_Grills.map((data) => {
                        return (
                          <Box className={classes.items_box} key={data.id} onClick={()=>CloseBtn()}>
                            <img src={data.images} alt="items" width="100" />
                            <p className={classes.items_text_titles}>
                              {data.titles}
                            </p>
                          </Box>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={4}>
                    <Grid item container xs={12} className={classes.map_data} >
                      {Portable_Grills.map((data) => {
                        return (
                          <Box className={classes.items_box} key={data.id} onClick={()=>CloseBtn()}>
                            <img src={data.images} alt="items" width="100" />
                            <p className={classes.items_text_titles}>
                              {data.titles}
                            </p>
                          </Box>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                </Box>
              </div>
            </Grid>
            <Grid item md={4} className={classes.Image_Container}>
              <img
                src="https://www.weber.com/on/demandware.static/-/Library-Sites-library-na/default/dwa2b7c60c/images/homepage/Genesis_EX_wPhone_661x415.jpg"
                width="100%"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
      </AppBar>
    </div>
  );
};
export default GrillDropDown;
