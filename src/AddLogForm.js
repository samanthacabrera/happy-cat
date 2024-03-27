import React, { useState } from 'react';

function LogForm({ profile }) {
  // State variables for all logs
  const [logs, setLogs] = useState(profile.logs);
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  // State variables for condition-specific logs
  const [foodIntake, setFoodIntake] = useState('');
  const [appetite, setAppetite] = useState('');
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [frequency, setFrequency] = useState('');
  const [concentration, setConcentration] = useState('');
  const [symptom, setSymptom] = useState('');
  const [severity, setSeverity] = useState('');
  const [thyroidLevel, setThyroidLevel] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [activity, setActivity] = useState('');

// POST request for new logs
  const handleAddLog = (event) => {
    event.preventDefault();
    // Construct new log object
    const newLog = {
      date,
      note
    };

    // Send POST request to add new log
    const profileId = profile.id;
    fetch(`http://localhost:3001/profiles/${profileId}/logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLog),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add log');
      }
      return response.json();
    })
    .then(logs => {
      // Update logs state with new log
      setLogs([...logs, newLog]);
      alert('Log added successfully');

      // Clear the form inputs after successful submission
      setDate('');
      setNote('');
    })
    .catch(error => {
      alert('Failed to add log. Please try again.', error);
    });
  };

  // Define log template based on profile condition
  let logTemplate;
  if (profile.condition === 'Feline Lower Urinary Track Disease') {
    logTemplate = (
      <>
        <label>Water Intake (in ml):</label>
        <input type="number" name="waterIntake" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)} />      
        <label>Urination attempts / day: </label>
        <input type="number" name="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
        <label>Urine concentration: </label>
        <input type="text" name="concentration" value={concentration} onChange={(e) => setConcentration(e.target.value)} />
        <label>Symptom:</label>
        <select name="symptom" value={symptom} onChange={(e) => setSymptom(e.target.value)} >
        <option value="">Select a symptom</option>
        <option value="blood">Blood in urine</option>
        <option value="discomfort">Discomfort while urinating</option>
        <option value="accident">Urinating outside of litterbox</option>
        </select>
        <label>Severity of Symptom:</label>
        <select name="severity" value={severity} onChange={(e) => setSeverity(e.target.value)} >
        <option value="">Select Severity</option>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
        </select>
   
      </>
    );
  }
  if (profile.condition === 'Chronic Kidney Disease') {
    logTemplate = (
      <>
        <label>Food Intake (in grams):</label>
        <input type="number" name="foodIntake" value={foodIntake} onChange={(e) => setFoodIntake(e.target.value)} />      
        <label>Appetite: </label>
        <select name="appetite" value={appetite} onChange={(e) => setAppetite(e.target.value)} >
        <option value="">Select </option>
        <option value="reduced">Reduced</option>
        <option value="normal">Normal</option>
        <option value="increased">Increased</option>
        </select>
        <label>Weight (in lbs): </label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Water Intake (in ml):</label>
        <input type="number" name="waterIntake" value={waterIntake} onChange={(e) => setWaterIntake(e.target.value)} />  
        <label>Urination attempts / day: </label>
        <input type="number" name="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
        <label>Urine concentration: </label>
        <input type="text" name="concentration" value={concentration} onChange={(e) => setConcentration(e.target.value)} />       
      </>
    )
  }
  if (profile.condition === 'Hyperthyroidism') {
    logTemplate = (
      <>
        <label>Food Intake (in grams):</label>
        <input type="number" name="foodIntake" value={foodIntake} onChange={(e) => setFoodIntake(e.target.value)} />      
        <label>Appetite: </label>
        <select name="appetite" value={appetite} onChange={(e) => setAppetite(e.target.value)} >
        <option value="">Select </option>
        <option value="reduced">Reduced</option>
        <option value="normal">Normal</option>
        <option value="increased">Increased</option>
        </select>
        <label>Weight (in lbs): </label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>T4 Level: </label>
        <input type="number" name="thyroidLevel" value={thyroidLevel} onChange={(e) => setThyroidLevel(e.target.value)} />
      </>
    )
  }
  if (profile.condition === 'Inflammatory Bowel Disease') {
    logTemplate = (
      <>
       <label>Food Intake (in grams):</label>
        <input type="number" name="foodIntake" value={foodIntake} onChange={(e) => setFoodIntake(e.target.value)} />      
        <label>Appetite: </label>
        <select name="appetite" value={appetite} onChange={(e) => setAppetite(e.target.value)} >
        <option value="">Select </option>
        <option value="reduced">Reduced</option>
        <option value="normal">Normal</option>
        <option value="increased">Increased</option>
        </select>
        <label>Weight (in lbs): </label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Symptom:</label>
        <select name="symptom" value={symptom} onChange={(e) => setSymptom(e.target.value)} >
        <option value="">Select a symptom</option>
        <option value="vomit">Vomiting</option>
        <option value="diarrhea">Diarrhea</option>
        <option value="blood">Blood in stool</option>
        </select>
        <label>Severity of Symptom:</label>
        <select name="severity" value={severity} onChange={(e) => setSeverity(e.target.value)} >
        <option value="">Select Severity</option>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
        </select>
        <label>T4 Level: </label>
        <input type="number" name="thyroidLevel" value={thyroidLevel} onChange={(e) => setThyroidLevel(e.target.value)} />
      </>
    )
  }
  if (profile.condition === 'Diabetes Mellitus') {
    logTemplate = (
      <>
        <label>Food Intake (in grams):</label>
        <input type="number" name="foodIntake" value={foodIntake} onChange={(e) => setFoodIntake(e.target.value)} />      
        <label>Appetite: </label>
        <select name="appetite" value={appetite} onChange={(e) => setAppetite(e.target.value)} >
        <option value="">Select </option>
        <option value="reduced">Reduced</option>
        <option value="normal">Normal</option>
        <option value="increased">Increased</option>
        </select>
        <label>Weight (in lbs): </label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Glucose Level: </label>
        <input type="number" name="glucoseLevel" value={glucoseLevel} onChange={(e) => setGlucoseLevel(e.target.value)} />
      </>
    )
  }
  if (profile.condition === 'Feline Obesity') {
    logTemplate = (
      <>
        <label>Food Intake (in grams):</label>
        <input type="number" name="foodIntake" value={foodIntake} onChange={(e) => setFoodIntake(e.target.value)} />      
        <label>Appetite: </label>
        <select name="appetite" value={appetite} onChange={(e) => setAppetite(e.target.value)} >
        <option value="">Select </option>
        <option value="reduced">Reduced</option>
        <option value="normal">Normal</option>
        <option value="increased">Increased</option>
        </select>
        <label>Weight (in lbs): </label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Activity (in mins): </label>
        <input type="number" name="activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
      </>
    )
  }

  return (
    <>
      <form onSubmit={handleAddLog}>
        <label>Date:</label>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        {logTemplate}
        <label>Notes:</label>
        <input type="text" name="note" value={note} onChange={(e) => setNote(e.target.value)}  />
        <button type="submit">Add Log</button>
      </form>
        <ul className="divide-y divide-gray-200 pt-10">
          {logs.slice().reverse().map((log, index) => (
            <li key={index} className="py-2">
              <span className="font-semibold"> Date:</span> {log.date}, 
              <span className="font-semibold"> Food Intake:</span> {log.foodIntake} g,
              <span className="font-semibold"> Water Intake:</span> {log.waterIntake} oz,
              <span className="font-semibold"> Weight:</span> {log.weight} lbs,
              <span className="font-semibold"> Notes:</span> {log.note}
            </li>
          ))}
        </ul>

    </>
  )
}

export default LogForm;
