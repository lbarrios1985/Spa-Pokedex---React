import React from 'react';
import logo from './../assets/images/pokeapi_logo.png';
import pikachu from './../assets/images/pikachu.png';

// import FavoriteContext from "../contexts/favoritesContext";
import FavoriteContext from '../contexts/FavoriteContext';
import { Link } from 'react-router-dom';

const { useContext } = React;

export const Navbar = (props) => {

  const { page } = props;
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <div className='col-logo'>
        <Link to='/'>
          <img src={logo}
            alt="pokeapi-logo"
            className="logo"
          />
        </Link>
      </div>
      <h1>Pokedex</h1>
      <div className='col-img-favorite'>
        <img src={pikachu}
          alt="pikachu"
          />
        {
          page === 'home' ? (
            <div>&#10084;&#65039; {favoritePokemons.length}</div>
          ):(<div/>)
        }
      </div>
    </nav>
  )
}
