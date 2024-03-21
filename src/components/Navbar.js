import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ loggedIn, toggleLogin, profiles }) {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    // return (
    //     <div className={`navbar ${collapsed ? 'collapsed' : ''}`}>
    //         <button onClick={toggleNavbar}>&#9776;</button>
    //          {!collapsed && !loggedIn ? (
    //             <Link to="/login">Login</Link>
    //         ) : (
    //             <>
    //                 {profiles.map(profile => (
    //                     <Link to={`/profiles/${profile.id}`} key={profile.id}>
    //                         {profile.info.name}
    //                     </Link>
    //                 ))}
    //                 <button onClick={onLogout}>Logout</button>
    //             </>
    //         )}
    //     </div>
    // );
    return (
        <div className={`navbar ${collapsed ? 'collapsed' : ''}`}>
            <button onClick={toggleNavbar}>&#9776;</button>
            {!collapsed && (
                <>
                    {loggedIn ? (
                        <>
                            {profiles.map(profile => (
                                <Link to={`/profiles/${profile.id}`} key={profile.id}>
                                    {profile.info.name}
                                </Link>
                            ))}
                            <Link to="/addPet">Add a pet</Link>
                            <button onClick={toggleLogin}>Logout</button>
                        </>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </>
            )}
        </div>
    );
}
export default Navbar;

