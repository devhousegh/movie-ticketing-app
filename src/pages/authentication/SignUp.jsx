import React from 'react'
import Slideshow from '../../components/reusables/Slideshow'

const SignUp = () => {
  return (
    <main className='flex items-center h-screen'>
      {/* Slideshow */}
        <section className='w-[50%]'>
          <Slideshow>
            <div className="z-[20] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-5">
              <p>Sign Up to access</p>
            </div>
          </Slideshow>
        </section>
        {/* Form */}
        <section className='w-[50%] p-5 h-full'>
            <h1>Form</h1>
        </section>
    </main>
  )
}

export default SignUp