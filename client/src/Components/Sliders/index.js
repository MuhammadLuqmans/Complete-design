import { useState } from 'react'
import Slider from 'react-slick'
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.css'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import { Data } from './Data';

const myStyles = makeStyles((theme) => ({
    content_card: {
        color: '#000',
        padding: '15px',
        [theme.breakpoints.down('sm')]:{
            padding: '10px 7px',
        },
        [theme.breakpoints.down('xs')]:{
            padding: '10px 7px',
        }
    },
    mySlider_card:{
        height:'750px !important',
        overflowX:'hidden',
        [theme.breakpoints.down('md')]:{
            height:'715px !important'
        },
        [theme.breakpoints.down('sm')]:{
            maxHeight:'650px !important'
        },
        [theme.breakpoints.down('xs')]:{
            maxHeight:'740px !important'
        }
    },
    content_title: {
        fontSize: '20px',
        fontWeight:'bold',
        fontFamily: 'Roboto Slab',
        color: '#000',
        padding: '15px 10px',
        [theme.breakpoints.down('sm')]:{
            padding: '10px 0px',
        },
        [theme.breakpoints.down('xs')]:{
            padding: '5px 00px',
        }
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
    }
}))

export default function Carousel() {
    const [sliderRef, setSliderRef] = useState(null);
    const classes = myStyles();


    const sliderSettings = {
        slidesToShow: 3,
        centerPadding: '20px',
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        autoplay: true,
        dots:true,
        speed: 1000,
        autoplaySpeed: 5000,
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
        <div className={'content' ,classes.mySlider_card}>
            <div className='controls'>
                <button onClick={sliderRef?.slickPrev}>
                    <img src='./assets/left-arrow.svg' alt="prevArrow" />
                </button>
                <button onClick={sliderRef?.slickNext}>
                    <img src='./assets/right-arrow.svg' alt="prevArrow" /> 
                </button>
            </div>
            <Slider ref={setSliderRef} {...sliderSettings} className="slider variable-width">
                {Data.map((card, index) => (
                    <div key={index} className='cards'>
                    
                        <img src={card.img} alt={card.title} className='card-image' />
                        <Box className={classes.content_card}>
                            <Typography className={classes.content_title}>{card.title}</Typography>
                            <ul>
                            <li><Typography className={classes.content_desc}>{card.disc}</Typography></li>
                            <li><Typography className={classes.content_desc}>{card.disc2}</Typography></li>
                            </ul>
                        </Box>
                        <Typography className={classes.title_bottom}>Webbers Grills</Typography>
                    </div>
                ))}
            </Slider>
        </div>
    )
}