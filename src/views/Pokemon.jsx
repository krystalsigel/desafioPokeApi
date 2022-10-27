import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import context from "../MyContext";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const fetchPokemon = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      //const res = await fetch(url);
      const data = await res.json();
      setPokemon(data);
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  console.log(pokemon);
  if (pokemon.hasOwnProperty("sprites")) {
    return (
      <div>
        <Card pokemon={pokemon} />
      </div>
    );
  }
};
export default Pokemon;
