import React from 'react';
import { useParams, Route, Switch } from 'react-router-dom';
import AddLog from './AddLog';
import Logs from './Logs';
import Chart from './Chart';
import Info from './Info';


function PetPage({ profiles, logs, updateLogs }) {
  console.log(logs)
  const { id } = useParams();
  // Find the profile with the matching id
  const profile = profiles.find(profile => profile.id == parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>;
  }
return (
    <div>
      <div className="pet-page max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-10 my-10 ">
            <p className="text-xl font-bold mb-2">{profile.name}</p>
          <div className="flex justify-between">
            <ul className="text-md py-2">
            <li><strong>Age:</strong> {profile.age}</li>
            <li><strong>Gender:</strong> {profile.gender}</li>
            <li><strong>Breed:</strong> {profile.breed}</li>
            <li><strong>Condition:</strong> {profile.condition}</li>
            <li><strong>Vet's name:</strong> {profile.vetName}</li>
            <li><strong>Vet's number:</strong> {profile.vetNumber}</li>
          </ul>
           <img src={profile.icon ? process.env.PUBLIC_URL + '/' + profile.icon : '/cat_2173433.png'} alt="cat-icon" style={{ height: '100px', marginRight: '100px' }} />
          </div>      
          <AddLog id={id} condition={profile.condition} updateLogs={updateLogs}/>
          <Logs profiles={profiles} />
        <Chart logs={logs} updateLogs={updateLogs}  profile={profile} condition={profile.condition} />
          <Info condition={profile.condition} />
        </div>
      </div>
    </div>
  );
}

export default PetPage;
