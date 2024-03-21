import React from "react";
import DietTracker from "./trackers/DietTracker";
import MedTracker from "./trackers/MedTracker";
import ActivityTracker from "./trackers/ActivityTracker";

function PetPage({profile}) {
    
    return (
        <div className="pet-page">
          
            <div className="info">
                <p>{profile.info.name}</p>
                Info:
                <ul>
                    <li>age:{profile.info.age}</li>
                    <li>breed:{profile.info.breed}</li>
                    <li>gender: {profile.info.gender}</li>
                    <li>vet's name: {profile.info.vetName}</li>
                    <li>vet's number: {profile.info.vetNumber}</li>
                </ul>
            </div> 
            <DietTracker profile={profile} />
            <MedTracker profile={profile} />
            <ActivityTracker profile={profile}/>
        </div>
    )
}

export default PetPage
