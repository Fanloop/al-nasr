import logo from "./../img/Logo.png";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  navbar: boolean;
  setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ navbar, setNavbar }: NavbarProps) {
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
          } lg:flex flex-col lg:flex-row justify-between gap-1 lg:gap-10 mx-auto p-5 lg:p-0 bg-white w-11/12 lg:w-auto rounded-lg`}
        >
          <li>
            <a
              href="#hero"
              onClick={() => setNavbar((navbar = false))}
              className="capitalize opacity-80 block w-full py-4"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setNavbar((navbar = false))}
              className="capitalize opacity-80 block w-full py-4"
            >
              about us
            </a>
          </li>
          <li>
            <a
              href="#package"
              onClick={() => setNavbar((navbar = false))}
              className="capitalize opacity-80 block w-full py-4"
            >
              package
            </a>
          </li>
          <li>
            <a
              href="#facilities"
              onClick={() => setNavbar((navbar = false))}
              className="capitalize opacity-80 block w-full py-4"
            >
              facilities
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={() => setNavbar((navbar = false))}
              className="capitalize opacity-80 block w-full py-4"
            >
              gallery
            </a>
          </li>
        </ul>
        <button className="hidden lg:block capitalize bg-yellow py-4 px-12 rounded-lg hover:bg-amber-500 transition-all">
          contact us
        </button>
        <button
          onClick={() => setNavbar(!navbar)}
          className={`block lg:hidden text-4xl md:text-5xl ${
            navbar ? "text-yellow" : "text-cyan-3"
          }`}
        >
          {navbar ? <IoClose /> : <IoMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
