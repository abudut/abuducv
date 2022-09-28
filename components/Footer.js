import React from "react";

function Footer() {
  return (

    <footer className="py-20 text-center bg-gray-800 text-white">
       
      <ul>
        <li className="text-green-600">
          Made by <b className="text-green-400 sm:text-green-600 hover:text-green-400 cursor-pointer ">Abudu</b>
        </li>
      </ul>
      <div className="py-5 flex justify-center">
        <div className="">
          <a href="https://www.linkedin.com/in/abudu-touray-4a6880132/"><img className="w-11" src="images\linkedin.png" alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
