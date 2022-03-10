import Dropdown from "./Dropdown.jsx";
import Link from "next/link";
import { NavLink } from "./ui/NavLink.js";
import styles from '../styles/Navbar.module.css';

export default function Navbar({
  divisions,
  selectedDivision,
  onSelectedDivisionChange,
}) {

 console.log('Divisions in Navbar: ', divisions)

  return (
    <>
        <div className="max-w-full mx-auto">
          <ul className="md:flex items-center space-x-6">
            <li><NavLink href="/" exact>
              Divisonal Updates
            </NavLink></li>
            <li> <NavLink  href="/hall-of-fame" >
              Hall of Fame
            </NavLink></li>
            <li><NavLink href="/project-information">
              Project Information
            </NavLink></li>
            <li><Dropdown
              divisions={divisions}
              selectedDivision={selectedDivision}
              onChange={onSelectedDivisionChange}
            ></Dropdown></li>
          </ul>

          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-12 h-4 text-gray-500 hover:text-green-500 "
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  xshow="!showMenu"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active">
              <Link href="/">
                <a className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">
                  Divisional Updates
                </a>
              </Link>
            </li>
            <li>
              <Link href="/hall-of-fame">
                <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Hall of Fame
                </a>
              </Link>
            </li>
            <li>
              <Link href="/project-information">
                <a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">
                  Project Information
                </a>
              </Link>
            </li>
            <li>
              <Dropdown divisions={divisions}></Dropdown>
            </li>
          </ul>
        </div>
    </>
  );
}
