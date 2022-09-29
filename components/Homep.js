import React from "react";
import Typewriter from "typewriter-effect";

function Homep() {
  return (
    <section id="Home">
      <div
        style={{
          backgroundImage: `url('/images/matrix_code_numbers_147523_1920x1080.jpg')`,
          
        }}
        className="bg-center bg-cover bg-no-repeat h-screen w-full text-gray-50 object-contain "
      >
        <div className="pt-80 text-center font-serif">
          <div className="font-black text-3xl sm:text-5xl  md:text-8xl  text-opacity-50 ">
            <h1 className="">
              <Typewriter
                options={{
                  strings: ['Hi',"Im", "Abudu Touray"],
                  autoStart: true,
                  loop: true,
                  delay: 250,
                }}
              />
            </h1>
          </div>
          <div className="flex justify-center font-bold text-gray-100  text-lg sm:text-2xl md:text-3xl ">
            <h2>
              Based in London.{" "}
              <span className=" text-white sm:text-gray-300 hover:text-white cursor-pointer">
                Web Developer
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homep;
