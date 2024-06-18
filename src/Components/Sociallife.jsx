import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Sociallife = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="w-40 h-14 bg-gray-500 px-4 items-center flex justify-between ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] flex-col">
          <a href="https://mail.google.com/mail/u/0/#inbox" className="flex items-center text-center justify-between text-white w-full my-2">
            Mail <HiOutlineMail size={29} />
          </a>
        </li>
        <li className="w-40 h-14 bg-gray-500 px-4 items-center flex justify-between ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] flex-col">
          <a href="https://www.linkedin.com/in/kabita-kafle-55941b244/" className="flex items-center text-center justify-between text-white w-full my-2">
            LinkedIn <FaLinkedin size={29} />
          </a>
        </li>
        <li className="w-40 h-14 bg-gray-500 px-4 items-center flex justify-between ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] flex-col">
          <a href="https://github.com/kabitakafle343" className="flex items-center text-center justify-between text-white w-full my-2">
            GitHub <FaGithub size={29} />
          </a>
        </li>
        <li className="w-40 h-14 bg-gray-500 px-4 items-center flex justify-between ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] flex-col">
          <a href="/kabitacv.pdf" download="true" target="_blank" rel="noreferrer" className="flex items-center text-center justify-between text-white w-full my-2">
            Resume <BsFillPersonLinesFill size={29} />
          </a>
        </li>
      </ul>
    </div>
  );
}
