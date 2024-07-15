// import React from "react";
// import { Link , useHistory} from "react-router-dom";

// function Navbar({ profiles }) {
//   const history = useHistory()
//   const navToAddPet = () => {
//     history.push('/addPet')
//   }
//   return (
//     <div className="navbar">
//       <>
//         <p>Pet Profiles:</p>
//               {profiles.map((profile) => (
//                 <Link
//                   to={`/profiles/${profile.id}`}
//                   key={profile.id}
//                 >
//                   {profile.name}
//                 </Link>
//               ))}
//         <button onClick={navToAddPet}>
//           Add Cat</button>
//             </>
//     </div>   
//   );
// }

// export default Navbar;

import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar({ profiles }) {
  const history = useHistory();
  const navToAddPet = () => {
    history.push('/addPet');
  };

  return (
    <div className="navbar fixed left-0 top-0 h-full w-48 flex flex-col justify-start items-center">
      <p className="text-gray-800 text-lg  mt-6 mb-4">Pet Profiles:</p>
      {profiles.map((profile) => (
        <Link
          to={`/profiles/${profile.id}`}
          key={profile.id}
          className="text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out mb-2"
        >
          {profile.name}
        </Link>
      ))}
      <button
        onClick={navToAddPet}
        className="bg-blue-300 hover:bg-blue-400 text-white py-2 px-6 rounded-full focus:outline-none focus:shadow-outline mt-6 transition duration-300 ease-in-out">
        Add Cat
      </button>
    </div>
  );
}

export default Navbar;
