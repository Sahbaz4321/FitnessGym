import React from 'react'
import '../css/Hero.css';

export default function Hero() {
  return (

    <section className='hero py-5 bg-light overflow-hidden'>
        <div className="container-fluid text-start ms-2">
            <div className="mb-4 ">
                <h1 className='display-4 mt-5 text-white fw-bold'>LET'S</h1>
                <h1 className='display-4 text-white fw-bold'>Get</h1>
                <h1 className='display-4 text-white fw-bold'>MOVING</h1>

            </div>
            <div className="mb-4">
                <p className='lead para  text-white '>Your Journey to Fitness Starts Here</p>
                <p className='lead para'>Unleash Your Potential</p>
            </div>

            <div className="d-flex flex-wrap gap-3">
                <button className='btn btn-outline-primary btn-lg'>Start Your Journey</button>
                <button className='btn btn-primary btn-lg'>Discover Your Plans</button>
            </div>
        </div>
    </section>

  )
}
