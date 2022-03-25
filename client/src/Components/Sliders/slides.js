import React from "react";
import Slider from "react-slick";
import { Grid ,Card } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
 
const myStyles = makeStyles((theme)=>({
	Slider_Grid:{
		border:'2px solid #red',
		padding:'0px 3%',
	}
}))

export default function Sliders() {
	const classes = myStyles()
	const data = [1,2,3,4,5,6,7,8,9,10,11]
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src='./assets/left-arrow.svg' alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src='./assets/right-arrow.svg' alt="nextArrow" {...props} />
  );
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    };
    return (
     <div className="card__container">
   <h1>luqman</h1>
   <Grid item xs={12} className={classes.Slider_Grid}>
 <Slider {...settings} className="card__container--inner">
          {data.map((item, index) => {
            return (
              <Card
              className="card__container--inner--card"
              key={index}>
              {item}
                <p>Meghalaya Backpacking</p>
                <p>starts at <span>₹15,999/-</span></p>
              </Card>
            );
          })}
        </Slider>
		</Grid>
     </div>
       
    );
  }
