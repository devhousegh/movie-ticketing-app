import React from 'react'
import Slideshow from '../../components/reusables/Slideshow'

const SignUp = () => {
  return (
    <main className='w-screen h-screen relative'>
      {/* Slideshow */}
        <section className='w-full h-full'>
          <Slideshow>
              <div className="w-full h-full z-[20] absolute top-0 left-0 text-white p-5 flex">
                {/* Text */}
                <section className='w-[50%]'>
                  <p>Sign Up to access</p>
                </section>
                {/* Form */}
                <section className='p-5 h-full w-[50%]'>
                  <h1>Form</h1>
                </section>
              </div>
          </Slideshow>
        </section>
        
    </main>
  )
}

export default SignUp