import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinearWithValueLabel from './Progress'

const myStyles = makeStyles((theme) => ({
    main_container: {
        padding: '20px',
        maxWidth: '1200px',
        padding: '0% 5% ',
        margin: 'auto',
        justifyContent: 'space-between'
    },
    stars: {
        color: 'red',
        fontSize: '30px',
        textShadow: '2px 2px 4px #cfccfc',
        fontFamily: 'Roboto slab'
    },
    rating_num: {
        color: 'gray', fontWeight: '400', fontSize: '20px', borderRight: '1px solid gray', padding: '0px 10px'
    },
    rating_content: {
        marginLeft: '20px', fontWeight: '400', fontSize: '18px', color: 'gray', fontFamily: 'Roboto, sans-serif'
    },
    review_img: {
        width: '100%',
        maxWidth: '125px',
        marginTop: '25px',
        display: 'block',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    reviews: {
        fontSize: '34px',
        fontFamily: 'Roboto slab',
        color: '#000',
        textDecoration: 'underline red',
        textAlign: 'center',
        fontWeight: '600',
    },
    progerss_container: {
        alignItems: 'center',
    },
    text_progress: {
        fontSize: '18px',
        color: 'gray',
        fontFamily: 'Roboto, sans-serif',
    }
}))

const Reviews = () => {
    const classes = myStyles()
    return (
        <div>
            <Grid item xs={12}>
                <Typography className={classes.reviews}>Reviews</Typography>
            </Grid>
            <Grid item container xs={12} className={classes.main_container}>
                <Grid item xs={12} sm={10} >
                    <Box>
                        <p><span className={classes.stars}>★★★★★</span><strong className={classes.rating_num}>4.6</strong><span className={classes.rating_content}>934 Reviews <br /> 355 out of 386 (92%) reviewers recommend this product</span> </p>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <img src="./assets/Product/reviews.png" className={classes.review_img} alt="reviews" />
                </Grid>
                <Grid item container xs={12} className={classes.progerss_container}>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.text_progress}>Recommend</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <LinearWithValueLabel value={95} />
                    </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.progerss_container}>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.text_progress}>Buyer Regares</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <LinearWithValueLabel value={90} />
                    </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.progerss_container}>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.text_progress}>Contact in Features</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <LinearWithValueLabel value={67} />
                    </Grid>
                </Grid>
                <Grid item container xs={12} className={classes.progerss_container}>
                    <Grid item xs={12} sm={3}>
                        <Typography className={classes.text_progress}>Pawers</Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <LinearWithValueLabel value={80} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Reviews