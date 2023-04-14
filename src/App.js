import { useEffect, useState } from 'react';
import './App.css';
import { Cards } from './components/Cards.jsx';
import { Nav } from './components/Nav';
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import { About } from './components/About';
import { Detail } from './components/Detail';
import { Form } from './components/Form';
import { useNavigate } from 'react-router-dom';
import  Favorites  from './components/Favorites';

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "f9895bbe94b7.916d8f8f621214692819";

const EMAIL = "ramiro.fassetta.01@gmail.com";
const PASSWORD = "ramiro13";

function App() {

   const navigate = useNavigate();
   const location = useLocation();
   const showNav = location.pathname !== '/';
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   
   const logIn = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
           {showNav && <Nav onSearch={onSearch} />} 
            
          <Routes>
            <Route path="/" element={<Form login={logIn} />}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path={`/detail/:id`} element={<Detail />} />
            <Route path="/favorites" element={<Favorites />}/>
         </Routes>
      </div>
   );
}

export default App;
