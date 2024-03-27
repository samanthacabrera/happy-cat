import React, { useState } from 'react';

function AddPetForm({ profile, profiles }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        breed: '',
        condition: '',
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
    
    const lastProfile = profiles[profiles.length - 1];
    const newPetId = lastProfile ? lastProfile.id + 1 : 1; // Generate a new ID

    const newPetData = {
        id: newPetId, // Generate a new ID for the new pet
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        breed: formData.breed,
        condition: formData.condition,
        vetName: formData.vetName,
        vetNumber: formData.vetNumber,
        logs: [] // Empty logs for the new pet
    };

    fetch('http://localhost:3001/profiles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPetData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add pet');
        }
        return response.json();
    })
    .then(data => {
        setFormData({
            name: '',
            age: '',
            breed: '',
            condition: '',
            gender: '',
            vetName: '',
            vetNumber: ''
        });
        alert('Pet added successfully!');
    })
    .catch(error => {
        console.error(error);
        alert('Failed to add pet');
    });
};


    // return (
    //     <form onSubmit={handleAddPet}>
         
    //         <label>
    //             Name:
    //             <input type="text" name="name" value={formData.name} onChange={handleChange}/>
    //         </label>
    //         <br />
    //         <label>
    //             Age:
    //             <input type="text" name="age" value={formData.age} onChange={handleChange}/>
    //         </label>
    //         <br />
    //          <label>
    //             Gender:
    //             <input type="text" name="gender" value={formData.gender} onChange={handleChange}/>
    //         </label>
    //          <br />
    //         <label>
    //             Breed:
    //             <input type="text" name="breed" value={formData.breed} onChange={handleChange}/>
    //         </label>
    //         <br />
    //         <label>
    //             Condition:
    //             <select name="condition" value={formData.condition} onChange={handleChange}>
    //                 <option value="">Select a condition</option>
    //                 <option value="Feline Lower Urinary Track Disease">Feline Lower Urinary Track Disease</option>
    //                 <option value="Chronic Kidney Disease">Chronic Kidney Disease</option>
    //                 <option value="Hyperthyroidism">Hyperthyroidism</option>
    //                 <option value="Infalmmatory Bowel Disease">Inflammatory Bowel Disease</option>
    //                 <option value="Diabetes Mellitus">Diabetes Mellitus</option>
    //                 <option value="Feline obesity">Feline obesity</option>
    //             </select>
    //         </label>
    //         <br/>
    //         <label>
    //             Vet's name:
    //             <input type="text" name="vetName" value={formData.vetName} onChange={handleChange}/>
    //         </label>
    //          <br />
    //         <label>
    //             Vet's number:
    //             <input type="text" name="vetNumber" value={formData.vetNumber} onChange={handleChange}/>
    //         </label>
           
            
      
    //         <button type="submit">Add Pet</button>
    //     </form>
    // );
    return (
    <form onSubmit={handleAddPet} className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="name">Name:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="age">Age:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="gender">Gender:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="breed">Breed:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="breed" value={formData.breed} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="condition">Condition:</label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="condition" value={formData.condition} onChange={handleChange}
        >
          <option value="">Select a condition</option>
          <option value="Feline Lower Urinary Track Disease">Feline Lower Urinary Track Disease</option>
          <option value="Chronic Kidney Disease">Chronic Kidney Disease</option>
          <option value="Hyperthyroidism">Hyperthyroidism</option>
          <option value="Inflammatory Bowel Disease">Inflammatory Bowel Disease</option>
          <option value="Diabetes Mellitus">Diabetes Mellitus</option>
          <option value="Feline obesity">Feline obesity</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="vetName">Vet's name:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="vetName" value={formData.vetName} onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="vetNumber">Vet's number:</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text" name="vetNumber" value={formData.vetNumber} onChange={handleChange} />
      </div>
      {/* <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Pet
      </button> */}
    <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
       Add Pet
      </button>
    </form>
  );
}

export default AddPetForm;

