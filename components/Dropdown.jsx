<<<<<<< HEAD
import styled from '@emotion/styled'
import React from 'react';
import StrapiClient from '../lib/strapi-client'
=======
import React from 'react';

>>>>>>> 15aa7e1b944916f570dae730a06bf8b1f4d9f9ea

export default function Dropdown({divisions})
{

<<<<<<< HEAD
  const [selectedDivision,setSelectedDivision] =React.useState(divisions[0].divisionName)  
  console.log("inside dropdown", selectedDivision)
=======
  const [selectedDivision,setSelectedDivision] =React.useState()  
  
React.useEffect(()=>{if(divisions) setSelectedDivision(divisions[0].divisionName)})

>>>>>>> 15aa7e1b944916f570dae730a06bf8b1f4d9f9ea
  const handleSelect=React.useCallback((e)=>{setSelectedDivision(e.target.value)},[])

    return(
<div className="inline-block relative w-64">
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name="division" id="divisions" onChange={handleSelect} value={selectedDivision}>

<<<<<<< HEAD
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
=======
  
  {
    divisions?.map((division, index)=>{return <option className='px-8 py-2 pr-8 h-20' key={index} value={division.divisionName}>{division.divisionName}</option>})
>>>>>>> 15aa7e1b944916f570dae730a06bf8b1f4d9f9ea

  }

</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>    
    </div>

    )


<<<<<<< HEAD
}



const NavigationStyled = styled.div`
.dropdown:hover .dropdown-menu {
    display: block;
  }
  
`
=======
}
>>>>>>> 15aa7e1b944916f570dae730a06bf8b1f4d9f9ea
