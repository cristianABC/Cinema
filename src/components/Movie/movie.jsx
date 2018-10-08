import React from "react";
import "./movie.css";
const Movie = props => {
  return (
    <div className="card Movie" style={{ width: "18rem" }}>
      <h1>{props.movie.name}</h1>
      <h2>Quedan {props.movie.boletos}</h2>
      <button className="btn btn-primary" onClick={() => props.comprarBoleta()}>
        Comprar
      </button>
    </div>
  );
};

export default Movie;
