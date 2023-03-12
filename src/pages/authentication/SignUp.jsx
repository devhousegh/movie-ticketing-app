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
                <section className='w-[50%] relative'>
                  <section className='w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <p className='text-5xl text-center'>Sign Up to access all the latest trailer and cinema ticketing information</p>
                  </section>
                </section>
                {/* Form */}
                <section className='p-5 h-full w-[50%] relative'>
                  <section className='w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5'>
                    
                   
                      <form>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email" class="block py-3 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-60 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                      </form>


                  </section>
                </section>
              </div>
          </Slideshow>
        </section>
        
    </main>
  )
}

export default SignUp