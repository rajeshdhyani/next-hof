import Dropdown from "./Dropdown.jsx";
import Link from 'next/link'

export default function Navbar({divisions}){

    return(

        <>
           <nav className="flex bg-white border-b-2 header">
			<div className="max-w-full mx-auto">
				<div className="flex justify-end">
					<div className="flex space-x-7">
						
						
						<div className="hidden md:flex items-center space-x-2">
						<Link href="/">
							<a className="py-2 px-6 text-black-200 ">Divisonal Updates</a>
						</Link>	
						<Link href="/hof">
							<a className="py-2 px-6 text-black-200 ">Hall of Fame</a>
						</Link>
						<Link href="/pi">
							<a  className="py-2 px-6 text-black-200 ">Project Information</a>
							</Link>
							<Dropdown divisions={divisions}></Dropdown>
						</div>
                          

					</div>
					
									
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button">
						<svg className=" w-12 h-4 text-gray-500 hover:text-green-500 "
							fill="none"
							viewBox="0 0 24 24"
						>
							<path d="M4 6h16M4 12h16M4 18h16" 
							xshow="!showMenu"
							
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							
							stroke="currentColor"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			
			<div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			
				
			
		</nav>


            

        </> 

    )
}
