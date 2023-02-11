import PageHead from '@/components/common/Head'
import Container from '@/components/common/layouts/Container'
import Navbar from '@/components/common/layouts/Navbar'
import Intro from '@/components/modules/landingPage/Intro'
import { NextPage } from 'next'
import Head from 'next/head'


const Home:NextPage =()=> {

  return (
    <>
      <PageHead title='Home' description='Landing page'/>
      <div className='primary_bg_color' style={{minHeight:"100vh"}}>
        <Navbar />
        <Intro/>
      </div>

    </>
  )
}

export default Home;