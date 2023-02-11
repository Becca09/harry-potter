import Container from '@/components/common/layouts/Container'
import React from 'react'

const Intro = () => {
    return (
        <Container>
            <div className='flex flex-col font-bold primary_text_color lg:text-3xl  lg:mt-36  mx-7 mt-10  mb-10 py-5'>
                <h1 >Welocome to Wizards, where you can find your </h1>
                <p className='text-left'>Favourite Wizards<span className='secondary_text_color font-extrabold'> .</span> <br /> Favourite Spell <span className='secondary_text_color font-extrabold'>&</span> <br /> Favourite Elixirs<span className='secondary_text_color font-extrabold'> .</span></p>
            </div>
        </Container>
    )
}

export default Intro