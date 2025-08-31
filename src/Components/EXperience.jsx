import React from 'react'
import css from "../assets/css.svg";
import html from "../assets/htmlimg.png";
import js from "../assets/javascript.svg";
import reactt from  "../assets/react-2.svg";
import tailwind from "../assets/tailwind-css.svg";
import nextjs from "../assets/next.webp"
const EXperience = () => {

    const imgg=[
    {
            id:1,
            imgg:html,
            style:'shadow-orange-500',
          para:"Html",
        },
        {
            id:2,
            imgg:css,
          
            style:'shadow-blue-900',
            para:"Css"
        },
        {
            id:3,
            imgg:js,
          
            style:'shadow-yellow-500',
            para:'Javascript'
        },
        {
            id:4,
            imgg:reactt,
            style:'shadow-pink-700',
            para:"Reactjs"
        },
     
        {
            id:5,
            imgg:tailwind,
            style:'shadow-cyan-500',
            para:"Tailwind Css"
        },
          {
            id:5,
            imgg:nextjs,
            style:'shadow-cyan-500',
            para:"Next Js"
        },
    ]
  return (   <div name="Experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="b-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">Experience</p>
          <p className="py-6">These are the technologies i've worked with.</p>
      </div>





    {/* <div className=" pt-28 w-full h-screen bg-gradient-to-t from-gray-300 to-black mx-auto "> */}
     <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {imgg.map(({id,imgg,style,para})=>{
            return(
   
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg ${style} flex flex-col item-center text-center justify-center`}>
                <img  className="rounded-md hover:scale-105 duration-200 w-1/2 h-full max-auto ml-14 mt-4" src={imgg} alt="" ></img>
                <p className="pt-4 pb-3">{para}</p>
                </div>
            )})}
        </div>

</div>
 </div>


  )
}

export default EXperience