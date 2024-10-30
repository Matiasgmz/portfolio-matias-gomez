import React from "react";
import Slider from "react-slick";
import CardProject from "./CardProject";


function ListCardProject() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="row">

                <h2>Mes projets</h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                        <div>
                            <CardProject />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ListCardProject;