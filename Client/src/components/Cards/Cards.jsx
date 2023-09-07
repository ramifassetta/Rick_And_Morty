import { useState } from "react";
import Card from "../Card/Card";
import "./Cards.css";

export const Cards = (props) => {
  const personajes = props.characters;

  const PERSONAJES_PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(0);

  // Funciones Next y Prev del Paginado
  const nextHandler = () => {
    const totalPages = Math.ceil(personajes.length / PERSONAJES_PER_PAGE);
    const nextPage = currentPage + 1;

    if (nextPage >= totalPages) return;

    setCurrentPage(nextPage);
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;

    setCurrentPage(prevPage);
  };

  const startIndex = currentPage * PERSONAJES_PER_PAGE;
  const endIndex = startIndex + PERSONAJES_PER_PAGE;
  const personajesToShow = personajes.slice(startIndex, endIndex);

  return (
    <div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <button onClick={prevHandler} className="prevNext">
          {"<"}
        </button>
        <div className="page" style={{ margin: "0 10px" }}>
          <p className="p-page">Page: <span>{currentPage}</span></p>
        </div>
        <button onClick={nextHandler} className="prevNext" style={{ margin: "0 10px" }}>
          {">"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "0px",
        }}
      >
        {personajesToShow.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={props.onClose}
          />
        ))}
      </div>
    </div>
  );
};
