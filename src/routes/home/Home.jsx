import React from 'react'
import "./home.scss"
import Searchbar from '../../components/searchbar/Searchbar'

export default function Home() {
  return (
    <div className='homepage'>
      <div className="textcontainer">
        <div className="wrapper">
          <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus reprehenderit dignissimos aspernatur dolor quibusdam, ratione sint, placeat possimus nobis officia minus sit, odio beatae.
          Odit autem quasi quibusdam rerum quasi eius!
          </p>  
          <Searchbar/>
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  )
}
