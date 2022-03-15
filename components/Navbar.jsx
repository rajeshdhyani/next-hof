import Dropdown from "./Dropdown.jsx";
import Link from 'next/link'

export default function Navbar({divisions,selectedDivision,onSelectedDivisionChange}){

    return(

        <>
           <nav className="flex bg-white border-b-4 header">
			<div className="max-w-full mx-auto">
				<div className="flex justify-end">
					<div className="flex space-x-7">
						
						
						<div className="hidden md:flex items-center space-x-2">
						<Link href="/"><a className="navlist py-2 px-6 text-black-200 ">Divisonal Updates</a></Link>
						<Link href="/hof"><a className="navlist py-2 px-6 text-black-200 ">Hall of Fame</a></Link>
						<Link href="/pi"><a className="navlist py-2 px-6 text-black-200 ">Project Information</a></Link>
							<Dropdown divisions={divisions} selectedDivision={selectedDivision} onChange={onSelectedDivisionChange}></Dropdown>
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
					<li className="active"><Link href="/"><a className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Divisional Updates</a></Link></li>
					<li><Link href="hof"><a  className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Hall of Fame</a></Link></li>
					<li><Link href="pi"><a className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Project Information</a></Link></li>
					<li><Dropdown divisions={divisions}></Dropdown></li>
				</ul>
			</div>
			
				
			
		</nav>


            

        </> 

    )
}
