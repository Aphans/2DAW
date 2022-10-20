import {obtenerDatos,obtenerImagen} from './pokemon.mjs';
//async await
/*console.log("Con async-await");
const pokemonFetch = await fetchPokemonA();
console.log(pokemonFetch);*/

//then catch
//fetchPokemon();

//con axios

//console.log(await fetchPokemon(10));

//console.log(await obtenerDatos(1));


const {img} = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png`;

const {name,heigth,width} = await obtenerDatos(1);
console.log(name,heigth,width,img);


