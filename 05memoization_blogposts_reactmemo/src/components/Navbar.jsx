import React from "react";

const Navbar = ({handleSignedIn}) => {
  return (
    <div className="navbar">
      <button className="btn btn-danger m-1 p-1" onClick={handleSignedIn}>Sign Out</button>
    </div>
  );
};

export default Navbar;
