import React from 'react';
import Me from '../assets/img/photo_profil.jpg';
import MeHover from '../assets/img/photo_profil_hover.jpg';

export default function AboutMe() {
    const birthDate = new Date('1997-12-16');

    const calculateAge = (birthDate) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div className='container'>
            <div className="row justify-content-around">
                <h2 className='mb-5'>À propos de moi</h2>
                <div id='containerPhoto' className='col-12 col-xl-4'>
                    <img id='photoProfil' src={Me} alt="" />
                    <img id='photoProfilHover' src={MeHover} alt="" />
                    <p className='mt-3 fw-bold'>Matias GOMEZ
                        <br />
                        {calculateAge(birthDate)} ans
                        <br />
                        <a href="tel: 07 50 45 53 64">07 50 45 53 64</a>
                        <br />
                        <a href="mailto:matias.gmz@icloud.com">matias.gmz@icloud.com</a> 
                    </p>
                </div>
                <div id='containerTextAbout' className='col-12 col-xl-8'>
                    <p>
                        Je suis <b>développeur web full-stack</b>, passionné par l'informatique et la technologie depuis mon enfance. Après une première expérience professionnelle, j’ai décidé de me reconvertir dans le développement pour transformer cette passion en métier. Pendant mes trois ans d'alternance, j'ai eu la chance de travailler sur des projets enrichissants dans deux centres de formation. J'ai développé des applications web permettant de gérer des aspects clés de la formation, comme la signature des feuilles d’émargement, le référentiel de compétences, le suivi des heures des étudiants, la génération de documents, et le planning des utilisateurs. Cette expérience m’a permis de gagner en autonomie et en compétences, tout en me donnant l’occasion de faire preuve d’initiative et de créativité.
                    </p>

                    <p>
                        Je viens de terminer un master en <b>développement, big data et intelligence artificielle</b>, une formation qui m'a apporté des compétences avancées et m'a permis d'échanger avec des professionnels et des camarades passionnés, toujours en quête d'innovation. Autonome et adaptable, je suis à l'aise pour travailler seul ou en équipe, et je m’efforce de proposer des solutions optimisées pour répondre au mieux aux besoins des clients et améliorer constamment les projets sur lesquels je travaille.
                    </p>

                    <p>
                        Je profite aujourd’hui du temps dont je dispose pour continuer d’apprendre de nouvelles technologies et notamment enrichir mes connaissances en <b>analyse de données</b> et en intelligence artificielle.
                    </p>
                </div>
            </div>
        </div>
    );
}