import { useEffect, useState } from 'react';
import './App.css';
import DogPicture from './components/DogPicture';
import Favorites from './components/Favorites';

function App() {

  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('dog')
  
  
  // load pics from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites)
  }, [])
 

  const addFavorite = (photo) => {
    const updatedFavorites = [...favorites, photo];
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }


  return (
    <div className="App">
      <h1>Dog Photo App</h1>
      <div>
        <button onClick={ () => setActiveTab('dog')}>Random Dog</button>
        <button onClick={ () => setActiveTab('favorites')}>Favorites</button>
      </div>
      <div>
        {activeTab === 'dog' ? (
          <DogPicture addFavorite={addFavorite}/>
        ) : (
          <Favorites favorites={favorites}/>
        )}
      </div>     
     
    </div>
  );
}

export default App;
