import React from "react";
import Slider from "react-slick";
import CardProject from "./CardProject";


function ListCardProject() {

    const dataCardProject = [
        {
            "image": [
                "screenshot_projet_1/Screenshot_1.png",
                "screenshot_projet_1/Screenshot_2.png",
                "screenshot_projet_1/Screenshot_3.png",
                "screenshot_projet_1/Screenshot_4.png",
                "screenshot_projet_1/Screenshot_5.png",
            ],
            "title": "Extranet JMSA",
            "description": "Application d’émargement développée en autonomie chez JMSA, facilitant la gestion des formations. Elle propose un système de signature électronique, calcule les heures de présence, intègre un planning, permet des réclamations, référence les compétences des formateurs et envoie des emails automatiquement.",
            "link": "https://extranet-jmsa.fr"
        },
        {
            "image": [
                "screenshot_projet_1/Screenshot_1.png",
                "screenshot_projet_1/Screenshot_2.png",
                "screenshot_projet_1/Screenshot_3.png",
                "screenshot_projet_1/Screenshot_4.png",
                "screenshot_projet_1/Screenshot_5.png",
            ],
            "title": "Extranet JMSA",
            "description": "Description projet 1",
            "link": "https://www.google.com"
        },
        {
            "image": [
                "screenshot_projet_1/Screenshot_1.png",
                "screenshot_projet_1/Screenshot_2.png",
                "screenshot_projet_1/Screenshot_3.png",
                "screenshot_projet_1/Screenshot_4.png",
                "screenshot_projet_1/Screenshot_5.png",
            ],
            "title": "Extranet JMSA",
            "description": "Description projet 1",
            "link": "https://www.google.com"
        },
        {
            "image": [
                "screenshot_projet_1/Screenshot_1.png",
                "screenshot_projet_1/Screenshot_2.png",
                "screenshot_projet_1/Screenshot_3.png",
                "screenshot_projet_1/Screenshot_4.png",
                "screenshot_projet_1/Screenshot_5.png",
            ],
            "title": "Extranet JMSA",
            "description": "Description projet 1",
            "link": "https://www.google.com"
        },
        {
            "image": [
                "screenshot_projet_1/Screenshot_1.png",
                "screenshot_projet_1/Screenshot_2.png",
                "screenshot_projet_1/Screenshot_3.png",
                "screenshot_projet_1/Screenshot_4.png",
                "screenshot_projet_1/Screenshot_5.png",
            ],
            "title": "Extranet JMSA",
            "description": "Description projet 1",
            "link": "https://www.google.com"
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
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
                        {dataCardProject.map((card, index) => (
                            <div key={index}>
                                <CardProject image={card.image} title={card.title} description={card.description} link={card.link} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ListCardProject;