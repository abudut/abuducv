import React from "react";

function Resume() {
  return (
    <section id="Resume">
      <div className="bg-gray-900 w-full text-white flex justify-center  py-4  sm:py-16 ">
        <div className="divide-y-2  w-4/5 sm:w-1/2 divide-white ">
          <div className="">
            <h1 className="text-left p-3 pl-0 text-green-600 font-bold text-lg sm:text-xl">
              EDUCATION
            </h1>{" "}
            <div className="divide-y">
              <div className="py-3">
                <h3>
                  {" "}
                  <span className="italic font-bold ">Caparrella</span> - Spain
                </h3>{" "}
                <div className="flex justify-between">
                  <p className="pr-5 italic text-zinc-300 font-bold">
                    HIGHER NATIONAL CERTIFICATE - Web Application Developement
                  </p>{" "}
                  <p className="font-bold">2020</p>
                </div>{" "}
              </div>
              <div className=" py-3">
                <h3>
                  <span className="italic font-bold">Caparrella</span> - Spain
                </h3>{" "}
                <div className="flex justify-between">
                  <p className="pr-5 italic text-zinc-300 font-bold">
                    VOCATIONAL EDUCATION AND TRAINING - It
                  </p>{" "}
                  <p className="font-bold">2018</p>
                </div>{" "}
              </div>
              <div className=" py-3">
                <h3>
                  <span className="italic font-bold">Joan Sola</span> - Spain
                </h3>{" "}
                <div className="flex justify-between">
                  <p className="pr-5 italic text-zinc-300 font-bold">GSCE</p>{" "}
                  <p className="font-bold">2016</p>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="py-4 sm:py-16">
            <h1 className="text-left p-3 pl-0 text-green-600 font-bold text-lg sm:text-xl">
              EXPERIENCE
            </h1>{" "}
            <div className="divide-y">
              <div className=" py-3">
                <h3>KEYNET</h3>{" "}
                <div className="flex justify-between">
                  <p className="pr-5 italic font-bold">Web Developer</p>{" "}
                  <p className="font-bold">2020</p>
                </div>{" "}
                <p>
                  Built dynamic, interactive and responsive websites with
                  HTML/CSS and JavaScript.
                </p>
              </div>
              <div className="py-3">
                <h3>NATURAL OPTICS</h3>{" "}
                <div className="flex justify-between">
                  <p className="pr-5 italic font-bold">It Support</p>{" "}
                  <p className="font-bold">2018</p>
                </div>{" "}
                <p>
                  Day to day administration of Networks, Hardware, and Software.
                </p>
              </div>
            </div>
          </div>

          <div className="flex py-4 w-full justify-between text-sm sm:py-16 sm:text-md md:text-lg ">
            <h1 className="text-left p-3 pl-0 text-green-600 font-bold text-lg sm:text-xl">
              SKILLS
            </h1>{" "}
            <div className="divide-y">
              <div className=" pb-3 pt-4 font-bold ">
                <h3 className="pt-3 font-bold">HTML</h3>{" "}
              </div>
              <div className=" py-3 font-bold ">
                <h3>CSS</h3>{" "}
              </div>
              <div className=" py-3 font-bold ">
                <h3>JAVASCRIPT</h3>{" "}
              </div>
              <div className=" py-3 font-bold ">
                <h3>REACT</h3>{" "}
              </div>
              <div className=" py-3 font-bold ">
                <h3>TAILWIND CSS</h3>{" "}
              </div>
              <div className=" py-3 font-bold">
                <h3>MYSQL</h3>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
