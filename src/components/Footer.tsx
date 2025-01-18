import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="container flex">
        <div className="pt-12 pl-20 mr-10">
          <h5>RealEs</h5>
          <p className="lg:w-4/6 text-sm pt-7">
            Your Real Estate Company is dedicated to helping you find the
            perfect home. Whether you are looking to buy, sell, or rent, our team
            of experienced professionals is here to guide you every step of the
            way.
          </p>
          <div className="flex mt-10 mb-10 gap-3.5">
            <FacebookIcon />
            <InstagramIcon />
            <GithubIcon />
            <TwitterIcon />
          </div>
        </div>

        <div className=" gap-4 my-10  grid grid-cols-3 w-full">
          <div className="">
            <h3 className="mb-5">BUY</h3>
            <p className="flex flex-col gap-4">
              <span className="hover:text-neutral-500 cursor-pointer ">Search Properties</span>
              <span className="hover:text-neutral-500 cursor-pointer ">Mortgage Calculator</span>
              <span className="hover:text-neutral-500 cursor-pointer ">Buyer Guide</span>
              <span className="hover:text-neutral-500 cursor-pointer ">Home Buying Tips</span>
              <span className="hover:text-neutral-500 cursor-pointer ">FAQs for Buyers</span>
            </p>
          </div>
          <div className="">
            <h3 className="mb-5">SELL</h3>

            <p className="flex flex-col gap-4">
              <span className="hover:text-neutral-500 cursor-pointer ">List Your Property</span>
              <span className="hover:text-neutral-500 cursor-pointer "> Seller Guide</span>
              <span className="hover:text-neutral-500 cursor-pointer ">Home Selling Tips</span>
              <span className="hover:text-neutral-500 cursor-pointer "> Home Evaluation</span>
              <span className="hover:text-neutral-500 cursor-pointer ">FAQs for Sellers</span>
            </p>
          </div>
          <div className="">
            <h3 className="mb-5">RENT</h3>

            <p className="flex flex-col gap-4">
              <span className="hover:text-neutral-500 cursor-pointer "> Rental Guide</span>
              <span className="hover:text-neutral-500 cursor-pointer "> Renter&apos;s Insurance</span>
              <span className="hover:text-neutral-500 cursor-pointer "> Tenant Rights</span>
              <span className="hover:text-neutral-500 cursor-pointer "> FAQs for Renters</span>
              <span className="hover:text-neutral-500 cursor-pointer "> Search Rental Properties</span>
            </p>
          </div>
        </div>
      </div>
      {/* <hr className="text-neutral-400"/> */}
      <div className="border-t border-gray-500 "></div>

      <p className="text-neutral-400 hover:text-neutral-100 text-center  pb-10 pt-5">Copyright © 2025 Ahmed Hady. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
