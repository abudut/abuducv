import React from "react";
import { EyeIcon } from "@heroicons/react/outline";
import { CodeIcon } from "@heroicons/react/outline";

function Project() {
  return (
    <section id="Projects">
      <div className=" py-9 flex justify-center bg-[#000b01] text-white w-full divide-y divide-light-blue-400">
        <div className="w-4/5 sm:w-4/5 my-10 text-center ">
          <h1 className="text-center p-4 text-green-600 font-bold text-lg sm:text-xl">
            CHECK OUT SOME OF MY WORKS
          </h1>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
            <div className="p-2 hover:p-1 border-2 hover:border-4 hover:brightness-105 border-green-500  opacity-100 lg:opacity-70  hover:opacity-100 transition duration-300 ease-in  sm:hover:scale-105 hover:z-50">
              <img
                className="object-center  h-auto w-auto mb-1"
                src="images\netfl.PNG"
                alt="NetflixClone"
              />
              <div className="flex justify-between">
                <a
                  href="https://netflix-clone-134de.web.app/"
                  title="NetflixClone"
                >
                  <EyeIcon className="h-6 w-6" />
                </a>{" "}
                <a href="https://github.com/abudut/NetflixClone.git">
                  <CodeIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="p-2 hover:p-1  border-2 hover:border-4 hover:brightness-105 border-green-500  opacity-100 lg:opacity-70  hover:opacity-100 transition duration-300 ease-in sm:hover:scale-105 hover:z-50">
              <img
                className="object-center h-auto w-auto mb-1"
                src="images\hulu.PNG"
                alt="huluClone"
              />
              <div className="flex justify-between">
                <a
                  href="https://hulu-clon-e24z.vercel.app/"
                  title="HuluClone"
                >
                  <EyeIcon className="h-6 w-6" />
                </a>{" "}
                <a href="https://github.com/abudut/HuluClon">
                  <CodeIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="p-2 hover:p-1 border-2  hover:border-4 hover:brightness-105 border-green-500 opacity-100 lg:opacity-70  hover:opacity-100 transition duration-300 ease-in sm:hover:scale-105 hover:z-50">
              <img
                className="object-center h-auto w-auto mb-1"
                src="images\amazon.PNG"
                alt="AmazonClone"
              />
              <div className="flex justify-between">
                <a
                  href="https://amazon-a-abudut.vercel.app/"
                  title="AmazonClone"
                >
                  <EyeIcon className="h-6 w-6" />
                </a>{" "}
                <a href="https://github.com/abudut/AmazonA">
                  <CodeIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
