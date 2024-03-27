import React from "react";
import { Link } from "react-router-dom";

function Navbar({ loggedIn, toggleLogin, profiles }) {
  return (
    <div className={"navbar p-4 fixed top-0 h-full"} style={{ backgroundColor: "rgba(5, 16, 112, 0.2)" , width: "125px"}}>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          {loggedIn ? (
            <>
              {profiles.map((profile) => (
                <Link
                  to={`/profiles/${profile.id}`}
                  key={profile.id}
                  className="text-white text-center hover:text-gray-300 my-2"
                >
                  {profile.name}
                </Link>
              ))}
              <Link
                to="/addPet"
                className="text-white text-center hover:text-gray-300 my-2"
              >
                Add pet
              </Link>
              <button
                onClick={toggleLogin}
                className="text-white hover:text-gray-300 my-2"
              >Logout
              </button>
            </>
          ) : (
            <button
              onClick={toggleLogin}
              className="text-white hover:text-gray-300 my-2"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;









