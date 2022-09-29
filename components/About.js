import React from "react";

function About() {
  return (
    <section id="About">
      <div className="w-full flex justify-center bg-black text-white divide-y divide-light-blue-400 py-10">
        <div className="w-4/5 sm:w-1/2 my-10 text-center">
          <h1 className="text-left pb-3 text-green-600 font-bold text-lg sm:text-xl">
            ABOUT ME
          </h1>

          <p className="text-justify pb-5">
            Hello! My name is Abudu and I enjoy building websites. I&apos; ve
            been coding for over 3 years now. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
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
