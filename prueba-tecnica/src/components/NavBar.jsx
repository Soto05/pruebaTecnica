import React from "react";
import "./NavBar.css";
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Genero</a>
        </li>
        <li>
          <a href="/">Pais</a>
        </li>
        <li>
          <a href="/">TvShows</a>
        </li>
        <li>
          <a href="/">Peliculas</a>
        </li>
      </ul>
      <div>
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
      <div>
        <span>online</span>
        <span>username</span>
      </div>
    </nav>
  );
};
