import React from "react";
import AddLogForm from "./AddLogForm";
import Info from "./Info";
import DynamicChart from "./Chart";


function PetPage({ profile }) {
    return (
        <div className="pet-page max-w-3xl mx-auto">
        <div className="info bg-white rounded-lg p-10 my-10">
        <p className="text-xl font-bold mb-2">{profile.name}</p>
        <ul>
          <li><strong>Age:</strong> {profile.age}</li>
          <li><strong>Breed:</strong> {profile.breed}</li>
          <li><strong>Vet's name:</strong> {profile.vetName}</li>
          <li><strong>Vet's number:</strong> {profile.vetNumber}</li>
        </ul>
      </div>
            <AddLogForm profile={profile} condition={profile.condition} />
            <DynamicChart profile={profile} condition={profile.condition} />
            <Info condition={profile.condition} />
        </div>
    )
}

export default PetPage
