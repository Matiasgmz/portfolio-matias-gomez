import React from "react";
import Slider from "react-slick";
import CardProject from "./CardProject";


function ListCardProject() {

    const dataCardProject = [
        {
            "image": [
                "screenshot_projet_1/Screenshot_4.png",
                "screenshot_projet_1/Screenshot_1.png",
                "screenshot_projet_1/Screenshot_2.png",
                "screenshot_projet_1/Screenshot_3.png",
                "screenshot_projet_1/Screenshot_5.png",
            ],
            "title": "Extranet JMSA",
            "description": "Application d’émargement développée en autonomie chez JMSA, facilitant la gestion des formations. Elle propose un système de signature électronique, calcule les heures de présence, intègre un planning des formations, permet des réclamations, référence les compétences des formateurs et envoie des emails automatiquement.",
            "link": "https://extranet-jmsa.fr",
            'techno': ['PHP', 'Javascript', 'HTML', 'CSS', 'MySQL']
        },
        {
            "image": [
                "screenshot_projet_3/Screenshot_1.png",
                "screenshot_projet_3/Screenshot_2.png",
            ],
            "title": "Générateur QR Code",
            "description": "Cette application permet de générer gratuitement et simplement des QR Codes pour une URL, un message, un email ou un numéro.",
            "link": "https://generate-qrcode-weld.vercel.app/",
            'techno': ['Javascript', 'HTML']
        },
        {
            "image": [
                "screenshot_projet_2/Screenshot_1.png",
                "screenshot_projet_2/Screenshot_2.png",
                "screenshot_projet_2/Screenshot_3.png",
                "screenshot_projet_2/Screenshot_4.png",
                "screenshot_projet_2/Screenshot_5.png",
            ],
            "title": "Prédictions JO 2024",
            "description": "Dans le cadre d'un projet collaboratif avec des camarades de différents campus à travers la France, nous avons développé une intelligence artificielle capable de prédire les résultats des Jeux Olympiques. Notre équipe a conçu un modèle de prédiction entraîné à partir d'un dataset répertoriant tous les résultats des JO, afin d'estimer le nombre de médailles remportées par pays. Le projet inclut un notebook pour l’entraînement du modèle ainsi qu’un site web permettant d’afficher et de visualiser ces données de manière interactive.",
            "link": "https://hackathon-mia-6.vercel.app/",
            'techno': ['React', 'Python', 'Jupyter Notebook', 'Scikit-learn', 'Pandas', 'Numpy', "fastA"]
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
            "description": "Application d’émargement développée en autonomie chez JMSA, facilitant la gestion des formations. Elle propose un système de signature électronique, calcule les heures de présence, intègre un planning, permet des réclamations, référence les compétences des formateurs et envoie des emails automatiquement.",
            "link": "https://extranet-jmsa.fr",
            'techno': ['PHP', 'Javascript', 'HTML', 'CSS', 'MySQL']
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
            "description": "Application d’émargement développée en autonomie chez JMSA, facilitant la gestion des formations. Elle propose un système de signature électronique, calcule les heures de présence, intègre un planning, permet des réclamations, référence les compétences des formateurs et envoie des emails automatiquement.",
            "link": "https://extranet-jmsa.fr",
            'techno': ['PHP', 'Javascript', 'HTML', 'CSS', 'MySQL']
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
                                <CardProject image={card.image} title={card.title} description={card.description} link={card.link} techno={card.techno} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ListCardProject;