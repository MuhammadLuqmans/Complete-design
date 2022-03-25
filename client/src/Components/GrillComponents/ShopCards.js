import { Card, Button , Grid} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataList } from "../Variations/DataList";
import Cards from './ShopVariations'

const myStyles = makeStyles((theme) => ({
  Shop_Cards: {
    maxWidth: "350px",
    margin:"auto",
    marginTop:"30px",
  },
  Card_images: {
    height: "280px",
    border: "1px solid #d3d0d0",
    "&:hover": {
      src: "./assets/Grills/Stars.svg",
    },
  },
  contents_cards: {
    padding: "10px 20px",
  },
  review_stars: {
    display: "flex",
    width: "95px",
    justifyContent: "space-between",
  },
  price_and_Cart: {
    display: "flex",
    justifyContent: "space-between",
    border: "2px solid gary",
  },
  cart_btn: {
    border: "1px solid red",
    color: "#fff",
    background: "red",
    height: "50px",
    width: "80px",
    borderRadius: "5px",
    cursor: "pointer",
  },
}));

const MyMenuItems = () => {
  // const [cards, setCards] = useState();

  console.log(Cards)

  const classes = myStyles();
  return (
    <>
    <div id="mybuttons"></div>
    </>
  );
};
export default MyMenuItems;
