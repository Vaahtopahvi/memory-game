import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import helpIcon from "./assets/iconmonstr-help-3.svg";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [help, setHelp] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchPokemon = async () => {
    const pokemonList = [];
    const favPokemons = [
      395, 552, 95, 94, 79, 464, 108, 383, 61, 260, 291, 411,
    ];

    for (const id of favPokemons) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      pokemonList.push({
        id: data.id,
        name: capitalizeFirstLetter(data.name),
        img: data.sprites.front_default,
      });
    }

    setPokemon(pokemonList);
  };

  //execute fetchPokemon when the component mounts
  useEffect(() => {
    fetchPokemon();
  }, []);

  const shuffleArray = (array) => {
    //copy the array, shuffle it and return it without mutating the original array
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setClicked([]);
      setScore(0);
      alert("You lost! Try again.");
    } else {
      setClicked([...clicked, id]);
      setScore(score + 1);
      // compare the best score with the current score, return the highest score
      setBestScore(Math.max(bestScore, score + 1));

      if (score + 1 === 12) {
        alert("You've won!");
        setClicked([]);
        setScore(0);
      }
    }

    setPokemon(shuffleArray(pokemon));
  };

  const toggleInfo = () => {
    setHelp(!help); //toggle the help state
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-3 sm:gap-5 bg-gradient-to-r from-primary to-secondary p-4">
        
        <div className="flex flex-col items-center justify-center text-center backdrop-blur-xl bg-black/70 p-3 sm:p-5 rounded-xl">
          <h1 className="font-mono font-bold text-3xl text-white sm:text-4xl md:text-5xl mb-2 sm:mb-3 p-2 sm:p-5">
            Pokémon Memory Game
          </h1>
          <div className="mb-3 sm:mb-5 text-white text-lg sm:text-xl md:text-2xl">
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 w-full max-w-3xl">
          {
            //map through each pokemon in an array and render them
            pokemon.map((poke) => {
              return (
                //render each pokemon as a card
                <div
                  className="bg-white rounded-md shadow-md p-2 sm:p-4 cursor-pointer transform hover:scale-105 transition-transform"
                  key={poke.id}
                  onClick={() => handleClick(poke.id)}
                >
                  {/* give each pokemon image & name */}
                  <img
                    src={poke.img}
                    alt=""
                    className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto"
                  />
                  <p className="text-center mt-1 sm:mt-2 text-sm sm:text-base">
                    {poke.name}
                  </p>
                </div>
              );
            })
          }
        </div>
        
          <div className="fixed right-5 bottom-5">
          <img
            src={helpIcon}
            alt="help"
            className="h-10 w-10 cursor-pointer"
            onClick={toggleInfo}/>
            {help && (
          <div className="absolute right-12 bottom-12 min-w-56 bg-white p-4 rounded shadow-lg">
            <p className="text-black">This is a Pokémon memory game. Click on one of my favorite Pokémons to earn points, but don&apos;t click on the same Pokémon twice!</p>
          </div>
        )}
          
        </div>
      </div>
    </>
  );
}

export default App;
