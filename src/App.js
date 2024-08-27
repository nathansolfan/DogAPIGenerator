import { useEffect, useState } from 'react';
import './App.css';
import DogPicture from './components/DogPicture';
import Favorites from './components/Favorites';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [favorites, setFavorites] = useState([]);
  const [activeTab, setActiveTab] = useState('dog');

  // Load pics from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (photo) => {
    const updatedFavorites = [...favorites, photo];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    toast.success('Added to Favorites!', {      
      autoClose: 3000, // Auto close after 3 seconds
    });
  };

  const clearFavorites = () => {
    setFavorites([]);
    localStorage.removeItem('favorites');
    toast.success('Favorites Cleared!', {      
      autoClose: 3000, 
    });
  };

  return (
    <div className="App">
      <ToastContainer
      position="top-center" // Example: Place it at the top-center
      autoClose={3000} // Automatically close the toast after 3 seconds
      hideProgressBar={false} // Show/hide the progress bar
      newestOnTop={false} // Toasts stack with newest on top
      closeOnClick // Close the toast on click
      rtl={false} // Right-to-left layout
      pauseOnFocusLoss // Pause toast when the window loses focus
      draggable // Allow toast to be draggable
      pauseOnHover
       
      />
      <h1>Dog Photo App</h1>
      <div>
        <button onClick={() => setActiveTab('dog')}>Generate Dog</button>
        <button onClick={() => setActiveTab('favorites')}>Favorites</button>
        {activeTab === 'favorites' && favorites.length > 0 && (
          <button onClick={clearFavorites} style={{ marginLeft: '10px' }}>
            Clear Favorites
          </button>
        )}
      </div>
      <div>
        {activeTab === 'dog' ? (
          <DogPicture addFavorite={addFavorite} />
        ) : (
          <Favorites favorites={favorites} />
        )}
      </div>
    </div>
  );
}

export default App;
