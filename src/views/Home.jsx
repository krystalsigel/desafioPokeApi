import React from "react";
import Logo from "../assets/img/pikachu.png";

const Home = () => {
  return (
    <div>
      <h1 className=" m-3 p-3">¡Bienvenido Maestro Pokemón!</h1>
      <img src={Logo} alt="pikachu" />
    </div>
  );
};

export default Home;
