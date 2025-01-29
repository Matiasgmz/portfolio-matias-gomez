import React from 'react'
import ListCardProject from '../components/ListCardProject'
import AboutMe from '../components/AboutMe'
import Hobbies from '../components/Hobbies'
import Title from '../components/Title'
import Skills from '../components/Skills'

export default function Homepage() {
    return (
        <>
            <section>
                <Title />
            </section>
            <section className='mt-5'>
                <AboutMe />
            </section>
            <hr />

            <section id='listCardProject' className='p-0'>
                <ListCardProject />
            </section>

            {/* <hr />
            <section className='mt-5'>
                <Hobbies />
            </section>

            <hr />
            <section className='mt-5'>
                <Skills />  
            </section> */}
        </>
    )
}