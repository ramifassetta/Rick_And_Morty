import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom"

export const Nav = ({onSearch}) => {
  
  return (
    <div>
      <nav>
        <SearchBar onSearch={onSearch}/>
        <button>
          <NavLink to="/about">ABOUT</NavLink>
        </button>

        <button>
          <NavLink to="/home">HOME</NavLink>
        </button>

        <button>
          <NavLink to="/favorites">FAVORITES</NavLink>
        </button>

      </nav>
    </div>
  )
}
