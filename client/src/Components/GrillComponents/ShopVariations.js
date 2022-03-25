import { Box, Button, Card, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { DataList } from "../Variations/DataList";
import { Link } from "react-router-dom";

const myStyles = makeStyles((theme) => ({
    Variations_wrappers: {
    },
    Tites_variations: {
        fontSize: "32px",
        fontWeight: "700",
        color: "#000",
        lineHeight: "40px",
        marginBottom: "10px",
    },
    filters_heading: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "18px",
        fontWeight: 700,
    },
    shop_types: {
        fontSize: "18px",
        fontWeight: 700,
        marginBottom: "5px",
    },
    ul_lis: {
        border: "2px solid gray",
        listStyleType: "none",
        overFlow: "hidden",
    },
    check_box: {
        border: "2px solid black",
        height: "15px",
        width: "15px",
        borderRadius: "50%",
        display: "flex-box",
        marginRight: "10px",
        color: "#fff",
        margin: "5px",
        "&:hover": {
            backgroundColor: "red",
            color: "red",
        },
    },
    displays: {
        display: "flex",
        alignItems: "center",
        lineHeight: "10px",
        textTransform: "capitalize",
        overFlow: "hidden"
    },
    Shop_Cards: {
        maxWidth: "300px",
        margin: "auto",
        marginTop: "30px",
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
        background: "red !important",
        height: "50px",
        width: "80px",
        borderRadius: "5px",
        position: 'static',
    },
    cardGrids: {
        padding: "10px",
    },
    shop_Layout: {
        maxWidth: "1380px",
        margin: "auto",
        marginTop: "40px",
        padding: "16px",
        display: 'flexbox'
    },
}));

const ShopVariations = () => {
    const classes = myStyles();
    const [cards, setCards] = useState(DataList)


    window.addEventListener("DOMContentLoaded", () => {
        MyButtons();
        // MyMenuItems(DataList);
    });

    const MyButtons = () => {
        var mybuttons = document.getElementById("mybuttons");
        const getCategory = DataList.reduce(
            (values, items) => {
                /// values ma array ha or items ma array ka object ha
                if (!values.includes(items.category)) {
                    // console.log(values.category)
                    values.push(items.category);
                }
                return values;
            },
            ["all"]
        );
        const btnsCategory = getCategory.map((btnData) => {
            return `<label><p style=" width:100%; padding:15px;background-color:#dfdcdc; cursor:pointer" class="filter-btn" data-id=${btnData}> 
          ${btnData}
                </p></lebel>`;
        })
            .join("");
        mybuttons.innerHTML = btnsCategory;

        const filters = mybuttons.querySelectorAll(".filter-btn");

        filters.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.id;
                const menuCategory = DataList.filter(function (menuItem) {
                    // console.log(menuItem.category);
                    if (menuItem.category === category) {
                        return menuItem;
                    }

                });
                if (category === "all") {
                    setCards(DataList);
                } else {
                    setCards(menuCategory);
                }
            });
        });
    }



    return (
        <div>
            <Grid item container sx={12} className={classes.shop_Layout}>
                <Grid item xs={12} sm={6} md={3} lg={3} className={classes.variation_Container}>
                    <Box className={classes.Variations_wrappers}>
                        <p className={classes.Tites_variations}>Summit® Kamado</p>
                        <div className={classes.filters_heading}>
                            <p>Filter By</p>
                            <p>Clear Filter</p>
                        </div>
                        <div>
                            <p className={classes.shop_types}>Type</p>
                            <hr />
                            <div>
                                <input type="checkbox" className={classes.check_box} />
                                <label>Charcoal Grills</label>
                                <ul className={classes.ul_lis}>
                                    <li>
                                        <div className={classes.displays}>
                                            <div id='mybuttons'> </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p className={classes.shop_types}>Prices</p>
                            <hr />
                            <div>
                                <input type="checkbox" className={classes.check_box} />
                                <label>$1,000 - $1,499</label>
                                <ul className={classes.ul_lis}>
                                    <li>
                                        <div className={classes.displays}>
                                            <p className={classes.check_box}>.</p>
                                            <label>Charcoal Grills</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={classes.displays}>
                                            <p className={classes.check_box}>.</p>
                                            <label>$1,000 - $1,499</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item container xs={12} sm={6} md={9} lg={9} className={classes.shop_items_container}>
                    {cards.map((list) => {
                        return (
                            <Grid item xs={12} sm={12} md={6} lg={4} key={list.id} className={classes.cardGrids}>
                                <Link to="/product" >
                                    <Card className={classes.Shop_Cards}>
                                        <img
                                            src={list.img}
                                            alt="cards assets"
                                            width="100%"
                                            className={classes.Card_images}
                                        />
                                        <div className={classes.contents_cards}>
                                            <p className={classes.shop_Card_titles}>{list.title}</p>
                                            <div className={classes.review_stars}>
                                                <img
                                                    src="./assets/Grills/Stars.svg"
                                                    alt="stars"
                                                    width="20"
                                                />

                                                <img
                                                    src="./assets/Grills/Stars.svg"
                                                    alt="stars"
                                                    width="20"
                                                />
                                                <img
                                                    src="./assets/Grills/Stars.svg"
                                                    alt="stars"
                                                    width="20"
                                                />
                                                <img
                                                    src="./assets/Grills/Stars.svg"
                                                    alt="stars"
                                                    width="20"
                                                />
                                            </div>
                                            <div className={classes.price_and_Cart}>
                                                <p>$ {list.price}</p>
                                                <Button className={classes.cart_btn}>
                                                    <img
                                                        src="./assets/Grills/Carts.svg"
                                                        alt="cart"
                                                        width="25px"
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>
        </div>
    );
};
export default ShopVariations;