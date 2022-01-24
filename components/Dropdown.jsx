import styled from '@emotion/styled'
import React from 'react';
import StrapiClient from '../lib/strapi-client'

export default function Dropdown({divisions})
{

  const [selectedDivision,setSelectedDivision] =React.useState(divisions[0].divisionName)  
  console.log("inside dropdown", selectedDivision)
  const handleSelect=React.useCallback((e)=>{setSelectedDivision(e.target.value)},[])

    return(

  //       <>
  //       <NavigationStyled>
            
  //       <div className="dropdown inline-block relative">
  //   <button className="bg-white-300 text-black-700 py-2 px-4 border-2 rounded inline-flex items-center">
  //     <span className="mr-1">PPM</span>
  //     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  //   </button>
  //   <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">


  //         <li className=""><a className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"></a></li>


      

        
      
     
   
      
      
  //   </ul>
  // </div>
  
  // </NavigationStyled>
  
  //       </> 



  <select name="division" id="divisions" onChange={handleSelect} value={selectedDivision}>

  
  {
    divisions.map(

      (division, index)=>{return <option key={index} value={division.divisionName}>{division.divisionName}</option>}
    )

  }

</select>

        

    )


}



const NavigationStyled = styled.div`
.dropdown:hover .dropdown-menu {
    display: block;
  }
  
`