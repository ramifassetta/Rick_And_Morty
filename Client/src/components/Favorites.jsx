import Card from "../components/Card"
import {connect, useDispatch} from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";

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
    <div>
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
      <select name="" id="" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select name="" id="" onChange={handleFilter}>

        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
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

