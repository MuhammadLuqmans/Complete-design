import { Typography, Button, Box, Grid } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { styled } from '@mui/styles'

const myStyles = makeStyles((theme )=>({
    main_div:{
        padding:'0px',
        height:'380px',
        backgroundSize:'cover',
        maxWidth:'280px',
        margin:'0px 30px',
        border:'2px solid transparent'
    },
    title_card:{
        color:'#000',
        fontSize:'20px',
        fontWeight:'bold',
        fontFamily:'Roboto Slab',
        marginTop:'30px',
    },
    sub_title_card:{
        fontSize:'14px',
        color:'#000',
        fontWeight:'600',
        margin:'5px 0px',
        lineHeight:'28px !important',
    },
    button_card:{
        background:'red',
        color:'#fff',
        position:'static',
        padding:'6px 20px',
        fontWeight:'bold',
        fontSize:'14px',
        marginTop:'10px',
    }
}))

function Card({title , price , img,btn}) {
    const classes = myStyles();
  return (
      <MYdiv background={`url(${img})`}>
      <Box className={classes.main_div}>
      <Grid item>
    <Typography className={classes.title_card}>{title}</Typography>
    <Typography className={classes.sub_title_card}>{price}</Typography>
    <Button variant='contained' className={classes.button_card}>{btn}</Button>
    </Grid>
    </Box>
    </MYdiv>
  )
}

export default Card


const MYdiv = styled(Box)(props=>({
color:'#000',
backgroundImage:props.background,
backgroundSize:'cover',
backgroundPosition:'center',
margin:'auto',
backgroundRepeat:'no-repeat',
'&:hover': {
    
    }
}))