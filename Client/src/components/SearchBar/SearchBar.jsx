import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChallenge = (event) => {
      setId(event.target.value);
   }

   return (
      <div className="searchbar">
         <input type='search' value={id} onChange={handleChallenge} className="search" placeholder="Search character by ID"/>
         <button onClick={() => props.onSearch(id)} className="add">Add</button>
      </div>
   );
}
