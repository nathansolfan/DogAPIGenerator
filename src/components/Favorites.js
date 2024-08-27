import React from 'react'

export default function Favorites( {favorites}) {
  return (


<div>
    <h2>Favorites</h2>
    {favorites.length === 0 ? (
        <p>No favorites yet!</p>
    ) : (
        <div>
        {favorites.map((photo, index) => (
            <img
            key={index}
            src={photo}
            alt={`Favorite ${index}`}
            style={{ width: '150px', height: '150px', margin: '5px'}}
            />
        ))}
        </div>
    )}
    </div>
  )
}
