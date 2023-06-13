import React, { useState } from "react";

function NewDogForm() {

    const [formData, setFormData] = useState({
        name: "",
        image_url: "",
        age: "",
        breed: "",
        sex: "",
        weight: "",
        size: "",
        shelter_id: "",
        breeder_id: "",
        created_at: Date.now(),
        updated_at: Date.now()
    })

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:9292/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div className = 'new-dog-form'>
            <form onSubmit = {handleSubmit}>
                <label>Name: </label>
                <input onChange = {handleChange} type='text' name='name' value={formData.name}/><br></br>
                <label>Image: </label>
                <input onChange = {handleChange} type='text' name='image_url' value={formData.image_url}/><br></br>
                <label>Age: </label>
                <input onChange = {handleChange} type='text' name='age' value={formData.age}/><br></br>
                <label>Breed: </label>
                <input onChange = {handleChange} type='text' name='breed' value={formData.breed}/><br></br>
                <label>Sex: </label>
                <input onChange = {handleChange} type='text' name='sex' value={formData.sex}/><br></br>
                <label>Weight: </label>
                <input onChange = {handleChange} type='text' name='weight' value={formData.weight}/><br></br>
                <label>Size: </label>
                <input onChange = {handleChange} type='text' name='size' value={formData.size}/><br></br>
                <label>Shelter ID: </label>
                <input onChange = {handleChange} type='text' name='shelter_id' value={formData.shelter_id}/><br></br>
                <label>Breeder ID: </label>
                <input onChange = {handleChange} type='text' name='breeder_id' value={formData.breeder_id}/><br></br>
                <input type="submit" value = "List for adoption!"/>
            </form>
        
        </div>
    )
}

export default NewDogForm