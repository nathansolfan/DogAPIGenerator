import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

toast.configure()

export default function DogPicture( { addFavorite } ) {
    const [dogPhoto, setDogPhoto] = useState(null)

    useEffect( () => {
        fetchDogPhoto();
    }, [])

    const fetchDogPhoto = async () => {
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/images/search')
            setDogPhoto(response.data[0].url)
            
        } catch (error) {
            console.error('Error fetching the dog photo', error)            
        }
    }

    const handleAddFavorite = () => {
        addFavorite(dogPhoto)
        toast.success('Added to Favorites!')

    }



  return (
    <div>
        <h2>Random Dog Photo</h2>
        {dogPhoto && <img src={dogPhoto} alt='Dog' style={{ width: '300px', height: '300px'}} />} 
        <div>
            <button onClick={fetchDogPhoto}>New Dog</button>
            <button onClick={handleAddFavorite}>Add to Favorites</button>
        </div>        
    </div>
  )
}
