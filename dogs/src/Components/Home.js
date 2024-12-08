import React from 'react'
import Feed from './Feed/Feed'
import Head from './Helper/Head'

const Home = () => {
  return (
  <section className='container mainContainer'>
    <Head title="Fotos" description="Uma rede social para cães e gatos fofos."/>
    <Feed/>
  </section>
  )
}

export default Home