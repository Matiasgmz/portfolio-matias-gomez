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
            "description": "J'ai développé en autonomie une application d’émargement chez JMSA, facilitant la gestion des formations. Elle propose un système de signature électronique, calcule les heures de présence, intègre un planning des formations, permet des réclamations, référence les compétences des formateurs et envoie des emails automatiquement.",
            "link": "https://extranet-jmsa.fr",
            'techno': ['PHP', 'Javascript', 'HTML', 'CSS', 'MySQL']
        },
        {
            "image": [
                "screenshot_projet_3/Screenshot_1.png",
                "screenshot_projet_3/Screenshot_2.png", 
            ],
            "title": "Générateur QR Code",
            "description": "J'ai conçu ce site de génération de QR Codes parce que j’en avais assez de visiter des plateformes remplies de publicités et exigeant une inscription. Ce projet me permet de proposer un service simple et gratuit pour créer des QR Codes personnalisés pour une URL, un message, un email ou un numéro, sans contraintes ni distractions.",
            "link": "https://generate-qrcode-weld.vercel.app/",
            'techno': ['Javascript', 'HTML']
        },
        {
            "image": [
                "screenshot_projet_4/Screenshot_1.png",
                "screenshot_projet_4/Screenshot_2.png",
                "screenshot_projet_4/Screenshot_3.png",
            ],
            "title": "Prédictions JO 2024",
            "description": "Dans le cadre d'un projet collaboratif avec des camarades de différents campus à travers la France, nous avons développé une intelligence artificielle capable de prédire les résultats des Jeux Olympiques. Notre équipe a conçu un modèle de prédiction entraîné à partir d'un dataset répertoriant tous les résultats des JO, afin d'estimer le nombre de médailles remportées par pays. Le projet inclut un notebook pour l’entraînement du modèle ainsi qu’un site web permettant d’afficher et de visualiser ces données de manière interactive.",
            "link": "https://hackathon-mia-6.vercel.app/",
            'techno': ['React', 'Python', 'Jupyter Notebook', 'Scikit-learn', 'Pandas', 'Numpy', "fastA"]
        },
        {
            "image": [
                "screenshot_projet_2/Screenshot_1.png",
                "screenshot_projet_2/Screenshot_2.png",
                "screenshot_projet_2/Screenshot_3.png",
                "screenshot_projet_2/Screenshot_4.png",
                "screenshot_projet_2/Screenshot_5.png",
            ],
            "title": "Formecontact",
            "description": "J'ai dévellopé en autonomie une application d’émargement chez Forme, pour simplifier la gestion des formations. Cette application inclut un système de signature électronique, calcule les heures de présence des étudiants, intègre un planning, gère la paye, permet l’évaluation des compétences, génère des documents, propose un planning de formation et envoie des emails automatiquement.",
            "link": "https://extranet-jmsa.fr",
            'techno': ['PHP', 'Javascript', 'HTML', 'CSS', 'MySQL']
        },
        {
            "image": [
                "screenshot_projet_5/Screenshot_1.png",
                "screenshot_projet_5/Screenshot_2.png",
                "screenshot_projet_5/Screenshot_3.png",
                "screenshot_projet_5/Screenshot_4.png",
            ],
            "title": "F1 Results",
            "description": "Je développe ce site pour offrir une plateforme claire où les passionnés de Formule 1 peuvent consulter facilement les résultats, directement issus d'une API open source. Le site permet également de comparer les performances des saisons passées, offrant un aperçu détaillé de l’évolution des équipes et des pilotes au fil des années.",
            "link": "https://f1-results.vercel.app/",
            'techno': ['React', 'API']
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
                <h2 className="mt-5 text-center">Mes projets</h2>
                <div className="slider-container mb-5">
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