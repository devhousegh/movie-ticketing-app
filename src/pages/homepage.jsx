import React from "react";
import Slideshow from "../components/reusables/Slideshow";
import Navbar from "../components/navigation/Navbar";
import HomepageItems from "../components/pageItems/homepageItems";

function Homepage() {
  return (
    <main>
      <Slideshow>
        <div className="z-[20] absolute top-0 left-0  w-full h-screen">
          <>
            <div className="w-full h-full py-7 px-10 z-[100]">
              <Navbar />
            </div>
          </>
        </div>

        <HomepageItems />
      </Slideshow>
    </main>
  );
}

export default Homepage;
