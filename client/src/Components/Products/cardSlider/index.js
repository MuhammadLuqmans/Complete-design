import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box, Link } from '@material-ui/core'
import { CardData } from './Data';

const myStyles = makeStyles((theme) => ({
    content_card: {
        color: '#000',
        padding: '30px',
        [theme.breakpoints.down('sm')]:{
            padding: '10px 7px',
        },
        [theme.breakpoints.down('xs')]:{
            padding: '10px 7px',
        }
    },
    mySlider_card:{
        marginTop:'50px',
        height:'500px !important',
        width:'90%',
        margin:'auto',
        overflowX:'hidden',
        [theme.breakpoints.down('md')]:{
            height:'455px !important'
        },
        [theme.breakpoints.down('sm')]:{
            maxHeight:'450px !important'
        },
        [theme.breakpoints.down('xs')]:{
            maxHeight:'440px !important'
        }
    },
    content_title: {
        fontSize: '20px',
        fontWeight:'bold',
        fontFamily: 'Roboto slab',
        color: '#000',
        padding: '0px',
    },
    content_desc: {
        fontFamily: 'Roboto, sans-serif',
        marginTop:'15px',
    },
    title_bottom:{
        border:'1px solid #f6f6f6f',
        background:'#cfcccc',
        fontSize:'14px',
        fontFamily:'Roboto, sans-serif',
        fontWeight:'bold',
        color:'#000',
        textAlign:'center'
    },
    media_box:{
        display:'flex',
        justifyContent:'end',
        marginTop:'-6em',
        overflow:'hidden',
        marginBottom:'-3em'
    },
    Card_media:{
        width:'80%',
        height:'80%',
        marginRight:'-5em',
        backgroundAttachment:'fixed',
    },
    mySlider_Links:{
        color:'#000',
        lineHeight:'40px',
        paddingBottom:'5px',
        borderBottom:'1px solid red',
        fontFamily:'Roboto, sans-serif',
        fontSize:'14px',
        textDecoration:'none !important',
        fontWeight:'bold',
        '&:hover':{
            color:'red',
        }
    },
    mySlider_btns:{
        fontSize:'16px',
        color:'#fff',
        fontWeight:'normal',
        backgroundColor:'red',
        width:'200px !important',
        padding:'10px 25px',
        fontFamily:'Roboto, sans-serif',
        borderRadius:'6px',
        cursor:'pointer',
        boxShadow:'2px 3px 4px #a99f9f',
        margin:'20px 0px'
    },
    prev_btn:{
        position:'absolute',
        zIndex:'1',
        marginTop:'16em',
        left:'40px',
    },
    next_btn:{
        position:'absolute',
        zIndex:'1',
        marginTop:'16em',
    },
}))

export default function SmallCarousel() {
    const [sliderRef, setSliderRef] = useState(null);
    const classes = myStyles();


    const sliderSettings = {
        slidesToShow: 3,
        centerPadding: '10px',
        slidesToScroll: 1,
        dots:true,
        infinite:false,
        speed: 500,
        loop:false,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }

    return (
        <div className={'content' , classes.mySlider_card}>
            <div className='controls'>
                <button onClick={sliderRef?.slickPrev} className={classes.prev_btn} >
                    <img src='./assets/left-arrow.svg' alt="prevArrow" />
                </button>
                <button onClick={sliderRef?.slickNext} className={classes.next_btn}>
                    <img src='./assets/right-arrow.svg' alt="prevArrow" /> 
                </button>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings} className="slider variable-width">
                {CardData.map((card, index) => (
                    <div key={index} className='card'>
                        <Box className={classes.content_card}>
                            <Typography className={classes.content_title}>{card.title}</Typography>
                            <Typography className={classes.content_desc}>$ {card.price}</Typography>
                            <br />
                            <Link to="#" className={classes.mySlider_btns} variant='contained'>Add to Cart</Link>
                            <br />
                            <br />
                            <Link to="#" className={classes.mySlider_Links} variant='contained'>View Product Detail</Link>
                        </Box>
                        <Box className={classes.media_box}>
                        <img src={card.img} alt={card.title} className={classes.Card_media} />
                    </Box>
                        </div>
                ))}
            </Slider>
        </div>
    )
}