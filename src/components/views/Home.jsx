
import React from 'react'
import './css/home.css'
import HomeCard from '../card/HomeCard'

export default function Home() {
  return (
    <>
    <main>
    <button className='btnhome btn-lg'>Our Stories</button>
    <div className="inputBox">
        <input type="text" className='form fs-4' placeholder='Search' />
    </div>
    </main>
    <div className='my-5'>
   <HomeCard />
    </div>
    </>
  )
}
