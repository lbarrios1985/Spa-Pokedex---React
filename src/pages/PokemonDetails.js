import React from 'react';
import { useParams } from 'react-router-dom';
import { searchPokemon } from '../api';
import { CardPokemon } from '../components/CardPokemon';
import { Navbar } from '../components/Navbar';


const { useState, useEffect } = React;

export const PokemonDetails = () => {
  
  const { id } = useParams();

  const [pokemon, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);



  console.log( 'id', id )

  const fetchPokemons = async () => {
    setLoading(true);
    setNotFound(false);
    // let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // const result = await getPokemonData(url);
    const result = await searchPokemon(id);  
    // console.log('url',url);


    if (!result) {
      setNotFound(true);
      setLoading(false);
      console.log('************!Result',result);
      return; 
    } else {
      setPokemons(result);
      console.log('Salio result',result);
      console.log('Salio pokemon',  pokemon);
      // setTimeout(() => {
      //   console.log('tiposPoke',  pokemon.type)
      // }, 3000);
    }
    setLoading(false);
    console.log('SALIO TODO')

    // setTimeout(() => {
    //   console.log('tiposPoke',  pokemon)
    // }, 3000);
    
    
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


  return (
    <>
      <Navbar />

      <div className='container-details'>
        { notFound ? (
          <div className='not-found-text'>
            Loading...
          </div>
          ) : (
            <CardPokemon pokemon={pokemon} loading={loading} />
          ) 
        }
      </div>

    </>
  )
}
