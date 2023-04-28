import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const URL_BASE = "http://localhost:3001/rickandmorty/character";
// const API_KEY = "f9895bbe94b7.916d8f8f621214692819";

export const Detail = () => {
    const {id} = useParams();
    console.log(useParams);
    
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_BASE}/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return () => setCharacter({});
     }, [id]);
     

  return (
    <div>
        {character.name && <h2>NAME| {character.name}</h2>}
        {character.status && <h2>STATUS| {character.status}</h2>}
        {character.species && <h2>SPECIES| {character.species}</h2>}
        {character.gender && <h2>GENDER| {character.gender}</h2>}
        {character.origin && (<h2>ORIGIN| {character.origin.name}</h2>)}
        <img src={character.image} alt='' className="imagen"/>
    </div>
  )
}
