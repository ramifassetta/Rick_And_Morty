import Card from './Card';

export const Cards = (props) => {
   const personajes = props.characters;
   
   return (
      <div>
         {
            personajes.map(character => (
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
            ))
         }
      </div>
   );
}
