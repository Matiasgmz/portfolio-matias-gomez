import React from 'react'
import Slider from "react-slick";

export default function CarrouselCardProjet(image) {
    const imageArray = Object.values(image.image);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {imageArray.map((img, index) => (
                    console.log(img),
                    <div key={index}>
                        <img className='w-100' src={`${process.env.PUBLIC_URL}/${img}`} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
