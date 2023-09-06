import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux"
import { useState, useEffect } from "react";
import portal from "../../images/rickandmortyportal.png"
import "./Card.css"

const Card = (props) =>{
   const addFav = props.addFav;
   const removeFav = props.removeFav;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(props.id);
      }
      else{
         setIsFav(true);
         addFav({
            id: props.id,
            name: props.name,
            species: props.species,
            gender: props.gender,
            image: props.image
         });
      }
   }

   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   
   const checkLocation = useLocation().pathname;
   
   return ( 
      <div className="card">
         <img src={portal} alt="" className="portal"/>
         <div className="overlay">
            <div className="buttons">
               <button onClick={handleFavorite} className="fav">{isFav ? '❤️' : '🤍' }</button>
               {checkLocation !=='/favorites' && <button onClick={() => props.onClose(props.id)} className="boton">X</button>}
            </div>
            <NavLink to={`/detail/${props.id}`} className="nombre">
               <h2 >{props.name}</h2> 
            </NavLink>
            <h3>{props.status}</h3>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
            <h3>{props.origin}</h3>
            <img src={props.image} alt='' className="imagen"/>
         </div>
      </div>
   );
   
}
const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);