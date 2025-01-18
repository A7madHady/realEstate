import React from "react";
import { SERVICES_TEXT } from "@/constants";
import Image from "next/image";
const Services = () => {
  return (
    <div className="container mx-auto my-8 border-b pb-10" id="Services">
      <h2 className="mb-20 text-center text-3xl  sm:text-4xl lg:text-5xl ">
        Services
      </h2>

      <div>
        <div className="grid grid-cols-2 sm:items-center">
          <div>
            <Image
              className="rounded-xl object-cover"
              src="/service.jpeg"
              width={500}
              height={500}
              alt="Services"
            />
          </div>

          <div className="" >
            <h2 className="text-5xl lg:text-6xl">
                WE are
                <br />
                <span className="text-6xl -mt-10">available in</span>
                 </h2>
            
           
            <span className="text-7xl font-bold">40+ Countries</span>
            <div className="py-6 text-lg max-w-xl">{SERVICES_TEXT}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
