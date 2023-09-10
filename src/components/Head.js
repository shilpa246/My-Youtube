import React ,{useEffect,useState} from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
// import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery , setSearchQuery]= useState("");
  const [suggestions,setSuggestions] =useState([]);
  const [showsuggestions,setShowSuggestions] =useState(false);

  const searchCache = useSelector((store)=>store.search);
  const dispatch= useDispatch();
  useEffect(()=>{
    //makean api call after ever key press but if the difference between 2 api calls is <200ms decline the api call
 const timerr =  setTimeout(()=>{
 
 if(searchCache[searchQuery]){
  setSuggestions(searchCache[searchQuery]);
 }
 else{
   getSearchSuggestions()
  }
},300);
 return() =>{
  clearTimeout(timerr)};
  // eslint-disable-next-line 
},[searchQuery]);
/*
* key -i
*  -render the component
*  -useeffect();
*  -start timer => make api call after 200ms

*  key - ip
*  -destroy the component(useEffect return method)
*  -re-render the component
*  -useeffect();
*  -start timer => make api call after 200ms
*
*
*  setTimeout(200) -make an api call after 200 ms 
*
 */
const getSearchSuggestions = async ()=>{
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json= await data.json();
  setSuggestions(json[1]);
  // console.log(json);

  dispatch(cacheResults({
    [searchQuery]:json[1],
  }))
}
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img 
        onClick={()=>toggleMenuHandler()}
        className="h-8 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
        />
        <a href="/">
        <img className="h-8 ml-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVL9tR5NZx5X5Nb2P6yerlgN0IEvBe1HCu-zprEmrL&s"
          alt="youtube-logo"
        />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>

       
        <input 
        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" 
        type="text"
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value) }
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
         />
        <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-300">
          🔍
          </button>
          </div>
          {showsuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[25rem] shadow-lg rounded-lg border border-gray-100"  >
            <ul>
              {suggestions.map((s)=>(
                 <li key={s} className="py-2 px-2 showed-sm hover:bg-gray-300">
                  {s}
                 </li>
                 
              ))}
              </ul>
          </div>
          )}
      </div>
      <div className="col-span-1">
        <img className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user"/>
      </div>
    </div>
  );
};

export default Head;
