// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HERO } from "@/constants";
import React from "react";
import SearchForm from "./SearchForm";
const Hero = () => {
  return (
    <div className=" hero flex min-h-screen items-center justify-center" id="Hero">
      <div className=" gap-5 flex max-w-4xl flex-col items-center justify-center">
        <div className="space-y-4">
          <h1 className=" m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl">
            Discover Your Ideal Home
            <span className="m-4 text-center text-4xl text-white md:text-5xl lg:text-6xl">
              {" "}
              here!
            </span>
          </h1>

          <p className=" text-white text-center">
            Discover your dream home with our realstate services. whether you are
            looking to buy, sell, or rent, we are here to
            <br />
            <span className="text-white ">
              {" "} 
              help.</span>
          </p>
        </div>
        <SearchForm/>
      </div>
      
    </div>
  );
};

export default Hero;

// <h5>Discover your dream home with our realstate services. whether you're looking to buy, sell, or rent, we're here to</h5>
// <span>help.</span>
// <div className=''></div>
