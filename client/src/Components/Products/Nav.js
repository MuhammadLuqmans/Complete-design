import { AppBar, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const myStyles = makeStyles((theme)=>({
    nav_item:{
        color:"#fff",
        textDecoration:'none',
        fontSize:'16px',
        fontWeight:'bold',
        fontFamily:'Dosis, sans-serif !important',
        '& svg':{
            fill:'#fff !important',
        }
    },
    item_container:{
        width:'750px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:'30px',
    },
    main_contaienr:{
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'#000',
        margin:'auto',
        maxWidth:'1345px',
    },
    sec_Nav:{
        padding:'7px 40px',
    },
    nav_btn:{
        backgroundColor:'red',
        display:'flex',
        padding:'3px 30px',
        fontSize:'16px',
        fontWeight:'bold',
        wordSpacing:'0.08em',
        textTransform:'capitalize',
        alignItems:'center',
        color:'#fff',
        borderRadius:'4px',
        border:'none',
        cursor:'pointer',
    },
    sticky_appbar:{
        position:'fixed',
        top:50,
        right:0,
        left:0,
        width:'100%',
        zIndex:1,
    },
    Normal_nav:{
        position:'relative',
        backgroundColor:'#000',
        borderBottom:'4px solid red',
        padding:'5px 0px'
    }
}))

const CardNav = ( )=>{
const classes = myStyles()

    return(
        <div className={classes.Normal_nav} id="sub_nav">
        <div className={classes.sec_Nav}>
        <div className={classes.main_contaienr}>
        <div className={classes.item_container}>
        <Link to="#" className={classes.nav_item}>Overview</Link>
        <Link to="#" className={classes.nav_item}>Features</Link>
        <Link to="#" className={classes.nav_item}>Specifications</Link>
        <Link to="#" className={classes.nav_item}>Reviews</Link>
        <Link to="#" className={classes.nav_item}>Owner Support</Link>
        </div>
        <Link to="#" className={classes.nav_item}><button variant='contained' color='primary' className={classes.nav_btn}>Add to Cart<img src="./assets/Product/cart.svg" alt="cart" width='30' style={{ marginLeft:'10px'}} /></button></Link>
        </div>
        </div>
        </div>
    )
}
export default CardNav