import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case FILTER: 
            const filterOrder = state.allCharacters.filter(char => char.gender === action.payload)
            return{
                ...state,
                myFavorites: filterOrder
            }
        case ORDER:
            let charactersSort = [...state.allCharacters];
            if(action.payload === "A"){
                charactersSort.sort((charA, charB) => charA.id - charB.id);
            }
            if(action.payload === "D"){
                charactersSort.sort((charA, charB) => charB.id - charA.id);
            }
            return{
                ...state,
                myFavorites: charactersSort
            }
        default:
            return{...state}
    }
}


export default reducer