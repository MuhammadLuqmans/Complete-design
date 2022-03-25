import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Grill.css";

const Data = [
  {
    title: "Gas Grills",
    image:
      "https://www.weber.com/dw/image/v2/ABCN_PRD/on/demandware.static/-/Library-Sites-library-na/default/dwcd094d98/images/homepage/12_Genesis_300x300.jpg",
    images:
      "https://dw-images.weber.com/images/homepage/Traveler_B_On_300x300_15.jpg?auto=compress,format",
  },
  {
    title: "Charcoal Grills",
    image:
      "https://dw-images.weber.com/images/homepage/Kettle_On_300x300_15.jpg?auto=compress,format",
    images:
      "https://dw-images.weber.com/images/homepage/Traveler_B_On_300x300_15.jpg?auto=compress,format",
  },
  {
    title: "Wood Pellet Grills",
    image:
      "https://dw-images.weber.com/images/homepage/SmokeFire_B_On_300x300_15.jpg?auto=compress,format",
    images:
      "https://dw-images.weber.com/images/homepage/Traveler_B_On_300x300_15.jpg?auto=compress,format",
  },
  {
    title: "Electric Grills",
    image:
      "https://dw-images.weber.com/images/homepage/Pulse_B_On_300x300_15.jpg?auto=compress,format",
    images:
      "https://dw-images.weber.com/images/homepage/Traveler_B_On_300x300_15.jpg?auto=compress,format",
  },
  {
    title: "Portable Grills",
    image:
      "https://dw-images.weber.com/images/homepage/Traveler_B_On_300x300_15.jpg?auto=compress,format",
    images:
      "https://dw-images.weber.com/images/homepage/Traveler_B_On_300x300_15.jpg?auto=compress,format",
  },
];

class HomeSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      // nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        
      </div>
    );
  }
}

export default HomeSlider;



// <Slider {...settings}>
//           {Data.map((data) => {
//             return (
//               <div key={data} style={{ display:"flex-box",alignItems:"center"}}>
//                 <div
//                   style={{
//                     backgroundImage: `url(${data.image})`,
//                     height: "300px",
//                     backgroundRepeat: "no-reapet",
//                     backgroundSize: "cover",
//                     border: "0px solid #fff",
//                   }}
//                 >
//                   <div style={{ backgroundColor:"#ffffff59",marginTop:"130px"}}>
//                     <p style={{ color:"#000",fontWeight:"700",fontSize:"32px" , alignItems:"center",margin:"center",display:"flex-box",textAlign:"center"}}>
//                       {data.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>