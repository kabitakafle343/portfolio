import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import kab from "../assets/photo.jpg";
import {Link} from "react-scroll"
export const About = () => {
  return (
    <div name="Home" className=" bg-gradient-to-b from-black via-black to-gray-500 h-screen w-full py-14">
    <div className=" flex flex-col justify-center items-center text-center md:flex-row mx-auto h-full max-w-screen-lg px-4">


    <div className= "flex flex-col justify-center h-full max-w-xl" >
<h1 className="text-4xl sm:text-7xl font-bold text-white">I'm kabita kafle</h1>
<p className=" text-gray-500 py-4   max-w-lg">I'm a skilled Frontend Developer with expertise in React Js, HTML, CSS, Tailwind CSS, and JavaScript. I am passionate about creating wonderful user experiences
and interfaces that are comfortable to use by everyone in the web.</p>

<div className="py-6"><button className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3  rounded-md flex flex-row items-start w-fit text-center"> <Link to="Portfolio" smooth duration={500}>portfolio</Link><span>   <HiArrowRight  size={20}/></span>
</button>
    </div>
    </div>
  

    <div className="max-w-sm rounded-2xl mx-auto  w-2/3 md:w-full">
      <img src={kab}></img>
    </div>

</div>


  

    </div>
  )
}
