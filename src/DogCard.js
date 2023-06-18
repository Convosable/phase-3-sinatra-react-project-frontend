import React from "react";
import { Link } from 'react-router-dom';

function DogCard( {dogsList} ) {

    return (
        <div>
            {dogsList.map((dog) => 
                <div key={dog.id}>
                    <h1>{dog.name}</h1>
                    <img src = {dog.image_url} alt = {dog.name} height="300"/>
                    <h2>Breed: {dog.breed}</h2>
                    <h4>ID: {dog.id} Age: {dog.age} Sex: {dog.sex}</h4>
                    <Link to={`/dogs/${dog.id}`}>More Details</Link>
                </div>
            )}
        </div>
    )
}

export default DogCard;