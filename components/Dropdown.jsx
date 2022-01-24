import styled from '@emotion/styled'
import React from 'react';
import StrapiClient from '../lib/strapi-client'

export default function Dropdown({divisions})
{

  const [selectedDivision,setSelectedDivision] =React.useState()  
  
React.useEffect(()=>{if(divisions) setSelectedDivision(divisions[0].divisionName)})

  const handleSelect=React.useCallback((e)=>{setSelectedDivision(e.target.value)},[])

    return(

  <select name="division" id="divisions" onChange={handleSelect} value={selectedDivision}>

  
  {
    divisions.map((division, index)=>{return <option key={index} value={division.divisionName}>{division.divisionName}</option>})

  }

</select>

        

    )


}