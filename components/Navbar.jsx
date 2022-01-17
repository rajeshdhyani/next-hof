import Dropdown from "./Dropdown.jsx";


export default function Navbar(){

    return(

        <>
           <nav class="flex bg-white border-b-2 header">
			<div class="max-w-full mx-auto">
				<div class="flex justify-end">
					<div class="flex space-x-7">
						
						
						<div class="hidden md:flex items-center space-x-1">
							<a href="" class="py-8 px-6 text-black-500 border-b-4">Divisonal Updates</a>
							<a href="" class="py-8 px-6 text-black-500  transition duration-300 ease-in-out">Hall of Fame</a>
							<a href="" class="py-8 px-6 text-black-500  transition duration-300">Project Information</a>
							<Dropdown></Dropdown>
						</div>
                          

					</div>
					
									
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			
			<div class="hidden mobile-menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
			
				
			
		</nav>


            

        </> 

    )
}
