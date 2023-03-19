import React from "react";
import { Link } from "react-router-dom";

const HomepageItems = () => {
  const button = [
    {
      id: 0,
      name: "Log in",
      url: "/Sign-In",
      class:" py-2 px-10 border-2 border-solid border-grey-300 text-gray-300 font-semibold rounded-md"
    },
    {
      id: 1,
      name: "Sign up",
      url: "/Sign-Up",
      class:" py-2 px-10 bg-gray-300 text-slate-800 font-semibold rounded-md "
    },
  ];

  return (
    <>
      <div className="absolute top-[40%] left-10 text-white z-50  ">
        <h1 className="font-bold lg:text-5xl mb-4  ">
          Unlimited movies, <br /> Tv shows, and more.
        </h1>
        <p className="mb-6">
          Join the house and find all upcoming movie trailers and cinema <br />
          ticketing information.
        </p>
        <div className="flex gap-4">
          {button.map((btn) => (
            // <button key={button.id}>
            //   {button.name}
            // </button>
            <Link to={btn.url} className={btn.class} key={btn.id}>
              {btn.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomepageItems;
