import React from 'react'
import { Grid, Box, Button, Typography, Link, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SetCards from './SetCard'

const myStyles = makeStyles((theme) => ({
    page_wrapper: {
        maxWidth: '1350px',
        margin: 'auto',
        marginTop: '60px',
        padding: '0px 5%',
    },
    Product_Content_items: {
        padding: '0px 16px'
    },
    Product_gallery: {
        padding: '0px 16px',
    },
    main_Container: {
        justifyContent: 'space-between',
    },
    main_image: {
        backgroundColor: '#f3f2f2',
        maxWidth: '550px',
        height: '550px',
        margin: 'auto',
    },
    stars: {
        color: 'red', fontSize: '25px', borderRight: '1px solid #cfcccc', paddingRight: '10px'
    },
    btn_review: {
        backgroundColor: 'red !important',
        fontWeight: '600',
        color: '#fff',
        padding: '10px 25px',
        border: 'none',
        borderRadius: '5px',
        alignItem: 'center',
        boxShadow: '2px 2px 4px gray',
        cursor: 'pointer',
    },
    item_title: {
        fontSize: '32px',
        fontWeight: '600',
        color: '#000',
        fontFamily: 'Roboto Slab',
        marginTop: '25px',
    },
    sub_title: {
        marginTop: '10px',
        color: 'gray',
        fontSize: '24px',
        fontFamily: 'Roboto Slab',
    },
    prices: {
        justifyContent: 'space-between',
        maxWidth: '480px',
        alignItem: 'center',
    },
    price_label: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'Roboto Mono, monospace'
    },
    price_text: {
        color: '#000',
        fontSize: '16px',
        alignItem: 'center',
        fontWeight: '500',
        fontFamily: 'Source Sans Pro, sans-serif',
        lineHeight: '40px',
        letterSpacing: '0.05em',
    },
    contents: {
        color: '#000',
        fontSize: '16px',
        alignItem: 'center',
        fontWeight: '500',
        fontFamily: 'Yanone Kaffeesatz, sans-serif',
        letterSpacing: '0.05em',
        lineHeight: '32px',
    },
    price_link: {
        color: '#000 !important',
        textDecoration: 'none !important',
        marginTop: '8px',
        borderBottomWidth: '1px',
        transition: 'border 0.2s',
        '&:hover': {
            borderBottom: '3px solid red'
        }
    },
    item_colors: {
        fontSize: '20px',
        color: '#000',
        fontWeight: '700',
        fontFamily: 'Yanone Kaffeesatz, sans-serif',
        marginTop: '10px',
    },
    button_to_buy: {
        backgroundColor: 'red !important',
        color: '#fff',
        fontWeight: 'bold',
        width: '100%',
        padding: '10px 0px',
        fontSize: '14px',
        marginBottom: '25px',
        fontFamily: 'Yanone Kaffeesatz, sans-serif',
        '&:hover': {
            backgroundColor: '#000 !important',
        }
    },
    bottom_Texts: {
        borderTop: '1px solid #cfcccc',
        lineHeight: '28px',
        padding: '0px 10px',
        display: 'flex',
        alignItem: 'center',
    },
    text_links: {
        color: '#000',
        marginLeft: '10px',
        '& u': {
            textDecorationColor: 'red',
        },
    },
    icons_location: {
        marginRight: '10px',
    }
}))
const ProductDet = () => {
    const classes = myStyles();

    return (
        <div className={classes.page_wrapper}>
            <Grid item container xs={12} className={classes.main_Container}>
                <Grid item xs={12} sm={12} md={6} className={classes.Product_gallery}>
                    <div className={classes.main_image}>
                        <img src='./assets/Product/item.png' alt='mainitem' width='100%' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} className={classes.Product_Content_items}>
                    <p><span className={classes.stars}>★★★★★ <strong style={{ color: 'gray', fontWeight: '400', fontSize: '16px' }}>4.6</strong> </span><span style={{ marginLeft: '20px', fontWeight: '400', fontSize: '16px', color: 'gray' }}>934 Reviews</span> </p>
                    <Box>
                        <Button variant='contained' className={classes.btn_review}>Write a review</Button>
                    </Box>
                    <Grid item sx={12}>
                        <Typography className={classes.item_title}>Weber® Q 3200 Gas Grill</Typography>
                        <Typography className={classes.sub_title} >Titanium</Typography>

                        <Grid item xs={12} container className={classes.prices}>
                            <Typography className={classes.price_label}>$469.00</Typography><Typography className={classes.price_text}>Starting at $43/mo with affirm.</Typography><Link className={classes.price_link}>Prequalify now</Link>
                        </Grid>
                        <Typography className={classes.item_colors}>Color : <span className={classes.contents}>Titanium</span></Typography>
                        <div className={classes.color_box}></div>
                        <Typography className={classes.item_colors}>
                            Product Features
                        </Typography>
                        <Typography className={classes.contents}>
                            Discover the best of all worlds. A modern gas grill that sits pretty on your patio, with the power of two burners. Small enough to fit in a smaller yard yet big enough to grill an entire roast. Explore your options with the Q 3200 gas grill.
                        </Typography>
                        <Typography className={classes.item_colors}>Part Number : <span className={classes.contents}>#57060001</span></Typography>
                        <Typography className={classes.item_colors}>Complete the Set</Typography>
                        <Grid item container xs={12}>
                            <Grid item xs={12} sm={12} md={12} lg={6} style={{ padding: '10px 0px' }}>
                                <SetCards />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={6} style={{ padding: '10px 0px 20px 10px' }}>
                                <SetCards />
                            </Grid>
                        </Grid>
                        <Button variant='contained' className={classes.button_to_buy}>Add to Cart<img src="./assets/Product/cart.svg" alt="cart" width='30' style={{ marginLeft: '10px' }} /></Button>
                        <Grid item xs={12} >

                            <Grid className={classes.bottom_Texts}><img src="./assets/Product/location.svg" alt="location" className={classes.icons_location} /><p > For in-store shopping, <Link to="#" className={classes.text_links}><u> Find a retailer </u></Link></p></Grid>
                            <Grid className={classes.bottom_Texts}><img src="./assets/Product/Square.svg" alt="location" className={classes.icons_location} /><p > Free Returns <Link to="#" className={classes.text_links}><u>Resctrictions apply </u></Link></p></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default ProductDet;