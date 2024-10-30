import React from 'react'
import ListCardProject from '../components/ListCardProject'
import AboutMe from '../components/AboutMe'
import Hobbies from '../components/Hobbies'
import Title from '../components/Title'

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

            <section className='my-5'>
                <ListCardProject />
            </section>

            <hr />
            <section className='mt-5'>
                <Hobbies />
            </section>
        </>
    )
}