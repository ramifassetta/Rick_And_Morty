import Card from "../Card/Card"
import {connect, useDispatch} from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import "../Favorites/Favorites.css"

const Favorites = ({myFavorites}) => {

  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <div style={{display: "flex", flexDirection: "row", marginTop: "50px"}}>
      <div style={{position: "absolute", display: "flex", flexDirection: "row"}}>
        <div className="select">
          <select name="" id="" onChange={handleOrder} style={{marginRight: "5px"}}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
        </div>
        <div className="select">
          <select name="" id="" onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
      </div>
      </div>
      <div style={{display: "flex", flexDirection: "row", marginTop: "100px"}}>
        {
          myFavorites?.map(fav => {
            return(
              <Card
                  key={fav.id}
                  id={fav.id}
                  name={fav.name}
                  species={fav.species}
                  gender={fav.gender}
                  image={fav.image}
                  onClose={fav.onClose}
              />
            )
          })
        }

      </div>
    </div>
  )

}

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
}

export default connect(
  mapStateToProps,
  null
)(Favorites)

