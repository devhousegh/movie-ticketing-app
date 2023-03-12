import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay,EffectFade} from "swiper";

function Slideshow({children}) {
  const movies = useContext(AppContext)
  return (
    <main>
        <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectFade]}
        className="w-full h-full"
        >
                {movies.map(movie=>{
                    return(
                        <SwiperSlide key={movie.id} className='relative'>

                           <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                            alt={movie.original_title}
                            className='w-full h-screen object-cover'/>

                            <div className="absolute z-[10] top-0 left-0 bg-black w-full h-full opacity-70"/>
                                {children}
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    </main>
  )
}

export default Slideshow