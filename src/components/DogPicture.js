import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { toast } from 'react-toastify';


export default function DogPicture( { addFavorite } ) {
    const [dogPhoto, setDogPhoto] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        fetchDogPhoto();
    }, [])

    const fetchDogPhoto = async () => {
        setLoading(true)
        try {
            const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
                headers: {
                    'x-api-key': process.env.REACT_APP_DOG_API_KEY
                }
            })
            setDogPhoto(response.data[0].url)            
        } catch (error) {
            console.error('Error fetching the dog photo', error)            
        } finally {
            setLoading(false)
        }
    }

    const handleAddFavorite = () => {
        addFavorite(dogPhoto)
        // toast.success('Added to Favorites!')

    }




  return (
    <div>
        <h2>Random Dog Photo</h2>
        {loading ? (
            <p>Loading...</p>
        ) : (
            dogPhoto && <img src={dogPhoto} alt='Dog' style={{ width: '300px', height: '300px'}} />
        )}
        <div>
            <button onClick={fetchDogPhoto}>Create a New Dog</button>
            <button onClick={handleAddFavorite}>Add to Favorites</button>
        </div>        
    </div>
  )
}
