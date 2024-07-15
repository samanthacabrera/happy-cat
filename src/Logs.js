import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Logs({ profiles }) {

    const [logs, setLogs] = useState([]);

     useEffect(() => {
        fetch('http://localhost:3002/logs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch logs');
                }
                return response.json();
            })
            .then(logs => {
                setLogs(logs);
            })
            .catch(error => {
                console.error(error);
            });
     }, []);

    
    const { id } = useParams(); 
    const profile = profiles.find(profile => profile.id == parseInt(id));

    if (!profile) {
        return <div>Profile not found</div>
    }


    function logTemplate(condition, log) {
    if (condition === 'Feline Lower Urinary Track Disease') {
        return (
            <p>
                <span className="font-semibold">Date: </span> {log.date}, <span className="font-semibold">Water Intake: </span> {log.waterIntake}, <span className="font-semibold">Urination Frequency: </span>{log.frequency}, <span className="font-semibold">Urine Concentration: </span> {log.concentration}, <span className="font-semibold">Symptom: </span> {log.symptom}, <span className="font-semibold">Severity of Symptom: </span> {log.severity}, <span className="font-semibold">Notes: </span> {log.note}
            </p>
        );
    } 
    if (condition === 'Chronic Kidney Disease') {
        return (
            <p>
                <span className="font-semibold">Date: </span>{log.date}, <span className="font-semibold">Water Intake: </span> {log.waterIntake}, <span className="font-semibold">Urination Frequency: </span> {log.frequency}, <span className="font-semibold">Urine Concentration: </span> {log.concentration}, <span className="font-semibold">Food Intake: </span>: {log.foodIntake}, <span className="font-semibold">Weight: </span> {log.weight}, <span className="font-semibold">Symptom: </span> {log.symptom}, <span className="font-semibold">Severity of Symptom: </span> {log.severity}, <span className="font-semibold">Notes: </span> {log.note}
            </p>
        );
    } 
    if (condition === 'Hyperthyroidism') {
        return (
            <p>
                <span className="font-semibold">Date: </span> {log.date}, <span className="font-semibold">Food Intake: </span> {log.foodIntake}, <span className="font-semibold">Weight: </span> {log.weight}, <span className="font-semibold">Appetite: </span> {log.appetite}, <span className="font-semibold">Symptom: </span> {log.symptom}, <span className="font-semibold">Severity of Symptom: </span> {log.severity}, <span className="font-semibold">T4 Level: </span> {log.thyroid}, <span className="font-semibold">Notes: </span> {log.note}
            </p>
        );
    } 
    if (condition === 'Inflammatory Bowel Disease') {
        return (
            <p>
                <span className="font-semibold">Date: </span> {log.date}, <span className="font-semibold">Food Intake: </span> {log.foodIntake}, <span className="font-semibold">Weight: </span> {log.weight}, <span className="font-semibold">Symptom: </span> {log.symptom}, <span className="font-semibold">Severity of Symptom: </span> {log.severity}, <span className="font-semibold">Notes: </span> {log.note}
            </p>
        );
    } 
    if (condition === 'Diabetes Mellitus') {
        return (
            <p>
                <span className="font-semibold">Date: </span> {log.date},<span className="font-semibold">Water Intake: </span> {log.waterIntake}, <span className="font-semibold">Urination Frequency: </span> {log.frequency}, <span className="font-semibold">Urine Concentration: </span> {log.concentration}, <span className="font-semibold">Food Intake: </span> {log.foodIntake}, <span className="font-semibold">Weight: </span> {log.weight}, <span className="font-semibold">Glucose Level: </span> {log.glucose}, <span className="font-semibold">Symptom: </span> {log.symptom}, <span className="font-semibold">Severity of Symptom </span> {log.severity}, <span className="font-semibold">Notes: </span> {log.note}
            </p>
        );
    } 
}

    return (
        <div>
            <ul className="divide-y divide-gray-100 py-10">
                {logs.slice().reverse().map((log, index) => (
                    <li key={index} className="text-md py-2">
                        {logTemplate(profile.condition, log)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Logs;
