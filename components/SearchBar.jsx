export default function SearchBar(){

    return(     
    /*<div className="container h-16  flex justify-left items-center px-2 sm:px-6 lg:px-8">*/
    <form className="w-auto p-4 place-self-end">
        <input type="text" className="p-2 rounded focus:shadow focus:outline-none" placeholder="Search"/>
            <span className="absolute top-4 bg-blue-300 right-3"> <i className="fa fa-search text-gray-400 hover:text-gray-500"></i> </span>
     </form>
    /*</div>*/
    )
}