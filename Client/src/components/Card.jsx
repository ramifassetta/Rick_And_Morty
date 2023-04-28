import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from "react-redux"
import { useState, useEffect } from "react";

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
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         {checkLocation !=='/favorites' && <button onClick={() => props.onClose(props.id)} className="boton">X</button>}
         <NavLink to={`/detail/${props.id}`}>
            <h2>{props.name}</h2> 
         </NavLink>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' className="imagen"/>
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