import React from 'react';


export default function Dropdown({divisions,onChange,...props})
{
  
  const [selectedDivision,setSelectedDivision] =React.useState(props.selectedDivision)  
  
  const handleSelect=React.useCallback((e)=>{setSelectedDivision(e.target.value) 
  
  onChange(e.target.value)
  
  },[onChange])

  console.log("Selected Value in DropDown ::",selectedDivision)
    return(
<div className="inline-block relative w-64">
  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  name="division" id="divisions" onChange={handleSelect} value={selectedDivision} >

  
  {
    divisions?.map((division, index)=>{return <option className='px-8 py-2 pr-8 h-20' key={index} value={division.divisionName}>{division.divisionName}</option>})

  }

</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>    
    </div>

    )


}
export const getStaticProps =async() => {
  console.log('entered hof getStaticProps')
    const data =selectedDivision
    console.log("Selected Division in dropdown",data)
    
    
    return{
      props:{
        data:data,
               
  
      }
    }
  }