import React from "react";

function About() {
  return (
    <section id="About">
      <div className="flex justify-center bg-black text-white w-full divide-y divide-light-blue-400 py-16">
        <div className="w-1/2 my-10 text-center">
          <h1 className="text-left pb-3 text-green-600 font-bold text-lg sm:text-xl">
            ABOUT ME
          </h1>

          <p className="text-justify pb-5">
            Hello! My name is Abudu and I enjoy building websites. I&apos; ve been coding for over 3 years now.
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
