import axios  from 'axios';

/*const fetchPokemon = ()=> {
   fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
     .then((response) => response.json())
     .then((allpokemon) => console.log(allpokemon.results))
 }

// con async await
 const fetchPokemonA = async () => {
   try {
     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
     const allpokemon = await response.json();
     return allpokemon.results;
   } catch (error) {
     console.log(error);
   }
}

//Ahora con axios

const axiosPokemon = async (limit) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}
*/
//Obtener datos de un pokemon

/*const obtenerDatos = async(numero)=>{
  try{
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numero}`);
  return response.data;
  }
  catch(error){
    console.log("El pokemon no ha sido encontrado");
  }

}*/
const obtenerImagen = async(url)=>{
  try{
    const response = await axios.get(url);
    return response.data;
  }
  catch(error){
    console.log('La imagen no ha sido encontrada');
  }
}
export {obtenerImagen}
