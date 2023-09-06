import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../../images/rickandmorty.png"
import "./Detail.css"

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
    <div className="">
      <div style={{ textAlign: 'left', marginLeft: "10px"}}>
         <img src={logo} alt=""  style={{width: "600px", margin: '0 auto'}}/>
      </div>
      <div className="detail">
         <div style={{marginLeft: "10px"}}>
         {character.name && <h2 className="titles">NAME: <br /><span>{character.name}</span></h2>}
         {character.status && <h2 className="titles">STATUS: <br /> <span>{character.status}</span></h2>}
         {character.species && <h2 className="titles">SPECIES: <br /><span>{character.species}</span></h2>}
         {character.gender && <h2 className="titles">GENDER: <br /><span>{character.gender}</span></h2>}
         {character.origin && (<h2 className="titles">ORIGIN: <br /><span>{character.origin.name}</span></h2>)}
         </div>
         <div style={{alignItems: "center", margin: "auto"}}>
            <img src={character.image} alt='' className="imagenDetail"/>
         </div>
      </div>
    </div>
  )
}
