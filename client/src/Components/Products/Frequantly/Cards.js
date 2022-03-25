import React from 'react'
import { Box, Card, Link, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const myStyles = makeStyles((theme) => ({
    card_wrapper: {
        border: '1px solid #cfcccc',
        height: '100%',
        maxWidth:'320px',
    },
    price_title: {
        fontSize: '14px',
        fontFamily: 'Roboto, sans-serif',
        color: '#000',
        fontWeight: '600 !important',
        lineHeight: '24px',
        padding: '0px',
        margin: '0px',
    },
    sub_titles: {
        fontSize: '14px',
        fontFamily: 'Roboto, sans-serif',
        color: '#000',
        padding: '0px',
        margin: '0px',
        lineHeight: '20px',
    },
    card_media: {
        backgroundColor: '#f5f5f5',
    },
    card_content: {
        padding: '20px 15px',
        marginTop: '20px',
    },
    card_text: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    more_detail: {
        color: 'red',
        textDecoration: 'underline',
        cursor:'pointer'
    }
}))

function Cards({ image, title, dimension, price, banner, burners, cookingarea }) {
    const classes = myStyles();
    return (
        <div>
            <Card className={classes.card_wrapper}>
                <Box className={classes.card_media}>
                    <img src={image} alt='luqman' width="100%" />
                </Box>
                <Box className={classes.card_content}>
                    <Typography className={classes.card_text}>{title}</Typography>

                    <p className={classes.price_title}>Price:</p>
                    <p className={classes.sub_titles}>{price}</p>
                    <p className={classes.price_title}>Main burners: BTU-per-hour input:</p>
                    <p className={classes.sub_titles}>{banner}</p>
                    <p className={classes.price_title}>Dimensions - Lid Closed (inches):</p>
                    <p className={classes.sub_titles}>{dimension}</p>
                    <p className={classes.price_title}>Total cooking area (square inches):</p>
                    <p className={classes.sub_titles}>{cookingarea}</p>
                    <p className={classes.price_title}>Stainless steel burners:</p>
                    <p className={classes.sub_titles}>{burners}</p>
                    <Link className={classes.more_detail}>More Details</Link>
                </Box>
            </Card>
        </div>
    )
}

export default Cards