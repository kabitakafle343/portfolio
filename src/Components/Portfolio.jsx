import React from 'react'
import p1 from  "../assets/weatherapp.png"
import p2 from  "../assets/netflix.png"
export const Portfolio = () => {

    const portfolio=[
        {
            id:1,
            src:p1,
            linkR:'https://weatherwebsitenepal.netlify.app/',
            linkC:'https://github.com/kabitakafle343/WeatherAPP'
        },
       
        {
            id:3,
            src:p2,
            linkR:'https://netflixandchill.netlify.app/',
            linkC:'https://github.com/kabitakafle343/Netflix-Clone'
        },
    ]
  return (
   <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="b-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-400">Portfolio</p>
            <p className="py-6">checkout some of my works here</p>
        </div>



        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolio.map(({id,src,linkR,linkC})=>{
            return(
   
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img  className="rounded-md hover:scale-105 duration-200" src={src} alt=""></img>
                <div className=" flex items-center justify-center ">
                    <button className="w-1/2 px-6 py-1  duration-200 hover:scale-105"><a href={linkR}>Demo</a></button>
                    <button className="w-1/2 px-6 py-1  duration-200 hover:scale-105"><a href={linkC}>Code</a></button>
                </div>
            </div>
      
            )

        })}
        </div>
       
    </div>
   </div>
  )
}
