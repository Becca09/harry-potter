import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Container from './Container';

const Navbar = () => {
    const router = useRouter();
    const [showNav, setShowNav] = useState(false);

    return (
        <Container>

            <div>
                <div className='flex flex-row justify-between px-4 py-7 '>
                    <h1 onClick={() => { router.push("/") }} className='font_bold secondary_text_color text-3xl cursor-pointer'>WIZARDS!</h1>
                    <div className={`sm:block ${showNav ? 'hidden' : ''}`}>
                        <ul className='flex lg:flex-row flex-col primary_text_color cursor-pointer'>
                            <li onClick={() => { setShowNav(false); router.push("/") }} className="mr-10 lg:border-0 border-b-2 lg:p-o pb-2 ">Home</li>
                            <li onClick={() => { setShowNav(false); router.push("/wizard") }} className="mr-10 lg:border-0 border-b-2 lg:p-o pb-2 ">Wizards</li>
                            <li onClick={() => { setShowNav(false); router.push("/spell") }} className="mr-10 lg:mt-0  mt-10  lg:border-0 border-b-2 lg:p-o pb-2   ">Spells</li>
                            <li onClick={() => { setShowNav(false); router.push("/elixir") }} className='lg:mt-0 mt-10 lg:border-0 border-b-2 lg:p-o pb-2 lg:mr-0 mr-10'>Elixirs</li>

                        </ul>
                    </div>

                </div>
                <div className="block sm:hidden">
                    <button onClick={() => setShowNav(!showNav)} className="flex items-center px-3 py-2 rounded text-primary_text_color hover:text-white hover:border-white">
                        {!showNav ?
                            <p className='font-bold secondary_text_color text-2xl mb-10'>X</p> :
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>}
                    </button>
                </div>

            </div>

        </Container>

    )
}

export default Navbar
