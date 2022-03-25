import React from 'react'
import { Card , Box , Typography, FormControlLabel,Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles((theme)=>({
    set_card:{
        border:'1px solid #d6d5d5',
        color:'#000',
        display:'flex',
        justifyContent:'space-between',
        maxWidth:'100%',
        padding:'10px',
    },
    card_img:{
        padding:'1px 4px',
        alignItems:'center',
        display:'flex',
        width:'200px',
    },
    card_content:{
        padding:'0px 10px',
        alignItems:'center',
        display:'flex',
    },
    media:{
        backgroundColor:'#f2f3f4',
    },
    card_Title:{
        fontSize:'14px',
        color:'#000',
        fontWeight:'600',
        fontFamily:'Readex Pro, sans-serif',
        letterSpacing:'0.05em',
    },
    card_Price:{
        fontSize:'20px',
        fontWeight:'600',
        color:'#000',
        fontFamily:'Roboto',
    },
    check_Box:{
        '& .MuiTypography-body1':{
            color:'#000',
            fontSize:'14px',
            fontWeight:'600',
            fontFamily:'Roboto slab',
        }
    }
}))

const SetCards = () =>{
    const classes = myStyles()

    return(
        <Card className={classes.set_card}>
        <Box className={classes.card_img}>
        <img src='./assets/Product/item2.png' width='100%' alt="ket_card" className={classes.media} />
        </Box>
        <Box className={classes.card_content}>
        <div>
        <Typography className={classes.card_Title}>Webber Traveler Reversible Prep & Serve Board</Typography>
        <Typography className={classes.card_Price}>$33.99</Typography>
        <FormControlLabel control={<Checkbox style={{ color:'#000' }} />} label="Add on" className={classes.check_Box} />
        </div>
        </Box>
        </Card>
    )
}
export default SetCards;