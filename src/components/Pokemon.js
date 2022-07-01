import React, { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import { Link } from 'react-router-dom';



export const Pokemon = ( props ) => {
  
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <Link to={`/pokemon/${ pokemon.id }`} className="pokemon-card animate__animated animate__fadeIn">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img animate__animated animate__fadeIn"
          />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div className="id-number"># {pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <span key={idx} className={`bg-${type.type.name}`}>
                  {type.type.name}
              </span>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn" title=" Favorite ">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </Link>
  )
}
