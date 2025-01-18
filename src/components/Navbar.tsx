"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link,  Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import { Button } from "./ui/button";

const Navbar = () => {
  const[mobileDrawerOpen, SetMobileDrawerOpen] = useState(false);
  const toggleNavbar= () =>{
    SetMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-2 z-50 w-screen  pl-1 pr-4" >
      <div
        className=" container flex items-center justify-between
     rounded-lg bg-black py-3 pl-2"
      >
        <div className="flex flex-shrink-0 items-center justify-between ">
          <Image
            className="mr-2"
            width={60}
            height={30}
            src="/logo.png"
            alt="Logo"
          />
          <span className="text-sm tracking-tight text-white">RealEs</span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4 pr-5">
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden text-sm text-white lg:flex">
          <Button variant="outline" className="mr-2 bg-black">
            sign in
          </Button>
          <Button className="bg-slate-800 mr-3 ">sign up</Button>
        </div>
        <div className="flex-col text-white md:flex lg:hidden">
          <button className="pr-4" onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      

{mobileDrawerOpen && (
  <div className="mt-1  bg-black rounded-md lg:hidden">
    <ul className="flex flex-col items-center">
      {NAV_LINKS.map((item, index) => (
        <li key={index} className="py-6">
          <a className="text-white hover:text-neutral-500"
           href={item.url} 
           onClick={() => SetMobileDrawerOpen(false)}>
          {item.title}
          
          </a>
        </li>
      ))}
    </ul>
    <div className="flex  items-center justify-center pb-8 text-white">
      <Button variant="outline"  className="mr-2 bg-black">
        Sign in
      </Button>
      <Button className="bg-slate-800">
        Sign up
      </Button>
    </div>
  </div>
)}






















    </nav>
  );
};

export default Navbar;
