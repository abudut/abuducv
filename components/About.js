import React from "react";

function About() {
  return (
    <section id="About">
      <div className="w-full flex justify-center bg-[#000700] text-white divide-y divide-light-blue-400 py-10">
        <div className="w-4/5 sm:w-1/2 my-10 text-center">
          <h1 className="text-left pb-3 text-green-600 font-bold text-lg sm:text-xl">
            ABOUT ME
          </h1>

          <p className="text-justify pb-5">
            Hello! My name is Abudu, I enjoy building websites, coding and solving problems, and I am
            excited to work alongside other amazing programmers and learn so
            much more!.
          </p>

          <div className="py-3">
            <h1 className="text-left pb-3 text-green-600 font-bold text-lg sm:text-xl">
              CONTACT DETAILS
            </h1>
            <p className="text-left">Abudu Touray</p>
            <p className="text-left">London</p>
            <p className="text-left">+4407712505678</p>
            <p className="text-left">abdoultouray@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
