import React, { useState } from 'react';

function AddPetForm() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        breed: '',
        gender: '',
        vetName: '',
        vetNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddPet = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add pet');
            }
            return response.json();
        })
        .then(data => {
            // Reset form after successful addition
            setFormData({
                name: '',
                age: '',
                breed: '',
                gender: '',
                vetName: '',
                vetNumber: ''
            });
            alert('Pet added successfully!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to add pet');
        });
    };

    return (
        <form onSubmit={handleAddPet}>
            <h2>Add new pet profile</h2>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Age:
                <input type="text" name="age" value={formData.age} onChange={handleChange}/>
            </label>
             <br />
            <label>
                Breed:
                <input type="text" name="breed" value={formData.breed} onChange={handleChange}/>
            </label>
             <br />
            <label>
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange}/>
            </label>
             <br />
            <label>
                Vet's name:
                <input type="text" name="vetName" value={formData.vetName} onChange={handleChange}/>
            </label>
             <br />
            <label>
                Vet's number:
                <input type="text" name="vetNumber" value={formData.vetNumber} onChange={handleChange}/>
            </label>
           
            
      
            <button type="submit">Add Pet</button>
        </form>
    );
}

export default AddPetForm;

