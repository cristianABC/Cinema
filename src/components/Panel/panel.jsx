import React, { Component } from "react";

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
        return;
      }
      movie.boletos--;

      return { movies: movies };
    });
  };
  render() {
    const lista = this.state.movies.map(movie => (
      <div className="card" style={{ width: "18rem" }}>
        <h1>{movie.name}</h1>
        <h2>Quedan {movie.boletos}</h2>
        <button
          className="btn btn-primary"
          onClick={() => this.comprarBoleta(movie.id)}
        >
          Comprar
        </button>
      </div>
    ));
    return (
      <div>
        <h1>Cinema</h1>
        <h2>Comprar boletos</h2>
        {lista}
      </div>
    );
  }
}

export default Panel;
