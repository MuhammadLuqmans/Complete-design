import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from './cards/LargCards'
import Banner from './Banner'
// import Cards from './cards/smallCards'

const myStyles = makeStyles((theme) => ({
    mainTitle_cards:{
        fontSize:'38px',
        lineHeight:'48px',
        color:'#000',
        fontWeight:'bold',
        fontFamily:'Poppins, sans-serif',
        textAlign:'center',
        marginBottom:'20px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'28px',
        }
    },
    main_Cards_links:{
        marginTop:'70px',
        padding:'16px',
    }
}))

function BodyCards() {
    const classes = myStyles()
    return (
        <div>
        <div className={classes.main_Cards_links}>
            <Typography className={classes.mainTitle_cards}>Shop By Grill Type</Typography>
            <Grid item xs={12} style={{ maxWidth:'900px',margin:'auto' }}>
            <Grid item xs={12} sm={12}>
            <Card 
            title='Gas Grills'
            price='Starting at $459'
            btn='Shop Gas Grills'
            img='./assets/Allproducts/largeCard.jpg'
            />
            </Grid>
            </Grid>
            <Grid item container style={{ maxWidth:'900px',justifyContent:'space-between',margin:'auto' }}>
            <Grid  item xs={12} sm={12} md={6} style={{ paddingRight:'7.5px',paddingTop:'25px' }}>
            <Card
            title='Charcoal Grills'
            price='Starting at $109'
            btn='Shop Charcoal'
            img='./assets/Allproducts/smallcard1.jpg'
            />
            </Grid>
            <Grid  item xs={12} sm={12} md={6} style={{ paddingLeft:'7.5px',paddingTop:'25px' }}>
            <Card
            title='Electric Grills'
            price='Starting at $299'
            btn='Shop Electric'
            img='./assets/Allproducts/smallcard2.jpg'
            />
            </Grid>
            </Grid>
            {/*second container*/}
            <Grid item xs={12} style={{ maxWidth:'900px',margin:'auto' }}>
            <Grid item xs={12} sm={12} style={{ marginTop:'40px' }}>
            <Card 
            title='Wood Pellet Grills'
            price='Grills Starting at $999'
            btn='Shop Wood Pellet'
            img='./assets/Allproducts/largeCard2.jpg'
            />
            </Grid>
            </Grid>
            <Grid item container style={{ maxWidth:'900px',justifyContent:'space-between',margin:'auto' }}>
            <Grid  item xs={12} sm={12} md={6} style={{ paddingRight:'7.5px',paddingTop:'25px' }}>
            <Card
            title='Portable Gas Grills'
            price='Starting at $82'
            btn='Portable Gas'
            img='./assets/Allproducts/smallcard3.jpg'
            />
            </Grid>
            <Grid  item xs={12} sm={12} md={6} style={{ paddingLeft:'7.5px',paddingTop:'25px' }}>
            <Card
            title='Portable Charcoal Grills'
            price='Starting at $41.99'
            btn='Portable Charcoal'
            img='./assets/Allproducts/smallcard4.jpg'
            />
            </Grid>
            </Grid>
        </div>
        </div>
    )
}

export default BodyCards