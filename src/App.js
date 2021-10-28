import { useEffect, useState } from "react";
import PokemonMiniature from "./components/PokemonMiniature";


function App() {
  const[tousPokemon, setTousPokemon] = useState([])
  const [afficherPlus, setAfficherPlus] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')


 const getAllPokemons = async () => {
   const res = await fetch(afficherPlus)
   const data = await res.json()
   
   setAfficherPlus(data.next)

   function createPokemonObject(results)  {
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()
       
       setTousPokemon( currentList => [...currentList, data])
       
     })
   }
   
   createPokemonObject(data.results)
 }

useEffect(() => {
 getAllPokemons()
}, [])




 return (
   
   <div className="app-container">
     <h1>Pokédex National</h1>
     <div className="pokemon-container">
       <div className="all-container">
         
          { tousPokemon.sort((a,b) => a.id - b.id).map((pokemon,index) => 
         
          <PokemonMiniature
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
          image2={pokemon.sprites.back_default}
          type={pokemon.types[0].type.name}
          stVie={pokemon.stats[0].base_stat}
          stAtq={pokemon.stats[1].base_stat}
          stDef={pokemon.stats[2].base_stat}
          stAtqSpe={pokemon.stats[3].base_stat}
          stDefSpe={pokemon.stats[4].base_stat}
          stVit={pokemon.stats[5].base_stat}
          key={index}
          />)
          
          }
          
       </div>
         <button className="boutonAPP"onClick={() => getAllPokemons()}>Afficher plus de pokémon</button>
     </div>

   </div>

 );
}
export default App;
