import styled from '@emotion/styled'
export default function Dropdown()
{
    
    return(

        <>
        <NavigationStyled>
            
        <div className="dropdown inline-block relative">
    <button className="bg-white-300 text-black-700 py-2 px-4 border-2 rounded inline-flex items-center">
      <span className="mr-1">PPM</span>
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">PPM</a></li>
      <li className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">PPM Services</a></li>
      <li className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Geospatial</a></li>
      <li className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Geospatial</a></li>
      <li className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Geospatial</a></li>
    </ul>
  </div>
  
  </NavigationStyled>
  
        </> 

        

    )


}
const NavigationStyled = styled.div`
.dropdown:hover .dropdown-menu {
    display: block;
  }
  
`