import React, { useContext, useEffect, useState } from "react";
import context from "../MyContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Pokemones = () => {
  const navigate = useNavigate();
  const { pokemones } = useContext(context);
  const [pokemon, setPokemon] = useState("");

  const goToPokemon = () => {
    pokemon
      ? navigate(`/pokemon/${pokemon}`)
      : alert("Selecciona algun pokemon");
  };
  return (
    <div className="contain">
      <select onChange={({ target }) => setPokemon(target.value)}>
        {pokemones.map((pokemon, index) => (
          <option value={pokemon.name} key={index}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <Button className="botton" onClick={goToPokemon} variant="dark">
        Ver detalles pokemón
      </Button>
    </div>
  );
};
export default Pokemones;
