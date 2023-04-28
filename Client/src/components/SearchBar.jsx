import { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChallenge = (event) => {
      setId(event.target.value);
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChallenge}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
