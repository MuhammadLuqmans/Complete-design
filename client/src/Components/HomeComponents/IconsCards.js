import { Link } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const IconsCard = ({title , Images,Disc , Links})=> {
    const classes = myStyles()
    return(
        <div>
        <div className={classes.Icons_Card_Div}>
        <img src={Images} alt='main' width="50" className={classes.IconsCard_Img} />
        <p className={classes.Icons_Image_title}>{title}</p>
        <p className={classes.IconsCard_discription}>{Disc}</p>
        <Link href={Links} className={classes.IconsCard_buttons}>Learn More</Link>
        </div>
        </div>
    )
}
export default IconsCard;

const myStyles = makeStyles((theme)=>({
    Icons_Image_title:{
        fontSize:20,
        fontWeight:600,
        color:"#000",
        marginTop:5,
    },
    Icons_Card_Div:{
        maxWidth:300,
        textAlign:"center",
        margin:"auto",
    },
    IconsCard_buttons:{
        cursor:'pointer',
    }
}))