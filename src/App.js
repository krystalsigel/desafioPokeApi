import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navigation } from './components/Navigation';
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './views/Pokemon';
import MyContext from './MyContext';

function App() {
  const endpoint = "https://pokeapi.co/api/v2/pokemon";
  const [pokemones, setPokemones] = useState([])

  /**
   * 
   * @param {Number} limit 'la cantidad de pokemones que vamos a recuperar'
   * @param {*} offset 'desde qué pokemon comenzar a recuperar'
   */
 
  const fetchPokemones = async (limit = 20, offset = 0) => {
    try{
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const {results} = await res.json();
      setPokemones(results)
    }catch(e){
      console.log(e.message)
    }
  }
  useEffect(() => {
    fetchPokemones(150, 0);
  }, [])

  return (
    <div className='App'>
      <MyContext.Provider value={{pokemones, fetchPokemones}}>
      <BrowserRouter>
          <Navigation />
       <Routes>
        <Route path='/' element={<Home/>} index/>
        <Route path='/pokemones' element={<Pokemones/>}/>
        <Route path='/pokemon/:name' element={<Pokemon/>}/>
       </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
export default App;
