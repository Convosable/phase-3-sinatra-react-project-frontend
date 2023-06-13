import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";

function Dog() {

    const [dogsList, setDogsList] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:9292/dogs")
        .then (r => r.json())
        .then((dogs) => setDogsList(dogs)); 
    }, []);

    
    return (
    <div className="dogs">
        <div>
            List a dog for Adoption:
            <button onClick = {() => navigate('/new-dog-form')}>Click Here</button>
        </div>
      {dogsList.map((dog) => 
        <div key={dog.id}>
          <h1>{dog.name}</h1>
          <img src = {dog.image_url} alt = {dog.name} height="300"/>
          <h4>Age: {dog.age} Sex: {dog.sex}  Weight: {dog.weight} lbs.</h4>
          <Link to={`/dogs/${dog.id}`}>More Details</Link>
        </div>
      )}
    </div>
  );
}

export default Dog;

// on adopt me click, cb function will be called to make a delete request and say congradulations yuo adopted {dog.name}