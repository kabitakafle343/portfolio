import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

const Navbar = () => {
    const [nav,setnav]=useState(false);
 const links=[
    {
    
      id:1,
      link:'Home' 
    },
    {
        id:2,
        link:'About' ,
    },
    {
        id:3,
        link:'Portfolio' ,
    },
    {
        id:4,
      link:'Experience' ,
    },
    {
        id:5,
        link:'Contact' 
    },
 
]
  return (
    <div className="flex justify-between bg-black text-white w-full h-20 items-center px-9  ">
      <div>
      <h1 className="font-signature text-5xl text-white ">
      <div></div>kabita</h1>
      </div>
      <ul className='md:flex text-1xl text-gray-500 hidden'>
      {links.map(({id,link})=>{
return(
        <li key={id} className='px-4 hover:scale-105 duration-200 cursor-pointer'><Link to={link} smooth duration={500}>{link}</Link></li>
       
      )})}
       
      </ul>


      <div  onClick={()=>setnav(!nav)}className="cursor-pointer pr-4  md:hidden  z-10  text-gray-500  ">
     {nav?<FaTimes size={20}></FaTimes>:<FaBars size={20}></FaBars>}   
      </div>

      {nav && ( 
      <ul className="  flex  justify-center flex-col w-full h-screen  absolute top-0 left-0  bg-gradient-to-b from-black to-gray-500 text-white items-center ">
      

        {links.map(({id,link})=>{
            return(

<li key={id} className="py-4  hover:scale-125 duration-200 cursor-pointer text-1xl text-white">{link} </li>
       ) })}
</ul>
        )}
    


  
    </div>

   ) }


export default Navbar
