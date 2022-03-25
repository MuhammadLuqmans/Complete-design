import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import ShopVariations from "./ShopVariations";
import ShopCards from "./ShopCards";
import VarSection from "../Variations/VarSection";
import { DataList } from "../Variations/DataList";

const myStyles = makeStyles((theme) => ({
  shop_Layout: {
    maxWidth: "1400px",
    margin: "auto",
    marginTop: "40px",
    display:'flexbox'
  },
  shop_items_container: {
    padding: "20px",
    background:"orange",
    display:"flex",
  },
  variation_Container: {
    padding: "20px 14px",
  },
}));



const GrillsPageLayout = (data) => {
// console.log(data)
  const classes = myStyles();
  return (
    <div>
      <ShopVariations />
    </div>
  );
};
export default GrillsPageLayout;


