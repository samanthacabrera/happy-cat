import React, { useState } from 'react';

function AddLog({ id, condition, updateLogs }) {
    const [formData, setFormData] = useState({
        date: '',
        weight: '',
        waterIntake: '',
        frequency: '',
        concentration: '',
        symptom: '',
        severity: '',
        foodIntake: '',
        appetite: '',
        thyroidLevel: '', 
        glucoseLevel: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleAddLog = (e) => {
        e.preventDefault();

        const newLogData = {
            profileID: parseInt(id),
            date: formData.date,
            weight: formData.weight,
            waterIntake: formData.waterIntake,
            frequency: formData.frequency,
            concentration: formData.concentration,
            symptom: formData.symptom,
            severity: formData.severity,
            foodIntake: formData.foodIntake,
            appetite: formData.appetite,
            thyroidLevel: formData.thyroidLevel,
            glucoseLevel: formData.glucoseLevel
        };

        fetch('http://localhost:3002/logs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newLogData)
        })
            .then(response => {
                if (!response.ok) {
                    alert('Failed to add log');
                    throw new Error('Failed to add log');
                }
                return response.json();
            })
            .then(() => {
              updateLogs({
                    date: '',
                    weight: '',
                    waterIntake: '',
                    frequency: '',
                    concentration: '',
                    symptom: '',
                    severity: '',
                    foodIntake: '',
                    appetite: '',
                    thyroidLevel: '',
                    glucoseLevel: ''
                })
                alert('Log added successfully!');
            })
            .catch(error => {
                console.error(error);
                alert('Failed to add log');
            });
    }

  let logTemplate;
  if (condition === 'Feline Lower Urinary Track Disease') {
      logTemplate = (
        <>
              <label className="block">Date:</label>
              <input className="border border-gray-300 rounded-md p-1 mb-2" type="date" name="date" value={formData.date} onChange={handleChange} />
               <label className="block">Water Intake (in ml):</label>
                <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="waterIntake" value={formData.waterIntake} onChange={handleChange} />
                <label className="block">Urination attempts / day:</label>
                <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="frequency" value={formData.frequency} onChange={handleChange} />
                <label className="block">Urine concentration:</label>
                <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="concentration" value={formData.concentration} onChange={handleChange} />
                <label className="block">Symptom:</label>
                <select className="border border-gray-300 rounded-md p-1 mb-2" name="symptom" value={formData.symptom} onChange={handleChange}>
                    <option value="">Select a symptom</option>
                    <option value="blood">Blood in urine</option>
                    <option value="discomfort">Discomfort while urinating</option>
                    <option value="accident">Urinating outside of litterbox</option>
                </select>
                <label className="block">Severity of Symptom:</label>
                <select className="border border-gray-300 rounded-md p-1 mb-2" name="severity" value={formData.severity} onChange={handleChange}>
                    <option value="">Select Severity</option>
                    <option value="mild">Mild</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                </select>
                <label className="block">Notes:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="note" value={formData.note} onChange={handleChange} />
            </>
       
      )
        
  }
  if (condition === 'Chronic Kidney Disease') {
         logTemplate = (
           <>
            <label className="block">Date:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="date" name="date" value={formData.date} onChange={handleChange} />
            <label className="block">Food Intake (in grams):</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="foodIntake" value={formData.foodIntake} onChange={handleChange} />      
            <label className="block">Appetite: </label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="appetite" value={formData.appetite} onChange={handleChange} >
            <option value="">Select </option>
            <option value="reduced">Reduced</option>
            <option value="normal">Normal</option>
            <option value="increased">Increased</option>
            </select>
            <label className="block">Weight (in lbs): </label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="weight" value={formData.weight} onChange={handleChange} />
            <label className="block">Water Intake (in ml):</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="waterIntake" value={formData.waterIntake} onChange={handleChange} />  
            <label className="block">Urination attempts / day: </label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="frequency" value={formData.frequency} onChange={handleChange} />
            <label className="block">Urine concentration: </label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="concentration" value={formData.concentration} onChange={handleChange} /> 
            <label className="block">Symptom:</label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="symptom" value={formData.symptom} onChange={handleChange} >
            <option value="">Select a symptom</option>
            <option value="vomit">Vomiting</option>
            <option value="diarrhea">Diarrhea</option>
            <option value="blood">Blood in stool</option>
            </select>
            <label className="block">Severity of Symptom:</label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="severity" value={formData.severity} onChange={handleChange} >
            <option value="">Select Severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            </select>
            <label className="block">Notes:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="note" value={formData.note} onChange={handleChange} />      
           </>
         )
  }
  if (condition === 'Hyperthyroidism') {
        logTemplate = (
          <>
            
            <label className="block">Date:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="date" name="date" value={formData.date} onChange={handleChange} />
              <label className="block">Food Intake (in grams):</label>
              <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="foodIntake" value={formData.foodIntake} onChange={handleChange} />      
              <label className="block">Appetite: </label>
              <select className="border border-gray-300 rounded-md p-1 mb-2" name="appetite" value={formData.appetite} onChange={handleChange} >
              <option value="">Select </option>
              <option value="reduced">Reduced</option>
              <option value="normal">Normal</option>
              <option value="increased">Increased</option>
              </select>
              <label className="block">Weight (in lbs): </label>
              <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="weight" value={formData.weight} onChange={handleChange} />
              <label className="block">T4 Level: </label>
              <input type="number" name="thyroidLevel" value={formData.thyroidLevel} onChange={handleChange} />
              <label className="block">Symptom:</label>
              <select className="border border-gray-300 rounded-md p-1 mb-2" name="symptom" value={formData.symptom} onChange={handleChange} >
              <option value="">Select a symptom</option>
              <option value="vomit">Vomiting</option>
              <option value="diarrhea">Diarrhea</option>
              <option value="blood">Blood in stool</option>
              </select>
              <label className="block">Severity of Symptom:</label>
              <select className="border border-gray-300 rounded-md p-1 mb-2" name="severity" value={formData.severity} onChange={handleChange} >
              <option value="">Select Severity</option>
              <option value="mild">Mild</option>
              <option value="moderate">Moderate</option>
              <option value="severe">Severe</option>
              </select>
              <label className="block">Notes:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="note" value={formData.note} onChange={handleChange} />
            </>
          )
  }
  if (condition === 'Inflammatory Bowel Disease') {
      logTemplate = (
        <>
          
            <label className="block">Date:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="date" name="date" value={formData.date} onChange={handleChange} />
            <label className="block">Food Intake (in grams):</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="foodIntake" value={formData.foodIntake} onChange={handleChange} />      
            <label className="block">Appetite: </label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="appetite" value={formData.appetite} onChange={handleChange} >
            <option value="">Select </option>
            <option value="reduced">Reduced</option>
            <option value="normal">Normal</option>
            <option value="increased">Increased</option>
            </select>
            <label className="block">Weight (in lbs): </label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="weight" value={formData.weight} onChange={handleChange} />
            <label className="block">Symptom:</label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="symptom" value={formData.symptom} onChange={handleChange} >
            <option value="">Select a symptom</option>
            <option value="vomit">Vomiting</option>
            <option value="diarrhea">Diarrhea</option>
            <option value="blood">Blood in stool</option>
            </select>
            <label className="block">Severity of Symptom:</label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="severity" value={formData.severity} onChange={handleChange} >
            <option value="">Select Severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            </select>
            <label className="block">Notes:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="note" value={formData.note} onChange={handleChange} />
          </>
        )
       
  }
  if (condition === 'Diabetes Mellitus') {
       logTemplate = (
         <>
           
            <label className="block">Date:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="date" name="date" value={formData.date} onChange={handleChange} />
            <label className="block">Food Intake (in grams):</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="foodIntake" value={formData.foodIntake} onChange={handleChange} />      
            <label className="block">Appetite: </label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="appetite" value={formData.appetite} onChange={handleChange} >
            <option value="">Select </option>
            <option value="reduced">Reduced</option>
            <option value="normal">Normal</option>
            <option value="increased">Increased</option>
            </select>
            <label className="block">Weight (in lbs): </label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="number" name="weight" value={formData.weight} onChange={handleChange} />
            <label className="block">Symptom:</label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="symptom" value={formData.symptom} onChange={handleChange} >
            <option value="">Select a symptom</option>
            <option value="vomit">Vomiting</option>
            <option value="diarrhea">Diarrhea</option>
            <option value="blood">Blood in stool</option>
            </select>
            <label className="block">Severity of Symptom:</label>
            <select className="border border-gray-300 rounded-md p-1 mb-2" name="severity" value={formData.severity} onChange={handleChange} >
            <option value="">Select Severity</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            </select>
            <label className="block">Glucose Level: </label>
          <input type="number" name="glucoseLevel" value={formData.glucoseLevel} onChange={handleChange} />
           <label className="block">Notes:</label>
            <input className="border border-gray-300 rounded-md p-1 mb-2" type="text" name="note" value={formData.note} onChange={handleChange} />
          </>
        )
    }

    return (
        <form onSubmit={handleAddLog} className="max-w-md mt-2">
            {logTemplate}
            <button className="bg-blue-300 hover:bg-blue-400 text-white text-sm m-4 py-2 px-2 rounded focus:outline-none focus:shadow-outline">Add Log</button>
        </form>
    );
}

export default AddLog;
