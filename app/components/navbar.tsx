"use client"

import Link from "next/link"
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { RxDividerHorizontal } from "react-icons/rx";
import Image from "next/image";


const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)
  const handleNav = () => {
        setMenuOpen(!menuOpen);
  }

    return (
      <div className=" sticky top-0 w-full bg-green-600 shadow-xl">
        <div className=" flex py-3 text-xl justify-between px-2">
          
          <Link href="/">
          <Image src={"/public/logo - final-01.jpg"} width={210} height={0} alt="logo"/>
          </Link>

          <AiOutlineMenuFold onClick={handleNav} size={46} className="p-2 md:hidden"/>

          <div className="hidden md:flex gap-x-4">
          <Link href="/" className=" uppercase p-2 hover:bg-gray-800 transition duration-300 rounded-full ">Home</Link>
          <Link href="/about" className=" uppercase p-2 hover:bg-gray-800 transition duration-300 rounded-full">About Us</Link>
          <Link href="/demo" className=" uppercase p-2 hover:bg-gray-800 transition duration-300 rounded-full">Demo</Link>
          <Link href="/" className=" uppercase p-2 px-6 hover:bg-gray-800 transition duration-300 rounded-md bg-gray-700" >Sign Up</Link>
          </div>
        </div>
        <div className={
          menuOpen ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-green-500/80 backdrop-blur-sm ease-in duration-500"
                   : "fixed left-[-100%] top-0 w-[65%] md:hidden h-screen bg-green-500/80 backdrop-blur-sm ease-in duration-500" 
        }>
          <div className="flex w-full items-center justify-end py-4">
            <div onClick={handleNav} className="">
              <AiOutlineClose size={40}/>
            </div>
          </div>
          <div className=" flex-col py-4">
          <ul>
            
            <Link href="/">
            <li onClick={() => setMenuOpen(false)} className="p-3 text-black text-2xl">
              Home
            </li>
            </Link>
            <Link href="/about">
            <li onClick={() => setMenuOpen(false)} className="p-3 text-black text-2xl">
              About Us
            </li>
            </Link>
            <Link href="/demo">
            <li onClick={() => setMenuOpen(false)} className="p-3 text-black text-2xl">
              Demo
            </li>
            </Link>
          </ul>
          <RxDividerHorizontal size={24} preserveAspectRatio="none" style={{width: '100%', color: 'white'}}/>
          <div className="flex w-full bg-gray-700 text-2xl px-2 py-1">
          <Link onClick={() => setMenuOpen(false)} href="/" className="" >Sign Up</Link>
          </div>
          
          </div>
        </div>
      </div>
    );
};
export default Navbar;

