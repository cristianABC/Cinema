import React, { Component } from "react";
import Movie from "../Movie/movie";
import "./panel.css";
class Panel extends Component {
  state = {
    boletas: 5,
    movies: [
      {
        id: 1,
        name: "rápido y furioso 9",
        boletos: 4
      },
      {
        id: 2,
        name: "max mad",
        boletos: 4
      },
      {
        id: 3,
        name: "rápido y furioso 9",
        boletos: 4
      },
      {
        id: 4,
        name: "max mad",
        boletos: 4
      },
      {
        id: 5,
        name: "rápido y furioso 9",
        boletos: 4
      },
      {
        id: 6,
        name: "max mad",
        boletos: 4
      }
    ]
  };
  comprarBoleta = id => {
    this.setState(prevState => {
      const movies = [...prevState.movies];
      let movie = movies.find(el => {
        return el.id === id;
      });
      if (movie.boletos <= 0) {
        alert("No ha más boletos disponibles para " + movie.name);
        return;
      }
      movie.boletos--;

      return { movies: movies };
    });
  };
  render() {
    const lista = this.state.movies.map(movie => (
      <Movie movie={movie} comprarBoleta={() => this.comprarBoleta(movie.id)} />
    ));
    return (
      <div>
        <h1>Cinema</h1>
        <h2>Sistema de compra de boletos</h2>
        <div className="Panel">{lista}</div>
      </div>
    );
  }
}

export default Panel;
