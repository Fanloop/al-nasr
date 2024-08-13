import logo from "./../img/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white py-4">
      <div className="w-10/12 md:w-11/12 lg:w-10/12 m-auto flex justify-between items-center">
        <div>
          <a href="/" className="block">
            <img src={logo} alt="logo" className="h-10 md:h-14 lg:h-12" />
          </a>
        </div>
        <ul
          className={`absolute lg:static top-20 md:top-24 inset-x-0 ${
            navbar ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between gap-10 py-10 mx-auto lg:py-0 bg-white w-11/12 lg:w-auto`}
        >
          <li>
            <a href="#hero" className="capitalize opacity-80">
              home
            </a>
          </li>
          <li>
            <a href="#about" className="capitalize opacity-80">
              about us
            </a>
          </li>
          <li>
            <a href="#package" className="capitalize opacity-80">
              package
            </a>
          </li>
          <li>
            <a href="#facilities" className="capitalize opacity-80">
              facilities
            </a>
          </li>
          <li>
            <a href="#gallery" className="capitalize opacity-80">
              gallery
            </a>
          </li>
        </ul>
        <button className="hidden lg:block capitalize bg-yellow py-4 px-12 rounded-lg">
          contact us
        </button>
        <button
          onClick={() => setNavbar(!navbar)}
          className="block lg:hidden text-4xl md:text-5xl"
        >
          {navbar ? <IoClose /> : <IoMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
