import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/img/mapa.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "noactive");
  return (
    <Navbar bg="dark">
      <Container className="nav">
        <Navbar.Brand className="d-flex flex-end">
          <img
            src={Logo}
            width="30"
            height="30"
            className="mapa"
            alt="PokeMap"
          />
          <ul>
            <li>
              <NavLink to="/" className={setActive} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pokemones" className={setActive}>
                Pokemones
              </NavLink>
            </li>
          </ul>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
