import React from 'react';

export const CardPokemon = (props) => {


    const { pokemon , loading } = props;
    // const enUso = pokemon;
    // console.log('CardPokemon enUso', enUso.types);

    setTimeout(() => {
        // console.log('tiposPoke',  pokemon.type)
    }, 3000);


  return (

    <div>
        {loading ? (
            <div className='not-found-text'>Loading Details...</div>
        ) : (
            <div className='card-pokemon animate__animated animate__fadeInLeft'>
                <h1 className='container-name'> { pokemon.name } </h1>
                <div className='container-data'>
                    <div className="pokemon-type">
                        <span className='id-number'> # {pokemon.id} </span>
                        {pokemon.types.map((type, idx) => {
                        return (
                            <span key={idx} className={`bg-${type.type.name}`}>
                                {type.type.name}
                            </span>
                        );
                        })}
                    </div>
                    <div>
                        <img
                        src={pokemon.sprites.other.home.front_default}
                        alt={pokemon.name}
                        className="pokemon-img animate__animated animate__fadeIn"
                        />
                    </div>
                </div>
                <div className='container-statistics'>
                    
                    <div className='pokemon-stats'> 

                        {pokemon.stats.map((stat, idx) => {
                        return (
                            <div key={idx}>
                                <span>
                                    {stat.stat.name.replace('-', ' ')}
                                </span>
                                <progress id="file" max="100" value={stat.base_stat}></progress>
                                {stat.base_stat}%
                            </div>
                        );
                        })}    
                    </div>

                    <div>
                        <div className='pokemon-abilities'>
                            <span> Abilities: </span>
                            <div >
                            {pokemon.abilities.map((ability, idx) => {
                                return (
                                    <span key={idx}>
                                        {ability.ability.name.replace('-', ' ')}
                                    </span>
                                    );
                                })}      
                            </div>
                        </div>
                        <div className='pokemon-info'>
                            <div> <span> Height: </span> {pokemon.height} </div>
                            <div> <span> Weight: </span> {pokemon.weight} </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    
    </div>
  )
}
