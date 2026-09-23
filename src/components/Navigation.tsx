import React from "react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
        <Link to="/user/3">User 3</Link>
      </nav>
    </div>
  );
};

export default Navigation;
