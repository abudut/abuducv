import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

function Header() {
  const [show, handleShow] = useState(false);

  const transtitonNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transtitonNavBar);
    return () => window.removeEventListener("scroll", transtitonNavBar);
  }, []);
  return (
    <header
      className={`header bg-black  fixed w-full p-1 text-lg nav ${
        show && " bg-opacity-80"
      }`}
    >
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="w-full mx-auto px-8">
              <div className="relative flex items-center h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      <Link
                        className="text-gray-300 cursor-pointer   hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                        activeClass="text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base  block sm:flex"
                        to="Home"
                     
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                      >
                        Home
                      </Link>

                      <Link
                        className="text-gray-300 cursor-pointer  hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                        activeClass="text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base block sm:flex"
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                      >
                        About
                      </Link>
                      <Link
                        className="text-gray-300 cursor-pointer hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                        activeClass=" text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base block sm:flex"
                        to="Resume"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                      >
                        Resume
                      </Link>
                      <Link
                        className="text-gray-300 cursor-pointer  hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                        activeClass="text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base block sm:flex"
                        to="Projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={50}
                      >
                        Projects
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 ">
                <Link
                  className="text-gray-300  hover:bg-gray-700 hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                  activeClass="bg-gray-800 text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base block sm:flex"
                  to="Home"
                  spy={true}
                  smooth={true}
                  duration={50}
                  
                >
                  Home
                </Link>

                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                  activeClass="bg-gray-800 text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-baseblock sm:flex"
                  to="About"
                  spy={true}
                  smooth={true}
                  duration={50}
                >
                  About
                </Link>
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                  activeClass="bg-gray-800 text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base block sm:flex"
                  to="Resume"
                  spy={true}
                  smooth={true}
                  duration={50}
                >
                  Resume
                </Link>
                <Link
                  className="text-gray-300 hover:bg-gray-700 hover:text-green-300 px-3 py-2 rounded-md sm:text-sm  text-base  block sm:flex"
                  activeClass="bg-gray-800 text-green-500 font-bold sm:font-black px-3 py-2 rounded-md sm:text-sm text-base block sm:flex"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  duration={50}
                
                >
                  Projects
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}

export default Header;
